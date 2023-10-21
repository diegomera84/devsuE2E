/**
 * Definition of a class to interact with the pages.
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
      total : () => cy.get('[id="totalp"]')
    }
  
    /**
     * Adds items to shopping cart.
     *
     * @param {number} numberOfItems The items number.
     */
    addItems(numberOfItems) {
     // for(let element = 1; element<=numberOfItems; element++){
        cy.wait(2000);
        this.elements.listItem().click();
        cy.wait(2000);
        this.elements.addToCartBtn().click();
        cy.wait(2000);
        this.elements.cartMenu().click();
        cy.wait(4000);
      //}
    }
  
  
    /**
     * Gets the total ammount.
     */
    totalAmmount() {
      return this.elements.total().text();
    }
  
    /**
     * Modifys todo element text.
     *
     * @param {number} optionNumber The todo option number.
     *
     * @param {string} newText The new text.
     */
    modifyText(optionNumber, newText) {
      const toDoOption =  this.elements.toDoList().eq(optionNumber-1); 
      toDoOption.dblclick().type('{selectall}{backspace}').type(newText+'{enter}');
    }
  
    /**
     * Mark a element as complet.
     *
     * @param {number} optionNumber The todo option number.
     */
   completeToDoElement(optionNumber) {
    const toDoOption =  this.elements.toDoList().eq(optionNumber-1); 
    toDoOption.children().eq(0).children().eq(0).click();
    }
  
    /**
     * See the complete elements.
     */
    showCompleteElements() {
    const toDoOption =  this.elements.toDoList().eq(optionNumber-1); 
    toDoOption.children().eq(0).children().eq(0).click();
    }
  
    /**
     * Prints the listed elements in console.
     */
    printElements() {
      const lsit =  this.elements.toDoList(); 
      lsit.invoke('text')
      .then((text1) => {
        let arr = text1.split('\n');
        let element1 = arr[3].slice(8);
        let element2 = arr[12].slice(8);
        console.log('1st-'+element1);
        console.log('2nd-'+element2);
      });
      }
  }
  
  module.exports = HomePage;