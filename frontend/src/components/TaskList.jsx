import TaskCard from "./TaskCard";
import TaskEmpty from "./TaskEmpty";

const TaskList = ({
  tasks,
  activeTaskCount,
  completedTaskCount,
  filterType,
  setFilterType,
  handleTaskChange,
}) => {
  return (
    <div className="w-full space-y-3">
      {activeTaskCount + completedTaskCount > 0 && tasks.length > 0 ? (
        tasks.map((task, index) => (
          <TaskCard
            key={index}
            index={index}
            task={task}
            handleTaskChange={handleTaskChange}
          />
        ))
      ) : (
        <TaskEmpty filterType={filterType} setFilterType={setFilterType} />
      )}
    </div>
  );
};

export default TaskList;
