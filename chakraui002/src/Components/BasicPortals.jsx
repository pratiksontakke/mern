import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  Button,
  useDisclosure
} from "@chakra-ui/react";

import { useRef } from "react";

function BasicPortals() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef();

  // console.log(isOpen, onOpen, onClose);

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Click on this will open alert dialog djdfkjdsfhk
      </Button>

      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              This is title when the alert dialog is opens
            </AlertDialogHeader>

            <AlertDialogBody>alert dialog body comes here </AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

export default BasicPortals;
