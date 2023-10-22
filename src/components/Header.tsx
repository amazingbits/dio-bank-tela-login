import { Box, Flex } from "@chakra-ui/react";

const Header = () => {
  return (
    <Box bg="gray.600" px={4}>
      <Flex h={14} alignItems={"center"} justifyContent={"space-between"}>
        <Box color="gray.100" fontWeight={700}>
          DIO Bank
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
