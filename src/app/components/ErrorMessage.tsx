import { Text } from "@radix-ui/themes";

type ErrorMessageProps = {
  error: string | undefined;
};

const ErrorMessage = ({ error }: ErrorMessageProps) => {
  if (!error) return null;

  return (
    <Text color="red" as="p">
      {error}
    </Text>
  );
};

export default ErrorMessage;
