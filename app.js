/**
 * Production static server for Onecall Solution (PM2).
 * Serves public/site directly (no vite build required for the marketing site).
 */
import http from "node:http";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const SITE_DIR = path.join(__dirname, "public", "site");
const PUBLIC_DIR = path.join(__dirname, "public");
const PORT = Number(process.env.PORT || 3016);
const HOST = process.env.HOST || "0.0.0.0";

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".mjs": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".gif": "image/gif",
  ".svg": "image/svg+xml",
  ".ico": "image/x-icon",
  ".webp": "image/webp",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".map": "application/json; charset=utf-8",
};

function send(res, status, body, headers = {}) {
  res.writeHead(status, headers);
  res.end(body);
}

function tryFile(rootDir, pathname) {
  const root = path.resolve(rootDir);
  let filePath = path.resolve(path.join(rootDir, pathname));
  if (!filePath.startsWith(root)) return null;

  if (fs.existsSync(filePath) && fs.statSync(filePath).isDirectory()) {
    filePath = path.join(filePath, "index.html");
  }
  if (!fs.existsSync(filePath) || !fs.statSync(filePath).isFile()) return null;
  return filePath;
}

function resolveFile(urlPath) {
  let pathname = decodeURIComponent((urlPath || "/").split("?")[0]);
  if (pathname === "/") pathname = "/index.html";

  // Root public assets (logo, favicon) outside site/
  if (pathname === "/logo.png" || pathname === "/favicon.ico" || pathname === "/robots.txt") {
    const pub = tryFile(PUBLIC_DIR, pathname);
    if (pub) return pub;
  }

  let file = tryFile(SITE_DIR, pathname);
  if (file) return file;

  if (pathname === "/site" || pathname === "/site/") {
    return tryFile(SITE_DIR, "/index.html");
  }
  if (pathname.startsWith("/site/")) {
    return tryFile(SITE_DIR, pathname.slice("/site".length));
  }
  return null;
}

function cacheHeaders(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  if (ext === ".html") {
    return { "Cache-Control": "no-cache" };
  }
  if (ext === ".css" || ext === ".js") {
    return { "Cache-Control": "public, max-age=300" };
  }
  return { "Cache-Control": "public, max-age=86400" };
}

if (!fs.existsSync(SITE_DIR)) {
  console.error(`[onecall] Missing ${SITE_DIR}`);
}

const server = http.createServer((req, res) => {
  try {
    if (!fs.existsSync(SITE_DIR)) {
      return send(res, 503, "Site folder missing.", {
        "Content-Type": "text/plain; charset=utf-8",
      });
    }

    const filePath = resolveFile(req.url || "/");
    if (!filePath) {
      return send(res, 404, "Not Found", {
        "Content-Type": "text/plain; charset=utf-8",
      });
    }

    const body = fs.readFileSync(filePath);
    const type = MIME[path.extname(filePath).toLowerCase()] || "application/octet-stream";
    return send(res, 200, body, {
      "Content-Type": type,
      "Content-Length": body.length,
      ...cacheHeaders(filePath),
    });
  } catch (error) {
    console.error(error);
    return send(res, 500, "Internal Server Error", {
      "Content-Type": "text/plain; charset=utf-8",
    });
  }
});

server.listen(PORT, HOST, () => {
  console.log(`[onecall] serving ${SITE_DIR} on http://${HOST}:${PORT}`);
});
