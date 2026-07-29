/**
 * cPanel / Phusion Passenger startup file (must be named app.js).
 *
 * Deploy:
 * 1. Upload full project to ~/onecallsolution (or similar)
 * 2. In cPanel → Setup Node.js App / Application Manager:
 *    Application Path = onecallsolution
 *    Application URL  = onecallsolution.in (or /)
 *    Environment      = Production
 *    Node.js version  = 22.x (required: >= 22.12)
 * 3. Run: npm install && npm run build
 * 4. Restart the application
 */
/* global PhusionPassenger */

if (typeof PhusionPassenger !== "undefined") {
  PhusionPassenger.configure({ autoInstall: false });
}

await import("./.output/server/index.mjs");
