/*
@Test Case: ค้นหางาน
@Test Date: 28 Jan 2022
@Updated Date: 28 Jan 2022
@Tester Name: Parakul
*/
describe('log_out', function () {
    it('TC24-001 ทดสอบการเข้าหน้าจอเข้าสู่ระบบผ่าน URL', function () {
       cy.visit('http://150.95.25.8/')
       cy.wait(1000)
    })
   //  it('TC24-002 ทดสอบการเข้าสู่ระบบเจ้าหน้าที่รักษาความปลอดภัย', function () {
   //     cy.get('#inputEmail').type('63160251@go.buu.ac.th')
   //     cy.get('#inputPassword').type('123456789')
   //     cy.wait(1000)
   //     cy.get('button[type=submit]').click()
   //     cy.wait(1000)
   //     cy.get('[class="swal2-confirm swal2-styled"]').click()
   //     cy.wait(1000)
   //  })
    it('TC24-003 ทดสอบการคลิกปุ่มค้นหา', function () {
      cy.get('[class="button-search-work button-search-work2 btn"]').click()
      cy.wait(1000)
    })
    it('TC24-004 ทดสอบการคลิกปุ่มกากบาท', function () {
      cy.get('[class="bi bi-x-lg"]').click()
      cy.wait(1000)
    })
    it('TC24-006 ทดสอบการค้นหางาน', function () {
      cy.get('[class="button-search-work button-search-work2 btn"]').click()
      cy.wait(1000)
      cy.get('select[name="type-work"]').select('ยามเฝ้าหมู่บ้าน')
      cy.wait(1000)
      cy.get('button[class="model-search-work model-search-work2"]').click()
      cy.wait(1000)
    })
    it('TC24-007 ทดสอบการค้นหางาน', function () {
      cy.get('[class="button-search-work button-search-work2 btn"]').click()
      cy.wait(1000)
      cy.get('select[name="type-work"]').select('ยามเฝ้าหมู่บ้าน')
      cy.wait(1000)
      cy.get('select[name="province-work"]').select('ชลบุรี')
      cy.wait(1000)
      cy.get('button[class="model-search-work model-search-work2"]').click()
      cy.wait(1000)
    })
    it('TC24-007 ทดสอบการค้นหางาน', function () {
      cy.get('[class="button-search-work button-search-work2 btn"]').click()
      cy.wait(1000)
      cy.get('select[name="type-work"]').select('ยามเฝ้าหมู่บ้าน')
      cy.wait(1000)
      cy.get('select[name="province-work"]').select('ชลบุรี')
      cy.wait(1000)
      cy.get('#districtname').type('เมืองชลบุรี')
      cy.wait(1000)
      cy.get('select[name="district-work"]').select('เมืองชลบุรี')
      cy.wait(1000)
      cy.get('button[class="model-search-work model-search-work2"]').click()
      cy.wait(1000)
    })
   //  it('TC24-007 ทดสอบการค้นหางาน', function () {
   //    cy.get('[class="button-search-work button-search-work2 btn"]').click()
   //    cy.wait(1000)
   //    cy.get('select[name="type-work"]').select('ยามเฝ้าหมู่บ้าน')
   //    cy.wait(1000)
   //    cy.get('select[name="province-work"]').select('ชลบุรี')
   //    cy.wait(1000)
   //    cy.get('#districtname').type('เมืองชลบุรี')
   //    cy.get('select[name="district-work"]').select('เมืองชลบุรี')
   //    cy.wait(1000)
   //    cy.get('.thumb thumb--left').should(500).type(arrows)
   //    cy.should('.thumb thumb--right', '1000')
   //    cy.get(input['class="picker-input__text"']).select('21/11/2565')
   //    cy.get(input['class="picker-input__text"']).select('21/11/2565')
   //    cy.get('.mui-1').type('08:00')
   //    cy.get('.mui-2').type('16:00')
   //    cy.get('button[class="model-search-work model-search-work2"]').click()
   //    cy.wait(1000)
   //  })
    it('TC24-007 ทดสอบการปุ่ม Clear', function () {
      cy.get('[class="ms-3 btn"]').click()
      cy.wait(1000)
    })
   //  it('TC24-007 ทดสอบการปุ่มแว่นขยาย', function () {
   //    cy.xpath("//*[@id=main-wrapper]/div[2]/div/div/div/div[2]/table/tbody/tr[1]/div/td[4]/div/button").click()
   //    cy.wait(1000)
   //  })
    it('TC24-007 ทดสอบการปุ่มหน้าถัดไป', function () {
         cy.get('[class="next-button"]').click({force: true})
         cy.wait(1000)
    })
    it('TC24-007 ทดสอบการปุ่มหน้าที่แล้ว', function () {
      cy.get('[class="previous-button"]').click({force: true})
      cy.wait(1000)
    })
    it('TC24-007 ทดสอบการปุ่มหน้าสุดท้าย', function () {
      cy.get('[class=" next-button"]').click({force: true})
      cy.wait(1000)
    })
    it('TC24-007 ทดสอบการปุ่มหน้าแรกสุด', function () {
      cy.get('[class=" previous-button"]').click({force: true})
      cy.wait(1000)
    })    
   //  it('TC24-006 ทดสอบการคลิกปุ่มออกจากระบบ', function () {
   //     cy.get('[class="logout-user"]').click()
   //     cy.wait(5000)
   //     cy.get('[class="swal2-confirm swal2-styled"]').click()
   //  })
 })