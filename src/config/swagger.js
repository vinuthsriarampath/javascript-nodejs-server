import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";

import path from "path";
import { fileURLToPath } from "url";

// Fix __dirname in ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Node Test Project API",
      version: "1.0.0",
      description: "API documentation for node test project.",
    },
    servers: [
      { url: "http://localhost:8080/api/" },
    ],
  },
  apis:[path.join(__dirname, "../routes/*.js")], // Path to your route files with Swagger comments
};

export const swaggerSpec = swaggerJsdoc(options);
export const swaggerMiddleware = [swaggerUi.serve, swaggerUi.setup(swaggerSpec)];
