import express from "express";
import { exec } from "child_process";
const router = express.Router();

router.get("/", (req, res) => {
  exec("docker logs cloudflare-tunnel --tail 5", (err, stdout) => {
    if (err) return res.status(500).json({ error: "Tunnel not found" });
    const active = stdout.includes("Connection established");
    res.json({ active, logs: stdout });
  });
});

export default router;

