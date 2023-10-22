import { Button, ButtonProps } from "@chakra-ui/react";

const LoginButton = ({
  children,
  isLoading,
  isDisabled,
  type,
}: ButtonProps) => {
  return (
    <Button
      isLoading={isLoading}
      size="sm"
      colorScheme="blue"
      width="100%"
      marginTop={4}
      isDisabled={isDisabled}
      type={type}
    >
      {children}
    </Button>
  );
};

export default LoginButton;
