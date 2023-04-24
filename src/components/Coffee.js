import React from "react";
import PropTypes from "prop-types";


function Coffee(props) {

  return (
    <React.Fragment>
      <div onClick={() => props.whenCoffeeClicked(props.id)}>
        <h3><em>{props.name} - ${props.price}</em></h3>
        <p><ul><li>{props.description}</li></ul></p>
        <p>Left in stock: {props.quantity}</p>
        <hr />
      </div>
        <button onClick={() => props.whenAddToCartClicked(props)} type="submit">Add to Cart</button><span>   </span>
        <button onClick={() => props.whenRestockClicked(props.id)} type="submit">Restock</button><span>   </span>
    </React.Fragment>
  );
}

Coffee.propTypes = { //name, origin, price, roast
  name: PropTypes.string.isRequired,
  origin: PropTypes.string.isRequired, //new
  price: PropTypes.number.isRequired,
  roast: PropTypes.string.isRequired, //new
  description: PropTypes.string.isRequired,
  quantity: PropTypes.number,
  id: PropTypes.string,
};


export default Coffee;