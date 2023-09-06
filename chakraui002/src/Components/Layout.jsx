import { Box, SimpleGrid } from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import { useState } from "react";
function Layout() {
  const items = new Array(12).fill(0).map((a, i) => i + 1);
  return (
    <Box>
      <SimpleGrid
        columns={{
          base: "1",
          sm: "2",
          md: "3",
          lg: "4",
          xl: "5",
          "2xl": "6"
        }}
        spacing={2}
      >
        {items.map((item) => (
          <Box bg="tomato" height="80px" key={item}>
            {item}
          </Box>
        ))}
      </SimpleGrid>
    </Box>
  );
}

export default Layout;
