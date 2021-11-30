describe('About page E2E test', () => {
  it('Visits the about page', () => {
    cy.visit('/about')
    cy.contains('Version 1.0.0-dev')
  });
})
