import tasksRouter from "./tasks.js";

function route(app) {
  app.use("/api/tasks", tasksRouter);
}

export default route;
