describe('hello from vue', () => {
    it('hello from vue - home', () => {
        cy.visit('/')

        cy.get('a').first().should('contain.text', 'poc-vue')
        cy.get('a').eq(1).should('contain.text', 'Home')
        cy.get('a').last().should('contain.text', 'Another page')

        cy.contains('h1', 'Hello from Vue!👋')
    })

    it('hello from vue - click on another page link', () => {
        cy.visit('/')

        cy.get('a').eq(2).click()
        cy.url().should('eq', Cypress.config().baseUrl + '/another-page')

        cy.get('a').first().should('contain.text', 'poc-vue')
        cy.get('a').eq(1).should('contain.text', 'Home')
        cy.get('a').last().should('contain.text', 'Another page')

        cy.get('h1').should('not.contain.text', 'Hello from Vue!👋')
        cy.contains('h1', 'Another page')
    });
})
