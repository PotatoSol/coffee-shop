import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function CoffeeCart(props) {
  return (
    <React.Fragment>
    <hr/>
    {props.coffeeCart.map((coffee) =>
      <Coffee 
        whenCoffeeClicked = { props.onCoffeeSelection }
        whenRestockClicked = { props.onRestock }
        whenAddToCartClicked = { props.onAddToCart }
        name={coffee.name}
        price={coffee.price}
        description={coffee.description}
        quantity={coffee.quantity}
        id={coffee.id}
        key={coffee.id}/>
    )}
  </React.Fragment>
  );
}

CoffeeCart.propTypes = {
  coffeeCart: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
  onRestock: PropTypes.func
};

export default CoffeeCart;