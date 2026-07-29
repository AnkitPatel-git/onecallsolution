/**
 * PM2 production process file — port 3016 only.
 * Usage: npm run build && npm run pm2:start
 */
module.exports = {
  apps: [
    {
      name: "onecallsolution",
      script: "app.js",
      cwd: __dirname,
      instances: 1,
      exec_mode: "fork",
      autorestart: true,
      watch: false,
      max_memory_restart: "300M",
      time: true,
      env: {
        NODE_ENV: "production",
        PORT: 3016,
        HOST: "0.0.0.0",
      },
    },
  ],
};
