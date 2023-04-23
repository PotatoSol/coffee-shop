import React from "react";
import Coffee from "./Coffee";
import PropTypes from "prop-types";

function CoffeeList(props) {
  return (
    <React.Fragment>
    <hr/>
    {props.coffeeList.map((coffee) =>
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

CoffeeList.propTypes = {
  coffeeList: PropTypes.array,
  onCoffeeSelection: PropTypes.func,
  onRestock: PropTypes.func
};

export default CoffeeList;