import React from "react";
import PropTypes from "prop-types";
import { v4 } from 'uuid';

function NewCoffeeForm(props) {

  function handleNewCoffeeFormSubmission(event) {
    event.preventDefault();
    props.onNewCoffeeCreation({
      name: event.target.name.value,
      price: event.target.price.value,
      description: event.target.description.value,
      quantity: event.target.quantity.value,
      id: v4()
    });
  }
  return (
    <React.Fragment>
      <form onSubmit={handleNewCoffeeFormSubmission}>
        <p>Coffee:  
        <input
          type='text'
          name='name'
          placeholder='Name of Coffee' /><br></br></p>
        <input
          type='number'
          name='price'
          placeholder='Price' /><br></br>
        <textarea
          name='description'
          placeholder='Description' /><br></br>
        <input
          type='number'
          name='quantity'
          placeholder='Quantity' /><br></br>
        <button type='submit'>Submit Coffee!</button>
      </form>
    </React.Fragment>
  );
}

NewCoffeeForm.propTypes = {
  onNewCoffeeCreation: PropTypes.func
};

export default NewCoffeeForm;