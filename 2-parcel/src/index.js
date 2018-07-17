import React from "react";
import { render } from "react-dom";
import MenuAppBar from './components/menuAppBar';

import "./sass/main.scss";
import "./sass/next.scss";

const App = () => {
  return (
    <div>
      <MenuAppBar />
    </div>
  )
};
render(<App />, document.getElementById("app"));