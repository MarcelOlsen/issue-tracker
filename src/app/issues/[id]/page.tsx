import React from "react";
import prisma from "@/prisma/client";
import { notFound } from "next/navigation";
import { Card, Heading } from "@radix-ui/themes";
import IssueStatusBadge from "../../components/IssueStatusBadge";

const IssueDetailsPage = async ({ params }: { params: { id: string } }) => {
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
      <Heading>{issue.title}</Heading>
      <div className="flex space-x-4 my-2">
        <IssueStatusBadge status={issue.status} />
        <p>{issue.createdAt.toDateString()}</p>
      </div>
      <Card>{issue.description}</Card>
    </div>
  );
};

export default IssueDetailsPage;
