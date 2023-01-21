import { ReactElement } from "react";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import StateContextProvider from "./context/providers/State";
import Canvas from "./container/canvas"
import UI from "./container/ui"
import customTheme from "./assets/theme";
import "./App.css";

function App(): ReactElement {
  return (
    <>
      <StateContextProvider>
        <div id="canvas-container">
          <Canvas/>
        </div>
        <div id="mui-container">
          <StyledEngineProvider injectFirst>
            <ThemeProvider theme={customTheme}>
              <UI/>
            </ThemeProvider>
          </StyledEngineProvider>
        </div>
      </StateContextProvider>
    </>
  );
}

export default App;
