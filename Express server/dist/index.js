import express from "express";
import { createClient } from "redis";
const app = express();
app.use(express.json());
const client = createClient();
client.connect()
    .then(() => {
    app.listen(process.env.PORT || 8000, () => {
        console.log("server running on port ", (process.env.PORT || 8000));
    });
});
app.post("/submit", async (req, res) => {
    try {
        const { probId, userId, code, language } = req.body;
        // push data into a db
        await client.lPush("submission", JSON.stringify({ probId, userId, code, language }));
        res.json({
            message: "Submitted"
        });
    }
    catch (error) {
        console.log(error);
        return res.status(500).json({
            error: "Internal server error"
        });
    }
});
//# sourceMappingURL=index.js.map