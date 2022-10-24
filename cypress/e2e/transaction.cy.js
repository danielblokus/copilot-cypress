import transactionPage from '../pages/transaction-page';

// add describe section with name Transaction tests
describe('Transaction tests', () => {
    const urlSignin = 'http://localhost:3000/signin'

    beforeEach(() => {
        const username = 'Katharina_Bernier'
        const password = 's3cret'
        // to-do
        // signinPage.login(username, password)
        login(username, password)
    })

    // test should display error message when amount is not provided
    it('should display error message when amount is not provided', () => {
        cy.get('[data-test=nav-top-new-transaction]').click()

        transactionPage.clickReceiverAvatar()
        transactionPage.typeinDescriptionField()
        transactionPage.clickSubmitButton()
        cy.get('#transaction-create-amount-input-helper-text').should('be.visible')
    })

        // test
        it.skip('example test', () => {
            homePage.clickNewTransaction()
    
            transactionPage.clickReceiverAvatar()
            transactionPage.fillInAmountField()
            transactionPage.typeinDescriptionField()
            cy.intercept('POST', 'http://localhost:3001/transactions').as('postTransaction');
            transactionPage.clickSubmitButton()
            cy.wait('@postTransaction').then((interception) => {
                expect(interception.response.statusCode).to.equal(200);
                expect(interception.response.body.transaction.receiverId).to.equal('tsHF6_D5oQ');
            }) 
        })

    // optional
    afterEach(() => {
        // cy.get('[data-test="sidenav-signout"]').click()
        // cy.url().should('eq', 'http://localhost:3000/')
    })

    const login = (username, password) => {
        cy.visit(urlSignin)
        cy.get('input[name="username"]').type(username)
        cy.get('input[name="password"]').type(password)
        cy.get('form').submit()
    }
})
