import express from "express";
import cors from 'cors';
import 'dotenv/config'
import userRouter from "./user/userRoute.js";
const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        origin: "http://localhost:3000",
        optionsSuccessStatus: 200,
    })
);


app.get('/', (req, res) => {
res.send('API is running good ...');
});

app.use("/api/users", userRouter);





export default app;