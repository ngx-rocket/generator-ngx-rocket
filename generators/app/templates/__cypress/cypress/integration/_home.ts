describe('Home page E2E test', () => {
<% if (props.auth) { -%>
  it('Should allow the user to login and visits the home page', () => {
    cy.visit('/login')
    cy.contains('<%= props.projectName %>')

    cy.get('[formcontrolname="username"]').type('user@email.com')
    cy.get('[formcontrolname="password"]').type('testPassword1234')
    cy.get('button').contains('Login').click()

    cy.url().should('include', '/home')
    cy.contains('Hello world !')
  });
<% } else { -%>
  it('Visits the home page', () => {
    cy.visit('/home')
    cy.contains('Hello world !')
  });
<% } -%>
}) 
