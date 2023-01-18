const Commands = require('../../Commands');

class LogIn {

    commands = new Commands();
   
    //Locators
    emailLocator = '//input[@id="loginFormEmailInput"]';
    passwordLocator = '//input[@id="loginFormPasswordInput"]';
    singInButtonLocator1 = '//button[@id="loginFormSubmitButton"]';
    errorMessageLocator = '//h3[contains(text() , "Email and password")]';

    //Functions
    async enterEmail(email){
        await this.commands.clickWebElement(this.emailLocator);
        await this.commands.typeInWebElement(this.emailLocator, email);
    }

    async enterPassword(pwd){
        await this.commands.clickWebElement(this.passwordLocator);
        await this.commands.typeInWebElement(this.passwordLocator, pwd);
    }

    async clickSignInButton(){
        await this.commands.clickWebElement(this.singInButtonLocator1);
    }

    async isErrorMessageDisplayed(){
        await this.commands.isWebElementDisplayed(this.errorMessageLocator);
    }

}

module.exports = LogIn;