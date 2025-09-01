import express from "express";

const app = express()
app.use(express.json())

app.get("/", (req, res) => {
    res.json("Hello There")
})

app.listen(process.env.PORT || 8000, () => {
    console.log("server running on ", (process.env.PORT || 8000))
})
