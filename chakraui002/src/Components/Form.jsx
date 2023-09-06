import {
  Box,
  Button,
  Container,
  Heading,
  HStack,
  Input,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  PinInput,
  PinInputField,
  Select,
  Stack
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";

import { useState } from "react";
function Form() {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  return (
    <Container>
      <Heading>FORM</Heading>
      <Stack direction="column" gap="0.5rem">
        <Box>
          <Input type="email" placeholder="Email" />
        </Box>
        <Box>
          <Input type="password" placeholder="Password" />
        </Box>
        <Box>
          <Button
            isLoading={loading}
            onClick={() => {
              setLoading(true);
              setTimeout(() => {
                setLoading(false);
              }, 1000);
            }}
          >
            SIGNUP
          </Button>
        </Box>
        <Box>
          <HStack>
            <PinInput value={otp} onChange={(value) => setOtp(value)}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        </Box>

        <Box>
          <Heading>{otp}</Heading>
        </Box>

        <Box>
          <Select placeholder="Select option">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </Select>
        </Box>

        <Box>
          <Menu>
            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
              Actions
            </MenuButton>
            <MenuList>
              <MenuItem>Download</MenuItem>
              <MenuItem>Create a Copy</MenuItem>
              <MenuItem>Mark as Draft</MenuItem>
              <MenuItem>Delete</MenuItem>
              <MenuItem>Attend a Workshop</MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Stack>
    </Container>
  );
}

export default Form;
