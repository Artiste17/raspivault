import express from "express";
import { exec } from "child_process";
const router = express.Router();

router.get("/", (req, res) => {
  exec("docker ps --filter 'name=electrum-server' --format '{{.Status}}'", (err, stdout) => {
    if (err || !stdout) return res.status(500).json({ status: "offline" });
    res.json({ status: stdout.trim() });
  });
});

export default router;

