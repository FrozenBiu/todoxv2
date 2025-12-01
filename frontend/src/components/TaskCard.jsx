import { Calendar, Circle, CircleCheck, SquarePen, Trash2 } from "lucide-react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import api from "@/lib/axios";
import { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";

const TaskCard = ({ task, index, handleTaskChange }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [newTaskTitle, setNewTaskTitle] = useState(task.title || "");
  const cardRef = useRef(null);
  const inputRef = useRef(null);

  const formatDateTime = (isoString) => {
    return new Date(isoString).toLocaleString("en-US", {
      month: "2-digit",
      day: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });
  };

  const toggleChangeStatus = async (taskId) => {
    try {
      await api.put(`/tasks/${taskId}`, {
        status: task.status === "active" ? "completed" : "active",
        completedAt: new Date().toISOString(),
      });
      toast.success(`Đã cập nhật trạng thái mới cho nhiệm vụ ${task.title}`);
      handleTaskChange();
    } catch (error) {
      console.error("Lỗi xảy ra khi changeStatusTask", error);
      toast.error("Lỗi xảy ra khi cập nhật trạng thái nhiệm vụ.");
    }
  };

  // Update tên nhiệm vụ mới
  const handleChangeTaskTitle = async (taskId) => {
    try {
      await api.put(`/tasks/${taskId}`, { title: newTaskTitle });
      toast.success(`Đã cập nhật nhiệm vụ ${task.title}`);
      setIsEditing(false);
      handleTaskChange();
    } catch (error) {
      console.error("Lỗi xảy ra khi updateTaskTitle", error);
      toast.error("Lỗi xảy ra khi thay đổi tên nhiệm vụ.");
    }
  };

  const handleDeleteTask = async (taskId) => {
    try {
      await api.delete(`/tasks/${taskId}`);
      toast.success(`Đã xoá nhiệm vụ ${task.title}`);
      handleTaskChange();
    } catch (error) {
      console.error("Lỗi xảy ra khi deleteTask", error);
      toast.error("Lỗi xảy ra khi xoá thái nhiệm vụ.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleChangeTaskTitle(task._id);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (isEditing && cardRef.current && !cardRef.current.contains(e.target)) {
        setIsEditing(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    if (isEditing && inputRef.current) {
      inputRef.current.focus();
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isEditing]);

  return (
    <Card
      className={cn(
        "p-4 hover:shadow-lg transition-all duration-200 animate-in slide-in-from-bottom fade-in group",
        task.status === "completed" && "opacity-70"
      )}
      ref={cardRef}
      style={{ animationDelay: `${index * 50}ms` }}
    >
      <div className="flex items-center gap-3 w-full">
        {/* nút tròn đánh dấu nhiệm vụ hoàn thành hay chưa*/}
        <Button
          variant="ghost"
          className=" size-10 p-4 rounded-full text-muted-foreground hover:bg-blue-100 hover:inset-ring-cyan-800 hover:text-purple-500"
          onClick={() => toggleChangeStatus(task._id)}
        >
          {task.status === "active" ? (
            <Circle className="size-6 rounded-full  hover:bg-blue-100 hover:inset-ring-cyan-800 text-muted-foreground" />
          ) : (
            <CircleCheck className="size-6 rounded-full text-green-600 hover:bg-blue-100 hover:inset-ring-cyan-800" />
          )}
        </Button>

        {/* hiển thị hoặc chỉnh sửa tiêu đề */}
        <div className="flex flex-col w-full">
          {isEditing ? (
            <Input
              ref={inputRef}
              value={newTaskTitle}
              onChange={(e) => setNewTaskTitle(e.target.value)}
              onKeyPress={handleKeyPress}
              className={cn(
                "text-base h-12 w-full",
                task.status === "completed" &&
                  "line-through text-muted-foreground"
              )}
            />
          ) : (
            <p
              className={cn(
                "text-base wrap-break-word ",
                task.status === "completed" &&
                  "line-through text-muted-foreground"
              )}
            >
              {task.title}
            </p>
          )}

          {/* ngày tạo và ngày hoàn thành */}
          <div className="flex items-center gap-2 mt-2">
            <Calendar className="size-4" />
            <p className={cn("text-xs text-muted-foreground")}>
              {formatDateTime(task.createdAt)}{" "}
              {task.status === "completed"
                ? `- ${formatDateTime(task.completedAt)}`
                : ""}
            </p>
          </div>
        </div>

        {/* Nút sửa và xoá */}
        <div className="relative">
          {/* <div className="flex opacity-0 gap-2 translate-y-full transition-all duration-200 group-hover:translate-y-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto"> */}
          <div className="hidden opacity-0 translate-y-full gap-2 group-hover:flex group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 transition-discrete starting:opacity-0 starting:translate-y-full">
            {/* Nút sửa */}
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 transition-colors text-muted-foreground hover:bg-sky-200 hover:text-blue-600"
              onClick={() => {
                setIsEditing(true);
              }}
            >
              <SquarePen className="size-4" />
            </Button>

            {/* Nút xoá */}
            <Button
              variant="ghost"
              size="icon"
              className="shrink-0 transition-colors text-muted-foreground hover:bg-sky-200 hover:text-red-600"
              onClick={() => handleDeleteTask(task._id)}
            >
              <Trash2 className="size-4" />
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TaskCard;
