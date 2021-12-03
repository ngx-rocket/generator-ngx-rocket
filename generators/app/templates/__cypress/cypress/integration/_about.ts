describe('About page E2E test', () => {
<% if (props.auth) { -%>
  it('Should allow the user to login and visit the about page', () => {
    cy.visit('/login')
    cy.contains('<%= props.projectName %>')

    cy.get('[formcontrolname="username"]').type('user@email.com')
    cy.get('[formcontrolname="password"]').type('testPassword1234')
    cy.get('button').contains('Login').click()

    cy.url().should('include', '/home')

    cy.visit('/about')
    cy.contains('Version 1.0.0-dev')
  });
<% } else { -%>
  it('Should visits the about page', () => {
    cy.visit('/about')
    cy.contains('Version 1.0.0-dev')
  });
<% } -%>
})
