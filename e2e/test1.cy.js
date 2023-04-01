/// <refernce types="Cypress"/>
import information from "../fixtures/username"
import homepage from "../pages/homepage"

describe("parabank demo website",()=>{

    it("bank login", ()=>{
        cy.visit("https://parabank.parasoft.com/parabank/index.htm")
        // cy.get('.input[name="username"]').type(information.xyz)
        // cy.get('[type="password"]').type(information.abc)
        // cy.wait(2000)
        // const username= information.xyz
        // const password= information.abc
        homepage.loginToPage(information.xyz, information.abc)

        // cy.get(homepage.getInputUsername()).type('abcd')
        cy.log(typeof(homepage.getInputUsername))
        
        
    })
})