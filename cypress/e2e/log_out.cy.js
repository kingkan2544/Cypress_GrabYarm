/*
@Test Case: ออกจากระบบ
@Test Date: 22 Nov 2022
@Updated Date: 23 Nov 2022
@Tester Name: Watcharapong
*/
describe('log_out', function () {
   it('TC24-001 ทดสอบการเข้าหน้าจอเข้าสู่ระบบผ่าน URL', function () {
      cy.visit('http://150.95.25.8/')
      cy.wait(5000)
   })
   it('TC24-002 ทดสอบการเข้าสู่ระบบลูกค้า', function () {
      cy.get('#inputEmail').type('63160294@go.buu.ac.th')
      cy.get('#inputPassword').type('123456789')
      cy.wait(5000)
      cy.get('button[type=submit]').click()
      cy.wait(5000)
      cy.get('[class="swal2-confirm swal2-styled"]').click()
      cy.wait(5000)
   })
   it('TC24-003 ทดสอบการคลิกปุ่มออกจากระบบ กรณีอยู่ในระบบของลูกค้า', function () {
      cy.get('[class="logout-user"]').click()
      cy.wait(5000)
      cy.get('[class="swal2-confirm swal2-styled"]').click()
   })
   it('TC24-004 ทดสอบการเข้าหน้าจอเข้าสู่ระบบผ่าน URL', function () {
      cy.visit('http://150.95.25.8/')
      cy.wait(5000)
   })
   it('TC24-005 ทดสอบการเข้าสู่ระบบเจ้าหน้าที่รักษาความปลอดภัย', function () {
      cy.get('#inputEmail').type('63160251@go.buu.ac.th')
      cy.get('#inputPassword').type('123456789')
      cy.wait(5000)
      cy.get('button[type=submit]').click()
      cy.wait(5000)
      cy.get('[class="swal2-confirm swal2-styled"]').click()
      cy.wait(5000)
   })
   it('TC24-006 ทดสอบการคลิกปุ่มออกจากระบบ กรณีอยู่ในระบบของเจ้าหน้าที่รักษาความปลอดภัย', function () {
      cy.get('[class="logout-user"]').click()
      cy.wait(5000)
      cy.get('[class="swal2-confirm swal2-styled"]').click()
   })
   it('TC24-007 ทดสอบการเข้าหน้าจอเข้าสู่ระบบผ่าน URL', function () {
      cy.visit('http://150.95.25.8/')
      cy.wait(5000)
   })
   it('TC24-008 ทดสอบการเข้าสู่ระบบแอดมิน', function () {
      cy.get('#inputEmail').type('admin01@hotmail.com')
      cy.get('#inputPassword').type('admin!11234')
      cy.wait(5000)
      cy.get('button[type=submit]').click()
      cy.wait(5000)
      cy.get('[class="swal2-confirm swal2-styled"]').click()
      cy.wait(5000)
   })
   it('TC24-009 ทดสอบการคลิกปุ่มออกจากระบบ กรณีอยู่ในระบบของแอดมิน', function () {
      cy.get('[class="logout"]').click()
      cy.wait(5000)
      cy.get('[class="swal2-confirm swal2-styled"]').click()
   })
})