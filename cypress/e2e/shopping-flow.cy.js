const HomePage = require('../pages/HomePage');

let homeActions 
const itemsToCart = 2;
const textValidator = '720';

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
     })
  })