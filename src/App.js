import Home from "./components/Home";
import Projects from "./components/Projects";
import About from "./components/About";
import ErrorPage from "./components/ErrorPage";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HorizontalLayout from "./layout/HorizontalLayout";
import Resume from "./components/Resume";
import Preloader from "./components/Preloader";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/resume">
          <Resume />
        </Route>
        {/* Default route */}
        <Route exact path="/">
          <HorizontalLayout />
        </Route>
        <Route component={ErrorPage} />
      </Switch>
      <Preloader/>
    </BrowserRouter>
  );
}

export default App;
