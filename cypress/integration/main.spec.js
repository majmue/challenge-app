describe('me.NOW - challenge-App ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  describe('App screen has all elements', () => {
    it('has the right title', () => {
      cy.title().should('include', 'Challenge-App')
    })

    it('Add a challenge name', () => {
      it('has a challenge name', () => {
        cy.get('[data-cy=InputChallenge]').should('have.length', 1)
      })
    })

    it('Add a date', () => {
      it('has a challenge finish date', () => {
        cy.get('[data-cy=InputFinishdate]').should('have.length', 1)
      })
    })

    it('Add individal image', () => {
      it('has an individual background-image', () => {
        cy.get('[data-cy=InputImage]').should('have.length', 1)
      })
    })

    it('Add different milestones', () => {
      it('has milestones', () => {
        cy.get('[data-cy=InputMilestone]').should('have.length', 1)
      })
    })
  })
})
describe('Navigation', () => {
  it('has a Navigation', () => {
    cy.get('[data-cy=Navigation]').should('have.length', 1)
  })

  it('has a SetupScreen button', () => {
    cy.get('[data-cy=SetupScreen]')
      .should('have.class', 'active')
      .click()
  })

  it('has OverviewScreen button', () => {
    cy.get('[data-cy=Navigation]')
      .should('not.have.class', 'active')
      .click()
  })
})
