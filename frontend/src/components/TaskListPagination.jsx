import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { cn } from "@/lib/utils";

const TaskListPagination = ({
  page,
  setPage,
  totalPages,
  handleNext,
  handlePrev,
}) => {
  const generatePages = () => {
    const pages = [];

    // case tổng trang nhỏ -> show all
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
      return pages;
    }

    // luôn có trang 1
    pages.push(1);

    // nếu trang hiện tại > 3 => thêm "..."
    if (page > 3) {
      pages.push("...");
    }

    // trang ở giữa (page-1, page, page+1)
    const start = Math.max(2, page - 1);
    const end = Math.min(totalPages - 1, page + 1);

    for (let i = start; i <= end; i++) {
      pages.push(i);
    }

    // nếu page < totalPages - 2 => thêm "..."
    if (page < totalPages - 2) {
      pages.push("...");
    }

    // luôn có trang cuối
    pages.push(totalPages);

    return pages;
  };

  const pageToShow = generatePages();

  return (
    <div>
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious
              onClick={page === 1 ? undefined : handlePrev}
              className={cn(
                "cursor-pointer",
                page === 1 && "pointer-events-none opacity-50"
              )}
            />
          </PaginationItem>

          {pageToShow.map((p, index) => (
            <PaginationItem key={index}>
              {p === "..." ? (
                <PaginationEllipsis />
              ) : (
                <PaginationLink
                  isActive={p === page}
                  onClick={() => {
                    if (p !== page) {
                      setPage(p);
                    }
                  }}
                  className="cursor-pointer"
                >
                  {p}
                </PaginationLink>
              )}
            </PaginationItem>
          ))}

          <PaginationItem>
            <PaginationNext
              onClick={page === totalPages ? undefined : handleNext}
              className={cn(
                "cursor-pointer",
                page === totalPages && "pointer-events-none opacity-50"
              )}
            />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};

export default TaskListPagination;
