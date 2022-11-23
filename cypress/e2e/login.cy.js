/*
@Test Case: เข้าสู่ระบบ
@Test Date: 22 Nov 2022
@Updated Date: 23 Nov 2022
@Tester Name: Watcharapong
*/
describe('login', function() {
    it('TC09-001', function () {
        cy.visit('http://150.95.25.8/')
        cy.wait(1000)
    })
    it('TC09-002', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC09-003', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('somruk087@hotmail.com')
        cy.get('#inputPassword').type('somruk223344') //right password
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC09-004', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('somruk087@hotmail.com')
        cy.get('#inputPassword').type('05445874wes') //wrong password
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC09-005', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('02@gmail.com')
        cy.get('#inputPassword').type('somruk223344')
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC09-006', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputPassword').type('somruk223344')
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC09-007', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('somruk087@hotmail.com')
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC09-008', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('Lnwza007@hotmail.com')
        cy.get('#inputPassword').type('05445874wes') //right password
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC09-009', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('Lnwza007@hotmail.com')
        cy.get('#inputPassword').type('somruk223344') //wrong password
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC09-010', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('02@gmail.com')
        cy.get('#inputPassword').type('05445874wes')
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC09-011', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputPassword').type('05445874wes')
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC09-012', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('Lnwza007@hotmail.com')
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
 })