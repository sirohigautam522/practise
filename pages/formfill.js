/// <reference types = "cypress"/>
        
        class Formfill{
        get firstName(){
            return '[id="customer.firstName"]';
        }
        get lastName (){
            return '[id="customer.lastName"]';
        }
        
        get fullAddress (){
            return '[id="customer.address.street"]';
        }

        get cityname (){
            return '[id="customer.address.city"]';
        }

        get statename (){
            return '[id="customer.address.state"]';
        }

        get zipname (){
            return '[id="customer.address.zipCode"]';
        }

        get contactno (){
            return '[id="customer.phoneNumber"]';
        }
        get username (){
            return '[id="customer.username"]';
        }

        get password (){
            return '[id="customer.password"]';
        }

        get confirmPassword(){
            return'[id="repeatedPassword"]'
        }

        get ssnCode(){
            return'[id="customer.ssn"]'
        }

        
        registerUsername(abc){
            cy.get(this.firstName).type(abc.namejs);
            cy.get(this.lastName).type(abc.sirName);
            cy.get(this.fullAddress).type(abc.address);
            cy.get(this.cityname).type(abc.city);
            cy.get(this.statename).type(abc.state);
            cy.get(this.zipname).type(abc.zipCode);
            cy.get(this.contactno).type(abc.phoneNo);
            cy.get(this.password).type(abc.password);
            cy.get(this.username).type(abc.username);
            cy.get(this.ssnCode).type(abc.ssnno)
            cy.get(this.confirmPassword).type(abc.confirmPassword);
            cy.get('[value="Register"]').click()
        
        }}

        export default new Formfill();

    
