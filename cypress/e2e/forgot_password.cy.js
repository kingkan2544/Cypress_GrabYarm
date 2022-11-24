/*
@Test Case: เปลี่ยนรหัสผ่าน
@Test Date: 24 Nov 2022
@Updated Date: 24 Nov 2022
@Tester Name: Kingkan
*/
describe('forgot_password', function() {
    it('TC05-001 ทดสอบการเข้าหน้าจอเข้าสู่ระบบผ่าน URL', function () {
        cy.visit('http://150.95.25.8/')
        cy.wait(1000)
    })
    it('TC05-002 ทดสอบการคลิกปุ่มลืมรหัสผ่าน', function () {
        cy.get('.forgotpassword').click()
        cy.wait(1000)
    })
    it('TC05-003 ทดสอบการคลิกปุ่มเข้าสู่ระบบ', function () {
        cy.get('.login-forget').click()
    })
 })