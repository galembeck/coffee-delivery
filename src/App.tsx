import { BrowserRouter } from "react-router-dom";
import { Router } from "./Routes";

import { ThemeProvider } from "styled-components";

import { CartContextProvider } from "./contexts/CartContext";

import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <BrowserRouter>
        <CartContextProvider>
          <Router />
        </CartContextProvider>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
