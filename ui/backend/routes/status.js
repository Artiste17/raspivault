import express from "express";
import { exec } from "child_process";
const router = express.Router();

router.get("/", (req, res) => {
  exec("bitcoin-cli getblockchaininfo", (err, stdout) => {
    if (err) return res.status(500).json({ error: "Bitcoin Core unreachable" });
    try {
      const data = JSON.parse(stdout);
      res.json({
        blocks: data.blocks,
        headers: data.headers,
        verificationprogress: data.verificationprogress,
        chain: data.chain,
      });
    } catch {
      res.status(500).json({ error: "Parse error" });
    }
  });
});

export default router;

