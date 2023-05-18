describe('template spec', () => {
  it('passes', () => {
    //cy.visit('https://example.cypress.io')
    //cy.visit('www.github.com/EMANOELGOMS')
    cy.visit('./src/index.html')

  })

  it.only('visitando o site', () => {
    
    cy.visit('./src/index.html')
  });
})