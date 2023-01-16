const Dates = require('../../../Utils/Dates');
const Commands = require('../../Commands');

class SignUp {

    commands = new Commands();
    dates = new Dates();

    //Locator
    emailLocator = '//input[@id="signupFormEmailInput"]';
    firstNameLocator = '//input[@id="signupFormFirstNameInput"]';
    lastNameLocator = '//input[@id="signupFormLastNameInput"]';
    passwordLocator = '//input[@id="signupFormPasswordInput"]';
    keepMeSignedInCheckBoxLocator = '//input[@id="rememberMeSignUpCheckbox"]';
    keepMeSignedInText = '//span[contains(text(),"Keep me signed in")]';
    continueButton = '//button[@id="signupFormSubmitButton"]';
    continueButtonDisabled = '//button[@disabled]';
    nameErrorLocator = '//div[@id="signupFormFirstNameInput-error"]';
    lastNameErrorLocator = '//div[@id="signupFormLastNameInput-error"]';
    mailErrorLocator = '//div[@id="signupFormEmailInput-error"]';
    termsLocator = '//a[text()="Terms and Conditions"]';
    privacyLocator = '//a[text()="Privacy Statement"]';
    lastRevisedDateLocator = '//span[text()="Last revised: 01/01/23"]';
    lastUpdatedLocator = '//div[@class="policy-content"]/p[contains(text() , "Last Updated: 20 December, 2022")]';
    strengthMsgLocator = '//div[@class="uitk-layout-flex-item uitk-type-right uitk-progress-bar-description uitk-type-bold"]';
    strengthBarLocator = '//div[@class="uitk-progress-bar-container"]//span';
    msg1Locator = '//ul[@role="list"]//li[1]';
    msg2Locator = '//ul[@role="list"]//li[2]';


    

    //functions

    async enterEmail(email){
        await this.commands.typeInWebElement(this.emailLocator, email);
    }

    async enterFirstName(name){
        await this.commands.typeInWebElement(this.firstNameLocator, name);
    }

    async enterLastName(surname){
        await this.commands.typeInWebElement(this.lastNameLocator, surname);
    }

    async enterPassword(pwd){
        await this.commands.typeInWebElement(this.passwordLocator, pwd);
    }

    async isNameErrorDisplayed(){
        await this.commands.isWebElementDisplayed(this.nameErrorLocator);
    }

    async isLastNameErrorDisplayed(){
        await this.commands.isWebElementDisplayed(this.lastNameErrorLocator);
    }

    async isMailErrorDisplayed(){
        await this.commands.isWebElementDisplayed(this.mailErrorLocator);
    }

    async isCheckboxDisplayed(){
        await this.commands.isWebElementDisplayed(this.keepMeSignedInText);
        
    }
    async isCheckboxEnabled(){
        await this.commands.isWebElementEnabled(this.keepMeSignedInCheckBoxLocator);
    }

    async isContinueDisabled(){
        await this.commands.isWebElementEnabled(this.continueButtonDisabled);
    }

    async isContinueDisplayed(){
        await this.commands.isWebElementDisplayed(this.continueButton);
    }

    async clickTerms(){
        await this.commands.clickWebElement(this.termsLocator);
    }

    async clickPrivacy(){
        await this.commands.clickWebElement(this.privacyLocator);
    }

    async isNewTab(){
        return await this.commands.getHandles();
    }

    async switchToTermsPage(){
        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const title = await browser.getTitle();
            if (title.startsWith('Terms')) {
                await browser.switchToWindow(handle);
                break;
            }
        }
    }

    async switchToPrivacyPage(){
        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const title = await browser.getTitle();
            if (title.startsWith('Hotels')) {
                await browser.switchToWindow(handle);
                break;
            }
        }
    }

    async isTermsDateFormatExpected(){
        const dateText = await this.commands.getTextOfWebElement(this.lastRevisedDateLocator);
        const dateArray = dateText.split(' ');
        const length = dateArray.length
        const date = dateArray[length-1];
        const expectedDate = await this.dates.format_MM$DD$YY(date);
        if (date.localeCompare(expectedDate) === 0){
            return true;
        } else {
            return false;
        }
    }

    async isPrivacyDateFormatExpected(){
        const dateText = await this.commands.getTextOfWebElement(this.lastUpdatedLocator);
        const dateArray = dateText.split(' ');
        const length = dateArray.length
        const date = dateArray[length-3] + ' ' + dateArray[length-2] + ' ' + dateArray[length-1];
        const expectedDate = await this.dates.format_DD_MMMMc_YYYY(date);
        if (date.localeCompare(expectedDate) === 0){
            return true;
        } else {
            return false;
        }
    }

    async isStrengthBar(){
        const bar = await this.commands.getTextOfWebElement(this.strengthBarLocator);
        switch (bar) {
            case 'Password strength 100%':
                return 'completely';
                break;
            case 'Password strength 75%':
                return 'almost';
                break;
            case 'Password strength 50%':
                return 'half';
                break;
            case 'Password strength 0%':
                return 'not';
            default:
                break;
        }
    }

    async isStrengthMsg(){
        return await this.commands.getTextOfWebElement(this.strengthMsgLocator);
    }

    async isMsg1(){
       return await this.commands.isWebElementDisplayed(this.msg1Locator);
    }

    async isMsg2(){
       return await this.commands.isWebElementDisplayed(this.msg2Locator);
    }
    

}
module.exports = SignUp;