describe('Destin Home Page Check', () => {
    it('Validates Home Page', () => {
        cy.viewport(1536, 960)
        cy.visit('https://staging.destinflorida.com/')

        cy.get('.right > [aria-label="Vacation Rentals"]').click()
        cy.url().should('include', '/vacation-rentals')
        cy.get('.listings-title').contains('Destin Florida Vacation Rentals')
        cy.get('.featured-cards-container > [href="/fort-walton-beach/vacation-rentals"]').contains('Ft. Walton Beach')
        cy.get('.featured-cards-container > [href="/destin/vacation-rentals"]').contains('Destin')
        cy.get('.featured-cards-container > [href="/miramar-beach/vacation-rentals"]').contains('Miramar Beach')
        cy.get('.featured-cards-container > [href="/30a/vacation-rentals"]').contains('30A')
        cy.get('.ad-block-container')
        cy.get('.footer-desktop > .footer-main').contains('About')
        cy.get('.footer-desktop > .footer-legal').contains('Powered By CrateBind')
        
        
        //cy.get('select').select('2')




        //cy.get('.right > [aria-label="Real Estate"]').click()
    })
  })