const HomePage = require('../pages/HomePage'); 
const itemsToCart = 2;
const textValidator = '720';
const userName = 'Diego';
const userCardNumber = '123456789';

let homeActions

describe('E2E Test', () => {
  beforeEach(() => {
    cy.visit('/index.html');
    cy.viewport(1280, 720)
    homeActions = new  HomePage();
  })
    it('e2e shopping flow', () => {
      homeActions.addItems(itemsToCart);
      homeActions.seeCart();
      homeActions.totalAmmount().should('have.text', textValidator);
      homeActions.completeOrder(userName, userCardNumber);
      homeActions.finishShopping();
     })
  })