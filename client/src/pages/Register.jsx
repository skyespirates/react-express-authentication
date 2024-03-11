import { Form } from "react-router-dom";

import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";

const Register = () => {
  return (
    <Form method="POST" action="/register">
      <Flex direction="column" rowGap={8} width={400} mx="auto" py={24}>
        <Text fontSize={24}>Register User</Text>

        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input name="username" placeholder="username" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Email</FormLabel>
          <Input name="email" placeholder="email" type="email" />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input name="password" placeholder="password" type="password" />
        </FormControl>
        <Button
          type="submit"
          backgroundColor="blue.500"
          _hover={{ bg: "blue.600" }}
        >
          Register
        </Button>
      </Flex>
    </Form>
  );
};

export default Register;
