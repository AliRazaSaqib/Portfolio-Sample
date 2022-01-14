/** @format */

import Contact from "./components/contact/Contact";
import Introduction from "./components/introduction/Introduction";
import Topbar from "./components/topnav/Topbar";
import Testimonials from "./components/testimonials/Testimonials";
import Work from "./components/work/Work";
import Portfolio from "./components/portfolio/Portfolio";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/sideMenu/Menu";

/** @format */
function App() {
  const [menuOpen, setmenuOpen] = useState(false);
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <Menu menuOpen={menuOpen} setmenuOpen={setmenuOpen} />
      <div className="portfolio_container">
        <Introduction />
        <Portfolio />
        <Work />
        <Testimonials />
        <Contact />
      </div>
    </div>
  );
}

export default App;
