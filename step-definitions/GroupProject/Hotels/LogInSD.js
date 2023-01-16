const { Given, Then, When } = require("@wdio/cucumber-framework");
const HomePage = require("../../../POM/GroupProject/Hotels/HomePage");
const LogIn = require("../../../POM/GroupProject/Hotels/LogIn");


const login = new LogIn();

const homepage = new HomePage();

Given(/^I am on hotels$/, async function(){
    await browser.url('https://www.hotels.com')
    await browser.pause(3000);
})

When(/^I click on Sign In button$/, async function(){
    await homepage.clickSignInButton();
})

When(/^I click on Sign In$/, async function(){
    await homepage.clickSignIn();
    await browser.pause(3000);
})

When(/^I enter '(.*)' as email address$/, async function(email){
    await login.enterEmail(email);
    await browser.pause(3000);
})

When(/^I enter '(.*)' as password$/, async function(pwd){
    await login.enterPassword(pwd);
    await browser.pause(3000);
})

When(/^I click on Sign in$/, async function(){
    await login.clickSignInButton();
    await browser.pause(3000);
})

Then(/^I verify error message is displayed$/, async function(){
    await login.isErrorMessageDisplayed();
    await browser.pause(3000);
})