/*
@Test Case: เข้าสู่ระบบแอดมิน
@Test Date: 23 Nov 2022
@Updated Date: 23 Nov 2022
@Tester Name: Kingkan
*/
describe('login_admin', function () {
    it('TC09-001 ทดสอบการเข้าหน้าจอเข้าสู่ระบบผ่าน URL', function () {
        cy.visit('http://150.95.25.8/')
        cy.wait(1000)
    })
    it('TC09-002 ทดสอบการเข้าสู่ระบบไม่สำเร็จ กรณีไม่กรอกข้อมูลใด ๆ', function () {
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC09-003 ทดสอบการเข้าสู่ระบบสำเร็จ กรณีกรอกอีเมล และรหัสผ่านถูกต้อง', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('admin01@hotmail.com')
        cy.get('#inputPassword').type('admin!11234') //right password
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC09-004 ทดสอบการเข้าสู่ระบบไม่สำเร็จ กรณีกรอกรหัสผ่านไม่ถูกต้อง', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('admin01@hotmail.com')
        cy.get('#inputPassword').type('somruk223344') //wrong password
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC09-005 ทดสอบการเข้าสู่ระบบไม่สำเร็จ กรณีกรอกอีเมลไม่ถูกต้อง', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('02@gmail.com')
        cy.get('#inputPassword').type('admin!11234')
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC09-006 ทดสอบการเข้าสู่ระบบไม่สำเร็จ กรณีไม่กรอกอีเมล', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputPassword').type('admin!11234')
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
    it('TC09-007 ทดสอบการเข้าสู่ระบบไม่สำเร็จ กรณีไม่กรอกรหัสผ่าน', function () {
        cy.visit('http://150.95.25.8/')
        cy.get('#inputEmail').type('admin01@hotmail.com')
        cy.get('button[type=submit]').click()
        cy.wait(1000)
    })
})