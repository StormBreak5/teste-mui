import { CssBaseline } from "@mui/material";
import { Routes, useRoutes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import routes from "./router";

function App() {
  const content = useRoutes(routes);

  return (
    <div className="App">
      <Header />
      <CssBaseline />
      {content}
    </div>
  );
}

export default App;
