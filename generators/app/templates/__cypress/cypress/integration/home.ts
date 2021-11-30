describe('Home page E2E test', () => {
  it('Visits the home page', () => {
    cy.visit('/home')
    cy.contains('Hello world !')
  });
})
