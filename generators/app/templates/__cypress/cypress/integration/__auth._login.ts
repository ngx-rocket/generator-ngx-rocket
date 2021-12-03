describe('Login page E2E test', () => {
  it('Should allow the user to login', () => {
    cy.visit('/login')
    cy.contains('<%= props.projectName %>')

    cy.get('[formcontrolname="username"]').type('user@email.com')
    cy.get('[formcontrolname="password"]').type('testPassword1234')
    cy.get('button').contains('Login').click()

    cy.url().should('include', '/home')
  });
}) 
