import { Issue } from "@prisma/client";
import { Card, Heading, Text } from "@radix-ui/themes";
import Markdown from "react-markdown";
import { IssueStatusBadge } from "../../components";

type IssueDetailsProps = {
  issue: Issue;
};

const IssueDetails = ({ issue }: IssueDetailsProps) => {
  return (
    <>
      <Heading>{issue.title}</Heading>
      <div className="flex space-x-4 my-2">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </div>
      <Card className="prose mt-4">
        <Markdown>{issue.description}</Markdown>
      </Card>
    </>
  );
};

export default IssueDetails;
