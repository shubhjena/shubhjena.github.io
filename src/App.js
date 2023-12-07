import ErrorPage from "./components/ErrorPage";
import { HashRouter, BrowserRouter, Route, Switch } from "react-router-dom";
import HorizontalLayout from "./layout/HorizontalLayout";
import Resume from "./components/Resume";
import Preloader from "./components/Preloader";

function App() {
  return (
    <HashRouter>
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
      <Preloader />
    </HashRouter>
  );
}

export default App;
