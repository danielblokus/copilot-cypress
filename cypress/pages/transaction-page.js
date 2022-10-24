class TransactionPaage {
    selectors = {
        // define selector for new transaction [data-test=nav-top-new-transaction]
        receiverAvatar : () => cy.get('[data-test="user-list-item-tsHF6_D5oQ"]'),
        amoutField : () => cy.get('#amount'),
        descriptionField : () => cy.get('#transaction-create-description-input'),
        submitButton : () => cy.get('[data-test="transaction-create-form"]')
    }

    clickReceiverAvatar() {
        this.selectors.receiverAvatar().click()
    }

    fillInAmountField() {
        this.selectors.amoutField().type('100')
    }

    typeinDescriptionField() {
        this.selectors.descriptionField().type('test')
    }

    clickSubmitButton() {
        this.selectors.submitButton().click()
    }
}

module.exports = new TransactionPaage();