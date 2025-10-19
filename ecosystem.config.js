module.exports = {
  apps: [
    {
      name: "pern-backend",
      cwd: "D:/projects/pern-samp/server",
      script: "npm",
      args: "start",
      watch: false,
    },
    {
      name: "pern-frontend",
      cwd: "D:/projects/pern-samp/zs",
      script: "npm",
      args: "start",

      watch: false,
    },
  ],
};
