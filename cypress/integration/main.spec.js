describe('me.NOW - challenge-App ', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
    cy.clearLocalStorage()
  })

  describe('App screen has all elements', () => {
    it('has the right title', () => {
      cy.title().should('include', 'challenge-app')
    })

//     describe('Progress bar in default state', () => {
//       beforeEach(() => {
//         cy.get('[data-cy=ProgressBar]').as('ProgressBar')
//       })

//       it('exists', () => {
//         cy.get('@ProgressBar').should('have.length', 1)
//       })

//       it('shows no bar', () => {
//         cy.get('@ProgressBar')
//           .find('[data-cy=ProgressBar__Inner]')
//           .should('have.css', 'width')
//           .and('eq', '0px')
//       })
//     })

//     it('has an input', () => {
//       cy.get('[data-cy=Input]').should('have.length', 1)
//     })

//     it('has a separator with text TODO', () => {
//       cy.get('[data-cy=Separator]')
//         .contains('TODO')
//         .should('have.length', 1)
//     })

//     it('has NO separator with text DONE', () => {
//       cy.get('[data-cy=Separator]')
//         .contains('DONE')
//         .should('have.length', 0)
//     })

//     it('has no todos at the start', () => {
//       cy.get('[data-cy=Todo]').should('have.length', 0)
//     })

//     describe('Navigation', () => {
//       it('has a Navigation', () => {
//         cy.get('[data-cy=Navigation]').should('have.length', 1)
//       })

//       it('has a selected home button', () => {
//         cy.get('[data-cy=Navigation]')
//           .find('a')
//           .contains('Home')
//           .should('have.length', 1)
//           .should('have.class', 'active')
//       })

//       it('has config button', () => {
//         cy.get('[data-cy=Navigation]')
//           .find('a')
//           .contains('Config')
//           .should('have.length', 1)
//           .should('not.have.class', 'active')
//       })
//     })
//   })

//   describe('Create Todos', () => {
//     beforeEach(() => {
//       cy.get('[data-cy=Input]')
//         .type('hello')
//         .type('{enter}')
//         .type('world')
//         .type('{enter}')
//     })

//     it('can add todos', () => {
//       cy.get('[data-cy=Todo]').should('have.length', 2)
//     })

//     describe('Toggle Todo', () => {
//       beforeEach(() => {
//         cy.get('[data-cy=Todo]')
//           .first()
//           .click()
//       })

//       describe('ProgressBar changes', () => {
//         it('shows half sized bar', () => {
//           cy.window().then(win => {
//             const viewportWidth = win.innerWidth
//             const halfWidth = Math.round(viewportWidth / 2)

//             cy.get('[data-cy=ProgressBar]')
//               .find('[data-cy=ProgressBar__Inner]')
//               .should('have.css', 'width')
//               .and('eq', `${halfWidth}px`)
//           })
//         })
//       })

//       it('has a toggled Todo', () => {
//         cy.get('[data-cy=Todo')
//           .contains('world')
//           .should('have.class', 'done')
//       })

//       it('has a DONE separator', () => {
//         cy.get('[data-cy=Separator]')
//           .contains('DONE')
//           .should('have.length', 1)
//       })

//       it('can un-toggle', () => {
//         cy.get('[data-cy=Separator')
//           .contains('DONE')
//           .should('have.length', 1)

//         cy.get('[data-cy=Todo')
//           .contains('world')
//           .click()

//         cy.get('[data-cy=Todo')
//           .contains('world')
//           .should('not.have.class', 'done')

//         cy.get('[data-cy=Separator')
//           .contains('DONE')
//           .should('have.length', 0)
//       })

//       describe('Config screen', () => {
//         beforeEach(() => {
//           cy.get('[data-cy=Navigation]')
//             .find('a')
//             .contains('Config')
//             .click()
//         })

//         it('changes url path to /config', () => {
//           cy.url().should('contain', '/config')
//         })

//         it('has a config headline', () => {
//           cy.get('h1, h2, h3, h4, h5, h6')
//             .contains('Config')
//             .should('have.length', 1)
//         })

//         describe('Navigation', () => {
//           it('Config button is active', () => {
//             cy.get('[data-cy=Navigation]')
//               .find('a')
//               .contains('Config')
//               .should('have.class', 'active')
//           })

//           it('Home button is NOT active', () => {
//             cy.get('[data-cy=Navigation]')
//               .find('a')
//               .contains('Home')
//               .should('not.have.class', 'active')
//           })
//         })

//         describe('Change config', () => {
//           beforeEach(() => {
//             cy.get('[data-cy=ToggleButton]')
//               .contains('Hide')
//               .as('ToggleButton') // save alias
//               .click()
//           })

//           it('has a changed ToggleButton', () => {
//             cy.get('@ToggleButton')
//               .should('not.contain', 'Hide')
//               .should('contain', 'Show')
//           })

//           describe('Config change affects Home', () => {
//             beforeEach(() => {
//               cy.get('[data-cy=Navigation]')
//                 .find('a')
//                 .contains('Home')
//                 .click()
//             })

//             it('navigates back to Home /', () => {
//               cy.url().should('not.contain', '/config')
//             })

//             it('does not show DONE Separator after config change', () => {
//               cy.get('[data-cy=Separator]')
//                 .contains('DONE')
//                 .should('have.length', 0)
//             })

//             it('hides Todo on toggle to done state ', () => {
//               cy.get('[data-cy=Todo]')
//                 .contains('hello')
//                 .should('have.length', 1)
//                 .click()
//                 .should('have.length', 0)
//             })
//           })
//         })
//       })
//     })
//   })
// })
