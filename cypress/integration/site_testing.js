describe('My First Test', () => {
    it('Does not do much!', () => {
      expect(true).to.equal(true)
      
      cy.visit('http://localhost:3001')
	  cy.contains('Greetings')
    })
  })