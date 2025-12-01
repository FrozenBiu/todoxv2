const Footer = ({ tasks, activeTaskCount, completedTaskCount }) => {
  return (
    <>
      <div className="text-center">
        {activeTaskCount + completedTaskCount > 0 && (
          <p className="text-md text-muted-foreground">
            {completedTaskCount > 0 && (
              <>
                🎉Tuyệt vời. Bạn đã hoàn thành {completedTaskCount} việc
                {activeTaskCount > 0 &&
                  `, còn ${activeTaskCount} việc nữa thôi. Cố lên!`}
              </>
            )}

            {completedTaskCount === 0 &&
              activeTaskCount > 0 &&
              `Hãy bắt đầu làm ${activeTaskCount} nhiệm vụ nào!`}
          </p>
        )}
      </div>
    </>
  );
};

export default Footer;
