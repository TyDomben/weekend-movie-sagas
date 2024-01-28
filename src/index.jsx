import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from '@chakra-ui/react';
import App from "./components/App/App.jsx";
import customTheme from "../src/theme/theme.js";
import { Provider } from 'react-redux';
import store from './redux/store';

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ChakraProvider theme={customTheme}>
        <App />
      </ChakraProvider>
    </Provider>
  </React.StrictMode>
);
