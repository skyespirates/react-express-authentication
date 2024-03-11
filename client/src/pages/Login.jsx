import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  Button,
} from "@chakra-ui/react";
import { Form } from "react-router-dom";

const Login = () => {
  return (
    <Form method="post" action="/login">
      <Flex direction="column" rowGap={8} width={400} mx="auto" py={24}>
        <Text fontSize={24}>Login User</Text>

        <FormControl isRequired>
          <FormLabel>Username</FormLabel>
          <Input name="username" placeholder="username" />
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
          Login
        </Button>
      </Flex>
    </Form>
  );
};

export default Login;
