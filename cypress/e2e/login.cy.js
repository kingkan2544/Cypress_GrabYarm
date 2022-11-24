/*
@Test Case: เข้าสู่ระบบ
@Test Date: 22 Nov 2022
@Updated Date: 23 Nov 2022
@Tester Name: Watcharapong
*/
describe('login', function() {
    it('TC04-001 ทดสอบการเข้าหน้าจอเข้าสู่ระบบผ่าน URL', function () {
        cy.visit('http://150.95.25.8/')
        cy.wait(1000)
    })
    it('TC04-002 ทดสอบการเข้าสู่ระบบเจ้าหน้าที่รักษาความปลอดภัยไม่สำเร็จ กรณีไม่กรอกข้อมูลใด ๆ', function () {
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC04-003 ทดสอบการเข้าสู่ระบบเจ้าหน้าที่รักษาความปลอดภัยสำเร็จ กรณีกรอกอีเมล และรหัสผ่านถูกต้อง', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('somruk087@hotmail.com')
        cy.get('#inputPassword').type('somruk223344') //right password
        cy.get('button[type=submit]').click()
    })
    it('TC04-004 ทดสอบการเข้าสู่ระบบเจ้าหน้าที่รักษาความปลอดภัยไม่สำเร็จ กรณีกรอกรหัสผ่านไม่ถูกต้อง', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('somruk087@hotmail.com')
        cy.get('#inputPassword').type('05445874wes') //wrong password
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC04-005 ทดสอบการเข้าสู่ระบบเจ้าหน้าที่รักษาความปลอดภัยไม่สำเร็จ กรณีกรอกอีเมลไม่ถูกต้อง', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('02@gmail.com')
        cy.get('#inputPassword').type('somruk223344')
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC04-006 ทดสอบการเข้าสู่ระบบเจ้าหน้าที่รักษาความปลอดภัยไม่สำเร็จ กรณีไม่กรอกอีเมล', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputPassword').type('somruk223344')
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC04-007 ทดสอบการเข้าสู่ระบบเจ้าหน้าที่รักษาความปลอดภัยไม่สำเร็จ กรณีไม่กรอกรหัสผ่าน', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('somruk087@hotmail.com')
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC04-008 ทดสอบการเข้าสู่ระบบลูกค้าสำเร็จ กรณีกรอกอีเมล และรหัสผ่านถูกต้อง', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('Lnwza007@hotmail.com')
        cy.get('#inputPassword').type('05445874wes') //right password
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC04-009 ทดสอบการเข้าสู่ระบบลูกค้าไม่สำเร็จ กรณีกรอกรหัสผ่านไม่ถูกต้อง', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('Lnwza007@hotmail.com')
        cy.get('#inputPassword').type('somruk223344') //wrong password
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC04-010 ทดสอบการเข้าสู่ระบบลูกค้าไม่สำเร็จ กรณีกรอกอีเมลไม่ถูกต้อง', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('02@gmail.com')
        cy.get('#inputPassword').type('05445874wes')
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC04-011 ทดสอบการเข้าสู่ระบบลูกค้าไม่สำเร็จ กรณีไม่กรอกอีเมล', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputPassword').type('05445874wes')
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC04-012 ทดสอบการเข้าสู่ระบบลูกค้าไม่สำเร็จ กรณีไม่กรอกรหัสผ่าน', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('Lnwza007@hotmail.com')
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
 })