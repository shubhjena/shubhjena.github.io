import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter, Route } from "react-router-dom";
import HorizoantalLayout from "./layout/HorizoantalLayout";

function App() {
  return (
    <BrowserRouter>
        <HorizoantalLayout />

      <Route path="#home">
        <Home />
      </Route>
      <Route path="#projects">
        <Projects />
      </Route>
      <Route path="#about">
        <About />
      </Route>
      {/* <Route path="*">
        <ErrorPage />
      </Route> */}
    </BrowserRouter>
  );
}

export default App;
