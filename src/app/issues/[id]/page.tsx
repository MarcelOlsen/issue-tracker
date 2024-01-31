import prisma from "@/prisma/client";
import { Button, Card, Grid, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import Markdown from "react-markdown";
import { IssueStatusBadge } from "@components";
import { Pencil2Icon } from "@radix-ui/react-icons";
import Link from "next/link";

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
    <Grid columns={{ initial: "1", md: "2" }} className="gap-5">
      <div>
        <Heading>{issue.title}</Heading>
        <div className="flex space-x-4 my-2">
          <IssueStatusBadge status={issue.status} />
          <p>{issue.createdAt.toDateString()}</p>
        </div>
        <Card className="prose mt-4">
          <Markdown>{issue.description}</Markdown>
        </Card>
      </div>
      <div>
        <Button>
          <Pencil2Icon />
          <Link href={`/issues/${issue.id}/edit`}>Edit issue</Link>
        </Button>
      </div>
    </Grid>
  );
};

export default IssueDetailsPage;
