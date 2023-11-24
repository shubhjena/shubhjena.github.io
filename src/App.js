import ErrorPage from "./components/ErrorPage";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HorizontalLayout from "./layout/HorizontalLayout";
import Resume from "./components/Resume";
import Preloader from "./components/Preloader";

function App() {
  return (
    <BrowserRouter>
      <Preloader/>
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
    </BrowserRouter>
  );
}

export default App;
