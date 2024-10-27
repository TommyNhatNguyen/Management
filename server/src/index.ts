import dotenv from "dotenv";
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
import projectRoutes from "./routes/projectRoutes";
import taskRoutes from "./routes/taskRoutes";
// ROUTE IMPORTS

// CONFIGURATIONS
dotenv.config();
const app = express();

app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
// ROUTES
app.get("/", (req, res) => {
  res.send("This is home route");
});
app.use("/projects", projectRoutes);
app.use("/tasks", taskRoutes);
// SERVER
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`Server running on part ${port}`);
});