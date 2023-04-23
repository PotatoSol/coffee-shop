import React from "react";
import coffeesImage from "./../img/coffees.png";

function Header() {
  return (
    <React.Fragment>
      <h1>Coffee Site</h1>
      <img src={coffeesImage} alt="fix this later idk" />
    </React.Fragment>
  );
}

export default Header;