import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

// routes

import userRouter from "./routes/user.routes.js";

// routes delcration

const app = express();

app.use("/api/v1/users", userRouter);

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        Credential: true,
    })
);

app.use(
    express.json({
        limit: "16kb",
    })
);

app.use(
    express.urlencoded({
        extended: true,
        limit: "16kb",
    })
);

app.use(express.static("public"));

app.use(cookieParser());

export { app };
