const urlSignin = 'http://localhost:3000/signin'

// add descibe section
it.skip('should display home page after successful signIn', () => {
    const username = 'Katharina_Bernier'
    const password = 's3cret'
    login(username, password)
    cy.url().should('eq', 'http://localhost:3000/')
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