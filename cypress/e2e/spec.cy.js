const urlSignin = 'http://localhost:3000/signin'

// add descibe section
it.skip('should display home page after successful signIn', () => {
    const username = 'Katharina_Bernier'
    const password = 's3cret'
    login(username, password)
    cy.url().should('eq', 'http://localhost:3000/')
})

// add new test case
it.skip('should display error message when username is not provided', () => {
})

// add new Cypress test case
// should display home page after successful signIn
it.skip('should display home page after successful signIn', () => {
    const username = 'Katharina_Bernier'
    const password = 's3cret'
    cy.visit(urlSignin)
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('form').submit()
    cy.url().should('eq', 'http://localhost:3000/')
})

it('should display error when password is incorrect', () => {
    
})

// afterEach function
afterEach(() => {
    // click on logout button and check if the url is equal to http://localhost:3000/
    cy.get('[data-test="sidenav-signout"]').click()
    cy.url().should('eq', 'http://localhost:3000/signin')
})

// create login constant to login to the app with given web selectors input[name="username"] input[name="password"] form
const login = (username, password) => {
    cy.visit(urlSignin)
    cy.get('input[name="username"]').type(username)
    cy.get('input[name="password"]').type(password)
    cy.get('form').submit()
}