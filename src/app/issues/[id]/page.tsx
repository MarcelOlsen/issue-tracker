import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

const IssueDetailsPage = async ({ params }: { params: { id: string } }) => {
  if (typeof params.id !== "number") notFound();

  const issue = await prisma.issue.findUnique({
    where: {
      id: parseInt(params.id),
    },
  });

  if (!issue) {
    notFound();
  }

  return (
    <div>
      <p>{issue.title}</p>
      <p>{issue.status}</p>
      <p>{issue.createdAt.toDateString()}</p>
    </div>
  );
};

export default IssueDetailsPage;
