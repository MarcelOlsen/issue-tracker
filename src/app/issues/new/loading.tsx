import React from "react";
import { Skeleton } from "@components";

const NewIssuePageLoading = () => {
  return (
    <div className="max-w-xl">
      <Skeleton />
      <Skeleton height="20rem" />
    </div>
  );
};

export default NewIssuePageLoading;
