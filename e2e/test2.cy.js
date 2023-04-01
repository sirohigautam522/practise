/// <reference types = "cypress"/>
import data from "../pages/formfill"
import information from "../fixtures/username"

describe("creating login credentials",()=>{

    it("entering information",()=>{
        cy.visit("https://parabank.parasoft.com/parabank/register.htm")
        let customerDetails={

            namejs: 'gautam',
            sirName: 'sirohi',
            address: 'kaithal',
            city: 'kaithal',
            state: 'hr',
            zipCode:'136027',
            phoneNo: '464161',
            ssnno: 'ssnno',
            username: information.xyz,
            password: information.abc,
            confirmPassword: information.abc

        }
        data.registerUsername(customerDetails)
    })
})