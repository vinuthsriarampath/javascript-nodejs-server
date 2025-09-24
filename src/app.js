import express from "express";
import routes from "./routes/index.js";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import AppError from "./exceptions/appError.js";
import { swaggerMiddleware } from "./config/swagger.js";

const app=express();

app.use(express.json());

app.use("/api",routes);

app.use('/api-docs',...swaggerMiddleware)

// This route throws a custom error
app.get('/api/error', (_req, _res, next) => {
  next(new AppError(404, 'Resource not found in app.js'));
});

app.use(errorHandler)
export default app;