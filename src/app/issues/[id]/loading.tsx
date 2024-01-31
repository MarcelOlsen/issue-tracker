import { Card } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueDetailsPageLoading = () => {
  return (
    <div className="max-w-xl">
      <Skeleton height={32} />
      <div className="flex space-x-4 my-2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </div>
      <Card className="prose mt-4">
        <Skeleton count={3} />
      </Card>
    </div>
  );
};

export default IssueDetailsPageLoading;
