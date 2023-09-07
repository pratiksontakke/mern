import { Box, Flex, Spacer } from "@chakra-ui/react";

function FlexExample() {
  return (
    <Flex>
      <Box w="70px" h="10" bg="red.500" />
      <Spacer />
      <Box w="170px" h="10" bg="red.500" />
      <Spacer />
      <Box w="180px" h="10" bg="red.500" />
    </Flex>
  );
}

export default FlexExample;
