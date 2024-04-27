describe('My First Test', () => {
    it('verify title positive', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM')
    })

    it('verify title negative', () => {
        cy.visit("https://opensource-demo.orangehrmlive.com/")
        cy.title().should('eq','OrangeHRM123')
    })
  })



//   describe('My First Test', function() {
//     it('Does not do much!', function() {
//       expect(true).to.equal(true)
//     })
//   })



// describe('suite name', () => {
//     it('test1', () => {
//       expect(true).to.equal(true)
//     })
//   })

//   describe('suite name', function() {
//     it('test1', () => {
//       expect(true).to.equal(true)
//     })
//   })