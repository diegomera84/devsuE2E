/**
 * Definition of a class to interact with the home page.
 *
 * @author diegomera84
 * @date   2023-10-19
 */



/**
 * Declaration of class for home page actions.
 */
class HomePage {

    elements ={
      listItem : () => cy.get('[id="tbodyid"]').children().eq(0).children().eq(0).children().eq(0),
      addToCartBtn : () => cy.get('a.btn'),
      cartMenu : () => cy.get('[id="navbarExample"]').children().eq(0).children().eq(3).children().eq(0),
      homeMenu : () => cy.get('[id="navbarExample"]').children().eq(0).children().eq(0).children().eq(0),
      total : () => cy.get('[id="totalp"]'),
      placeOrderBtn : () => cy.get('[class="btn btn-success"]'),
      nameInput : () => cy.get('[id="name"]'),
      cardInput : () => cy.get('[id="card"]'),
      purchaseOrderBtn : () => cy.get('[class="btn btn-primary"]')
    }
  
    /**
     * Adds items to shopping cart.
     *
     * @param {number} numberOfItems The items number.
     */
    addItems(numberOfItems) {
      for(let element = 1; element<=numberOfItems; element++){
        this.elements.listItem().click();
        this.elements.addToCartBtn().click();
        this.elements.homeMenu().click();
      }
    }

     /**
     * Goes to the shopping cart.
     */
     seeCart() {
        this.elements.cartMenu().click();
      }
  
  
    /**
     * Gets the total ammount.
     */
    totalAmmount() {
      return this.elements.total();
    }

    /**
     * Completes shopping form.
     *
     * @param {string} name The items number.
     *
     * @param {string} cardNumber The items number.
     */
    completeOrder(name, cardNumber) {
        this.elements.placeOrderBtn().click();
        this.elements.nameInput().type(name);
        this.elements.cardInput().type(cardNumber);
        this.elements.purchaseOrderBtn().click();
      }
  
   
  }
  
  module.exports = HomePage;