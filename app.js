const express = require('express');
const app = express();
const mongoose = require("mongoose");
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoutes');
const adminRouter = require('./routes/adminRoutes');
const movieRouter = require('./routes/moviesRoutes');
const bookingRouter = require('./routes/bookingRoutes');
dotenv.config();

const PORT = process.env.PORT || 4000

const cors = require('cors');
app.use(cors());
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET', 'POST', 'PUT', 'DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
})

// middleware section
app.use(express.json());
app.use("/users", userRouter);
app.use("/admin", adminRouter);
app.use("/movies", movieRouter);
app.use("/booking", bookingRouter);

mongoose.connect(`${process.env.DATABASE}`)

// moongoose.connect
//     ("mongodb+srv://anjalighumre984:nitin984@movie-system.trqexcv.mongodb.net/Movies?retryWrites=true&w=majority").then(() => { console.log("DB Connected"); })

app.listen(PORT, () => {
    console.log(`Database connected.`);
})