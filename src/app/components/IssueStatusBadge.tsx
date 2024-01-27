import React from "react";
import { Status } from "@prisma/client";
import { Badge } from "@radix-ui/themes";

const statusMap: Record<
  Status,
  { label: string; color: "red" | "green" | "plum" }
> = {
  OPEN: {
    label: "Open",
    color: "green",
  },
  IN_PROGRESS: {
    label: "In Progress",
    color: "plum",
  },
  CLOSED: {
    label: "Closed",
    color: "red",
  },
};

type IssueStatusBadgeProps = {
  status: Status;
};

const IssueStatusBadge = ({ status }: IssueStatusBadgeProps) => {
  return (
    <Badge color={statusMap[status].color}>{statusMap[status].label}</Badge>
  );
};
export default IssueStatusBadge;
