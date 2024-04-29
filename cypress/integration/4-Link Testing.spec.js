describe('Destin Link Checks', () => {
    it('Validates Links are working and pages load', () => {
        cy.viewport(1536, 960)
        cy.visit('https://staging.destinflorida.com/')

        cy.get('.right > [aria-label="Vacation Rentals"]').click()
        cy.url().should('include', '/vacation-rentals')
        cy.get('.listings-title').contains('Destin Florida Vacation Rentals')

        cy.get('.right > [aria-label="Real Estate"]').click()
        cy.url().should('include', '/real-estate')
        //cy.get('.listings-title.forma').contains('Destin Florida Real Estate')

        cy.get('.right > [aria-label="Events"]').click()
        cy.url().should('include', '/events')
        cy.get('.search-results-title').contains('Destin Florida Events')

        cy.get('.right > [aria-label="Weather"]').click()
        cy.url().should('include', '/weather')
        cy.get('h1.forma').contains('Destin, FL Weather')
        
        cy.get('.right > [aria-label="News"]').click()
        cy.url().should('include', '/news')
        //cy.get('h1').contains('Destin Florida News')

        cy.get('.right > [aria-label="Book Activities"]').click()
        cy.url().should('include', '/things-to-do/book-online-now')
        cy.get(':nth-child(1) > .guide_body').contains('Looking for things to do while in the Destin area? All of these attractions are able to be booked online today!')




    })
})