const express = require("express");

const app = express();
const PORT = process.env.PORT ? Number(process.env.PORT) : 3000;
const HOST = "0.0.0.0";

app.get("/health", (_req, res) => {
  res.status(200).json({ ok: true });
});

app.get("/", (_req, res) => {
  res.status(200).json({
    name: "cicd-express-server",
    message: "Server is running hello ruturaj khalkar",
    endpoint: "/health",
  });
})

app.use((_req, res) => {
  res.status(404).json({ error: "Not Found" });
});

const server = app.listen(PORT, HOST, () => {
  console.log(`Server listening on http://${HOST}:${PORT}`);
});



process.on("SIGINT", () => {
  console.log("Shutting down...");
  server.close(() => process.exit(0));
});

