import React from "react";
import ReactDOM from "react-dom/client";

// chakra ui
import { ChakraProvider } from "@chakra-ui/react";
import theme from "@utils/theme";

import { RouterProvider } from "react-router-dom";
import router from "./routes";

// cookies

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);
