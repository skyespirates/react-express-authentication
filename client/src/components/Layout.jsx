import { useRef } from "react";
import { Outlet, NavLink, useLoaderData, useNavigate } from "react-router-dom";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Text,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
  List,
  ListItem,
  Card,
  CardBody,
  Button,
} from "@chakra-ui/react";

import links from "@/routes/routes";

// styles
import "@/styles/Layout.css";
import cookies from "@utils/cookies";

const Layout = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const data = useLoaderData();
  const navigate = useNavigate();
  const handleLogout = () => {
    cookies.remove("user");
    navigate("/login");
  };
  return (
    <Box>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Navigation</DrawerHeader>
          <DrawerBody>
            <List display="flex" flexDirection="column" rowGap={4}>
              {links.map(({ to, title }) => (
                <ListItem key={title}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      isActive ? "active" : "unactive"
                    }
                  >
                    {title}
                  </NavLink>
                </ListItem>
              ))}
            </List>
          </DrawerBody>
          <DrawerFooter justifyContent="start" flexDirection="column">
            <Card width="100%" mb={4}>
              <CardBody>
                <Text>userid {data.id}</Text>
                <Text>username {data.username}</Text>
                <Text>email {data.email}</Text>
              </CardBody>
            </Card>
            <Button
              width="100%"
              backgroundColor="red.500"
              onClick={handleLogout}
            >
              Logout
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Box mx={4}>
        <Flex
          alignItems="center"
          columnGap={3}
          py={2}
          border={2}
          borderWidth={2}
          borderColor="teal"
        >
          <IconButton ref={btnRef} onClick={onOpen} icon={<HamburgerIcon />}>
            Open
          </IconButton>
          <Text fontSize={20}>Skyesapp</Text>
        </Flex>
        <Outlet />
      </Box>
    </Box>
  );
};

export default Layout;
