import React from 'react';
import NewCoffeeForm from './NewCoffeeForm';
import CoffeeList from './CoffeeList';
import CoffeeDetail from './CoffeeDetail';
import Coffee from './Coffee';

class CoffeeControl extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
      mainCoffeeList: [],
      mainCoffeeCart: [],
      selectedCoffee: null
    };
  }
  
  handleClick = () => {
    if (this.state.selectedCoffee != null) {
      this.setState({
        formVisibleOnPage: false,
        selectedCoffee: null
      });
    } else {
      this.setState(prevState => ({
        formVisibleOnPage: !prevState.formVisibleOnPage,
      }));
    }
  }

  handleAddingNewCoffeeToList = (newCoffee) => {
    const newMainCoffeeList = this.state.mainCoffeeList.concat(newCoffee);
    this.setState({mainCoffeeList: newMainCoffeeList,
                  formVisibleOnPage: false });
  }

  
  handleAddingNewCoffeeToCart = (newCoffee) => {
    let newMainCoffeeCart = [...this.state.mainCoffeeCart];
    let newMainCoffeeList = [...this.state.mainCoffeeList];
    let newCoffeeInCart = newMainCoffeeCart.filter(coffee => coffee.id === newCoffee.id)[0];
    let newCoffeeInList = newMainCoffeeList.filter(coffee => coffee.id === newCoffee.id)[0];
    // let quantityStorage = newMainCoffeeList.filter(coffee => coffee.id === newCoffee.id)[0].quantity;
    //first find if in cart, if is, then increment quantity, else, put in cart
    console.log(newCoffee);
        if (newCoffeeInCart && 
      newCoffeeInList && newCoffeeInList.quantity >= 1){ //Check if in cart at all AND that there are enough in stock -> subtract from stock, add to cart
      console.log("found in stock and in cart");

      // let coffeeIndex = newMainCoffeeCart.indexOf(newMainCoffeeCart.filter(coffee => coffee.id === newCoffee.id)[0])
      // console.log(newCoffeeInCart.quantity);
      newCoffeeInCart.quantity += 1;
      newCoffeeInList.quantity -=1;

    

      // let coffeeListIndex = newMainCoffeeList.indexOf(newMainCoffeeList.filter(coffee => coffee.id === newCoffee.id)[0]);
      // newMainCoffeeList[coffeeListIndex].quantity += 1;
      
      // newMainCoffeeList.filter(coffee => coffee.id === newCoffee.id)[0].quantity -= 1; //sets the quantity of the stock to that of the cart + 1

      console.log(newMainCoffeeList);
      console.log(newMainCoffeeCart);
      // newMainCoffeeCart[coffeeIndex] = newCoffeeInCart;
      //newMainCoffeeCart.filter(coffee => coffee.id === newCoffee.id)[0] = newCoffeeInCart;//copies over the cart for the stock value 

      // newMainCoffeeList.filter(coffee => coffee.id === newCoffee.id)[0].quantity = quantityStorage - 1;

    } else if (newCoffeeInList.quantity >= 1){ //Not in cart, but in stock
      let initialCoffeetoAdd = {...newCoffee, quantity:1};
      console.log("found in stock, but not in cart");
      // newMainCoffeeList.filter(coffee => coffee.id === newCoffee.id)[0].quantity = 1;
      // console.log(newMainCoffeeList.filter(coffee => coffee.id === newCoffee.id)[0].quantity);
      newMainCoffeeCart.push(initialCoffeetoAdd);
      newCoffeeInList.quantity -= 1;

    } else { //not enough in stock
      console.log('not enough in stock');
      //some error message to show that there aren't any in stock to add to cart
    }

    this.setState({mainCoffeeCart: newMainCoffeeCart, 
                  mainCoffeeList: newMainCoffeeList,
                  formVisibleOnPage: false });
                  console.log("Main Coffee List");
                  console.log(this.state.mainCoffeeList);
                  console.log("Main Coffee Cart");
                  console.log(this.state.mainCoffeeCart);

  }


  handleChangingSelectedCoffee = (id) => {
    const selectedCoffee = this.state.mainCoffeeList.filter(coffee => coffee.id === id)[0];
    this.setState({selectedCoffee: selectedCoffee});
  }

  restock = (inputId) => {
    let newRestockCoffeeList = this.state.mainCoffeeList;
    newRestockCoffeeList.filter(coffee => coffee.id === inputId)[0].quantity++;
    //console.log(this.state.mainCoffeeList.filter(coffee => coffee.id === inputId)[0]);
    this.setState({mainCoffeeList: newRestockCoffeeList, formVisibleOnPage: false});
    // console.log(this.state.mainCoffeeList);
  }

  render(){
    let currentlyVisibleState = null;
    let buttonText = null;
    if (this.state.selectedCoffee != null) {
      currentlyVisibleState = <CoffeeDetail coffee = {this.state.selectedCoffee} />
      buttonText = "Return to Coffee List";
      // While our CoffeeDetail component only takes placeholder data, we will eventually be passing the value of selectedCoffee as a prop.
    }
    else if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <NewCoffeeForm onNewCoffeeCreation={this.handleAddingNewCoffeeToList} /> ;
      buttonText = "Return to Coffee List";
    } else {
      currentlyVisibleState = <CoffeeList coffeeList={this.state.mainCoffeeList} onCoffeeSelection={this.handleChangingSelectedCoffee} onRestock={this.restock} onAddToCart={this.handleAddingNewCoffeeToCart}/>;
      buttonText = "Add Coffee";
    }
    return (
      <React.Fragment>
        {/* {restockState} */}
        {currentlyVisibleState}
        <br></br><br></br><br></br><button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }

}

export default CoffeeControl;