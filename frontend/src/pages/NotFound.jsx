import { Button } from "@/components/ui/button";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="w-screen h-screen mx-auto my-auto flex flex-col items-center justify-center">
      <img src="/404_NotFound.png" alt="NotFound" className="w-[40%]" />
      <h3 className="font-medium mt-4 text-lg">
        Bạn đang đi vào vùng cấm địa 💥
      </h3>

      <Button className="mt-3">
        <Link to={"/"}>Quay về trang chủ</Link>
      </Button>
    </div>
  );
};

export default NotFound;
