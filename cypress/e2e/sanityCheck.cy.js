/// <reference types="cypress" />

describe('Team Adrenaline Website', () => {
  beforeEach(() => {
    cy.on('uncaught:exception', (err, runnable) => {
      // check if the error message contains "Stats is not defined"
      if (err.message.includes('Stats is not defined')) {
        // return false to prevent Cypress from failing the test
        return false
      }
    })
  })
    it('is up and running', () => {
      cy.visit('https://www.teamadrenaline.me');
      cy.wait(1000);
      cy.get('#hero').should('be.visible');
    });
  
    it('displays the correct page title', () => {
      cy.visit('https://www.teamadrenaline.me');
      cy.title().should('eq', 'Team Adrenaline');
    });
    
  
  });
  