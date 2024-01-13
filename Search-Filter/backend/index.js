import express from "express";
import cors from "cors";

const PORT = 3000;
const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.json(Users);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
