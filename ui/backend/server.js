import express from "express";
import cors from "cors";
import statusRouter from "./routes/status.js";
import nasRouter from "./routes/nas.js";
import tunnelRouter from "./routes/tunnel.js";
import electrumRouter from "./routes/electrum.js";

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/status", statusRouter);
app.use("/api/nas", nasRouter);
app.use("/api/tunnel", tunnelRouter);
app.use("/api/electrum", electrumRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`🧱 RaspiVault Backend running on port ${PORT}`));

