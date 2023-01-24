import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, useRoutes } from "react-router-dom";

import "./App.css";
import Header from "./components/Header";
import routes from "./router";
import customTheme from "./theme/theme";

function App() {
  const content = useRoutes(routes);

  return (
    <div className="App">
      <ThemeProvider theme={customTheme}>
        <Header />
        <CssBaseline />
        {content}
      </ThemeProvider>
    </div>
  );
}

export default App;
