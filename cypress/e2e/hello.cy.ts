describe('hello from vue', () => {
  it('check h1 contains Hello from Vue', () => {
    cy.visit('/')
    cy.contains('h1', 'Hello from Vue!👋')
  })
})
