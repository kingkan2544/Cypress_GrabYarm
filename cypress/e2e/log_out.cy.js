/*
@Test Case: ออกจากระบบ
@Test Date: 22 Nov 2022
@Updated Date: 23 Nov 2022
@Tester Name: Watcharapong
*/
describe('log_out', function() {
    it('TC24-001', function() {
       cy.visit('http://150.95.25.8/')
       cy.wait(1000)
    })
    it('TC24-002', function() {
      cy.visit('http://150.95.25.8/')
      cy.get('#inputEmail').type('Lnwza007@hotmail.com')
      cy.get('#inputPassword').type('05445874wes')
      cy.get('button[type=submit]').click()
      cy.wait(1000)
   })
   it('TC24-003', function() {
      cy.visit('http://150.95.25.8/')
      cy.get('#inputEmail').type('Lnwza007@hotmail.com')
      cy.get('#inputPassword').type('05445874wes')
      cy.get('button[type=submit]').click()
      cy.wait(1000)
      cy.get('.logout').click()
      cy.wait(1000)
   })
   it('TC24-004', function() {
      cy.visit('http://150.95.25.8/')
      cy.wait(1000)
   })
   it('TC24-005', function() {
      cy.visit('http://150.95.25.8/')
      cy.get('#inputEmail').type('somruk087@hotmail.com')
      cy.get('#inputPassword').type('somruk223344')
      cy.get('button[type=submit]').click()
      cy.wait(1000)
   })
   it('TC24-006', function() {
      cy.visit('http://150.95.25.8/')
      cy.get('#inputEmail').type('somruk087@hotmail.com')
      cy.get('#inputPassword').type('somruk223344')
      cy.get('button[type=submit]').click()
      cy.wait(1000)
      cy.get('.logout').click()
      cy.wait(1000)
   })
   it('TC24-007', function() {
      cy.visit('http://150.95.25.8/')
      cy.wait(1000)
   })
   it('TC24-008', function() {
      cy.visit('http://150.95.25.8/')
      cy.get('#inputEmail').type('admin01@hotmail.com')
      cy.get('#inputPassword').type('admin!11234')
      cy.get('button[type=submit]').click()
      cy.wait(1000)
   })
   it('TC24-009', function() {
      cy.visit('http://150.95.25.8/')
      cy.get('#inputEmail').type('admin01@hotmail.com')
      cy.get('#inputPassword').type('admin!11234')
      cy.get('button[type=submit]').click()
      cy.wait(1000)
      cy.get('.logout').click()
      cy.wait(1000)
   })
 })