const { Given, When } = require("@wdio/cucumber-framework");
const LoginErrorPage = require("../../POM/Facebook/LoginErrorPage");
const LoginPage = require('../../POM/Facebook/LoginPage');
const { expect }= require("chai")

const loginPage = new LoginPage();
const loginErrorPage = new LoginErrorPage();

// Glue Code
/**
 * Glue code is a regular expression which helps to map Scenario-steps with functions (step-definitions)
 */

Given(/^I am on facebook$/, async function (){
    await browser.url('/');
    await browser.pause(5000);
});

//When(/^I type '(.*)' as username$/, async function(username){
  //  loginPage.enterLoginEmail(username);
    //await browser.pause(1000);
//});

//When(/^I type '(.*)' as password$/, async function(pwd){
   // loginPage.enterLoginPassword(pwd);
   // await browser.pause(1000);
//});

When(/^I type '(.*)' as (.*)$/, async function (data, field) {
    switch (field.toLowerCase()) {
        case 'username':
            await loginPage.enterLoginEmail(data);
            break;
        case 'password':
            await loginPage.enterLoginPassword(data);
            break;    
        default:
            break;
    }
});

When(/^I click login button$/, async function(){
    await loginPage.clickLoginInButton();
    await browser.pause(5000);
});

When(/^I verify error is displayed$/, async function () {
    expect(await loginErrorPage.isLoginErrorDisplayed(), 'Login error is not displayed').to.be.true;
    await browser.pause(1000);
});

When(/^I verify login (.*) is enabled$/, async function (field) {
    let isFieldEnabled = false;
    switch (field.toLowerCase()) {
        case 'email':
            isFieldEnabled = await loginPage.isLoginEmailEnabled();
            break;
        case 'password':
            isFieldEnabled = await loginPage.isLoginPasswordEnabled();
            break;
        case 'button':
            isFieldEnabled = await loginPage.isLoginButtonEnabled();
            break;        
        default:
            break;
    }
    expect(isFieldEnabled, `Login ${field} is NOT enabled`).to.be.true;
    
});