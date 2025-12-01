import AddTask from "@/components/AddTask";
import DateTimeFilter from "@/components/DateTimeFilter";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import StatsAndFilters from "@/components/StatsAndFilters";
import TaskList from "@/components/TaskList";
import TaskListPagination from "@/components/TaskListPagination";
import api from "@/lib/axios";
import { useEffect, useState } from "react";
import { toast } from "sonner";

const HomePage = () => {
  const [tasks, setTasks] = useState([]);
  const [activeTaskCount, setActiveTaskCount] = useState(0);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [filterType, setFilterType] = useState("all");
  const [dateQuery, setDateQuery] = useState("today");
  const [page, setPage] = useState(1);
  const visibleTaskLimit = 5;

  useEffect(() => {
    fetchTasks();
  }, [dateQuery]);

  useEffect(() => {
    setPage(1);
  }, [filterType, dateQuery]);

  async function fetchTasks() {
    try {
      // Fetch tasks from the API
      const res = await api.get(`/tasks?filter=${dateQuery}`);
      setTasks(res.data.tasks);
      setActiveTaskCount(res.data.activeTaskCount);
      setCompletedTaskCount(res.data.completedTaskCount);
    } catch (error) {
      console.error("Lỗi xảy ra khi fetchTasks.", error);
      toast.error("Lỗi xảy ra khi lấy dữ liệu.");
    }
  }

  const handleTaskChange = () => {
    fetchTasks();
  };

  const handleNext = () => {
    if (page < totalPages) {
      setPage((prev) => prev + 1);
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setPage((prev) => prev - 1);
    }
  };

  let filteredTasks;

  if (filterType !== "all") {
    filteredTasks = tasks.filter((task) => task.status === filterType);
  } else {
    filteredTasks = tasks;
  }

  const totalPages = Math.ceil(filteredTasks.length / visibleTaskLimit);
  const visibleTasks = filteredTasks.slice(
    visibleTaskLimit * page - visibleTaskLimit,
    visibleTaskLimit * page
  );

  if (visibleTasks.length === 0) {
    handlePrev();
  }

  return (
    <div className="container flex flex-col items-center justify-center gap-6 py-10 px-10 space-y-3">
      {/* Header */}
      <Header />

      {/* Add task */}
      <AddTask handleTaskChange={handleTaskChange} />

      {/* Stats And Filter */}
      <StatsAndFilters
        filterType={filterType}
        setFilterType={setFilterType}
        activeTaskCount={activeTaskCount}
        completedTaskCount={completedTaskCount}
        handleTaskChange={handleTaskChange}
      />

      {/* TaskList */}
      <TaskList
        filterType={filterType}
        setFilterType={setFilterType}
        tasks={visibleTasks}
        activeTaskCount={activeTaskCount}
        completedTaskCount={completedTaskCount}
        handleTaskChange={handleTaskChange}
      />

      <div className="flex flex-col sm:flex-row justify-between items-center w-full space-y-5">
        {/* Tasklist Pagination */}
        <TaskListPagination
          page={page}
          setPage={setPage}
          totalPages={totalPages}
          handleNext={handleNext}
          handlePrev={handlePrev}
        />

        {/* Datetime Filter */}
        <DateTimeFilter dateQuery={dateQuery} setDateQuery={setDateQuery} />
      </div>

      {/* Footer */}
      <Footer
        tasks={filteredTasks}
        activeTaskCount={activeTaskCount}
        completedTaskCount={completedTaskCount}
      />
    </div>
  );
};

export default HomePage;
