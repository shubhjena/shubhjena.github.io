import "./App.css";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Notfound from "./pages/Notfound";
import Main from "./layout/Main";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
    <Main/>
      <Route path="#home"><Home /></Route>
      <Route path="#projects"><Projects /></Route>
      <Route path="#about"><About /></Route>
      <Route path="*" element={<Notfound />} />
    </BrowserRouter>
    
  );
}

export default App;
