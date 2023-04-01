///<refernce types = "cypress"/>
class Homepage{
    get getInputUsername(){
         return '.input[name="username"]'
    }

    get getInputPassword(){
        return '[type="password"]'
    }

    loginToPage(username,password){
        cy.get(this.getInputUsername).type(username)
        cy.get(this.getInputPassword).type(password)
        cy.get("[type='submit']").click()
    }
}

export default new Homepage();