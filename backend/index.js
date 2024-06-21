// backend/index.js
const express = require('express');
const cors = require("cors");
const rootRouter = require("./routes/index");
const port = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/v1", rootRouter);

app.listen(port, "0.0.0.0", ()=>{
    console.log(`Server is running on ${port}....`);
});
