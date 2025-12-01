import { Circle } from "lucide-react";
import { Card } from "./ui/card";

const TaskEmpty = ({ filterType }) => {
  return (
    <Card className="w-full h-50 flex flex-col items-center justify-center gap-5">
      <Circle className="size-15 text-muted-foreground" />
      <div className="flex flex-col items-center gap-1">
        <h3 className="text-md font-medium">
          {filterType === "active"
            ? "Không có nhiệm vụ nào đang làm."
            : filterType === "completed"
            ? "Chưa có nhiệm vụ nào hoàn thành."
            : "Chưa có nhiệm vụ."}
        </h3>
        <p className="text-muted-foreground text-sm">
          {filterType === "active"
            ? `Chuyển sang "tất cả" để thấy những nhiệm vụ đã hoàn thành.`
            : filterType === "completed"
            ? `Chuyển sang "tất cả" để thấy những nhiệm vụ đang làm.`
            : "Thêm nhiệm vụ mới vào để bắt đầu."}
        </p>
      </div>
    </Card>
  );
};

export default TaskEmpty;
