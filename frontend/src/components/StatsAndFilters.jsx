import { Funnel } from "lucide-react";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { filters } from "@/lib/data";

const StatsAndFilters = ({
  activeTaskCount,
  completedTaskCount,
  filterType,
  setFilterType,
}) => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-between sm:items-center gap-3">
      {/* Stats */}
      <div className="flex items-center gap-3 ">
        <Badge className="text-blue-400 bg-white border border-gray-300">
          {activeTaskCount} đang làm
        </Badge>

        <Badge className="text-green-500 bg-white border border-gray-300">
          {completedTaskCount} hoàn thành
        </Badge>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row items-start sm:justify-between gap-3">
        {filters.map((filter) => (
          <Button
            key={filter.value}
            size="sm"
            className={cn(
              "transition-all duration-200 hover:scale-105 active:scale-95 hover:bg-primary/20 text-gray-600",
              filter.value === filterType
                ? "bg-primary hover:bg-primary text-white"
                : "bg-transparent"
            )}
            onClick={() => setFilterType(filter.value)}
          >
            <Funnel />
            <span className="capitalize">{filter.label}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default StatsAndFilters;
