const express = require('express');
const authRoutes = require('./routes/auth.routes');
const cookiesparser = require('cookie-parser');
const app = express();


app.use(express.json());
app.use(cookiesparser());
app.use("/api/auth", authRoutes);



module.exports = app;