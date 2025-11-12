import express from "express";
import { exec } from "child_process";
const router = express.Router();

router.get("/", (req, res) => {
  exec("mount | grep bittiumnode", (err, stdout) => {
    if (err || !stdout) return res.json({ status: "unmounted" });
    res.json({ status: "mounted", mountInfo: stdout.trim() });
  });
});

router.post("/sync", (req, res) => {
  exec("bash /usr/local/bin/sync_nas.sh", (err) => {
    if (err) return res.status(500).json({ message: "NAS sync failed" });
    res.json({ message: "NAS sync started" });
  });
});

export default router;

