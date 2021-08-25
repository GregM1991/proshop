import React from "react";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Main } from "./components/Main";
import { GlobalStyle } from "./styles/globals";
import { lightTheme } from "./styles/theme";
import { ThemeProvider } from "styled-components";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      <Header />
      <Main />
      <Footer />
    </ThemeProvider>
  );
};

export default App;
