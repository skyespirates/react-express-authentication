import {
  Box,
  Flex,
  Button,
  Text,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
const About = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Box>
      <Flex justifyContent="center">
        <Button onClick={onOpen}>Open Modal</Button>
      </Flex>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />

          <ModalBody>
            <Text>Hello World!</Text>
          </ModalBody>

          <ModalFooter>
            <Button size="sm" colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button size="sm" variant="ghost">
              Secondary Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
  );
};

export default About;
