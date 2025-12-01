import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Card } from "./ui/card";
import { useState } from "react";
import { toast } from "sonner";
import api from "@/lib/axios";

const AddTask = ({ handleTaskChange }) => {
  const [newTaskTitle, setNewTaskTitle] = useState("");

  const addTask = async () => {
    try {
      await api.post("/tasks", { title: newTaskTitle });
      toast.success(`Đã thêm nhiệm vụ ${newTaskTitle}.`);
      setNewTaskTitle("");
      handleTaskChange();
    } catch (error) {
      console.error("Lỗi xảy ra khi addTask", error);
      toast.error("Lỗi xảy ra khi thêm nhiệm vụ.");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <Card className="w-full flex flex-col sm:flex-row bg-white rounded-2xl shadow-md p-6 gap-3">
      <Input
        className="text-sm h-10"
        type="text"
        placeholder="Cần làm gì đây?"
        value={newTaskTitle}
        onChange={(e) => setNewTaskTitle(e.target.value)}
        onKeyPress={handleKeyPress}
      />
      <Button
        className="transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-primary sm:flex px-6 cursor-pointer disabled"
        onClick={addTask}
      >
        <Plus className="size-5" />
        Thêm
      </Button>
    </Card>
  );
};

export default AddTask;
