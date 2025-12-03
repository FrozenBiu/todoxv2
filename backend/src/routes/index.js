import tasksRouter from "./tasks.js";
import pingRouter from "./ping.js";

function route(app) {
  app.use("/api/tasks", tasksRouter);
  app.use("/api/ping", pingRouter);
}

export default route;
