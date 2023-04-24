import React from "react";
import PropTypes from "prop-types";

function CoffeeDetail(props){
  const { coffee } = props;
  return (
    <React.Fragment>
      <h1>Coffee Detail</h1>
      <h3>{coffee.name} - ${coffee.price}</h3>
      <h4>From: {coffee.origin} / Roast level: {coffee.roast}</h4>
      <p><em>{coffee.description}</em></p>
      <p><em>Available in stock: {coffee.quantity}</em></p>
      <hr/>
    </React.Fragment>
  );
}

CoffeeDetail.propTypes = {
  coffee: PropTypes.object
};

export default CoffeeDetail;