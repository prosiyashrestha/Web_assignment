const express = require("express");
const userRoutes = require('./routes/userRoutes')

require("dotenv").config()
const connectDatabase =require('./database/database')

const app = express();


app.use(express.json())
app.use("/api/users", userRoutes)

connectDatabase()

const PORT = 5500;
app.listen(5500, () => {
  console.log(`Server running on port ${PORT}`);
});

