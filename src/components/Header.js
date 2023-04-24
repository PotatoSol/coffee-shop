import React from "react";
import coffeesImage from "./../img/coffees.png";

function Header() {
  return (
    <React.Fragment>
      <h1>Coffee Site</h1>
      <img src={coffeesImage} alt="cawfee" />
    </React.Fragment>
  );
}

export default Header;