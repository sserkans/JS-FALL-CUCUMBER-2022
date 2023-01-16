const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HomePage = require("../../../POM/GroupProject/Hotels/HomePage");
const SignUp = require("../../../POM/GroupProject/Hotels/SignUp");

const signup = new SignUp();
const homepage = new HomePage();


Given(/^I am on hotels$/, async function(){
    await browser.url('https://www.hotels.com')
    await browser.pause(3000);
})

When(/^I click on Sign In$/, async function(){
    await homepage.clickSignIn();
    await browser.pause(3000);
})

When(/^I click on Sign Up link$/, async function(){
    await homepage.clickSignUp();
    await browser.pause(3000);
})

When(/^I enter '(.*)' as email address$/, async function(email){
    await signup.enterEmail(email);
    await browser.pause(3000);
})

Then(/^I verify email error is displayed$/, async function(){
    await signup.isMailErrorDisplayed();
    await browser.pause(3000);
})

When(/^I enter '(.*)' as first name$/, async function(name){
    await signup.enterFirstName(name)
    await browser.pause(3000);
})

Then(/^I verify first name error is displayed$/, async function(){
    await signup.isNameErrorDisplayed();
    await browser.pause(3000);
})

When(/^I enter '(.*)' as last name$/, async function(lastName){
    await signup.enterLastName(lastName)
    await browser.pause(3000);
})

Then(/^I verify last name error is displayed$/, async function(){
    await signup.isLastNameErrorDisplayed()
    await browser.pause(3000);
})

When(/^I enter (.*) as Password$/, async function(pwd){
    await signup.enterPassword(pwd);
    await browser.pause(3000);
})

Then(/^I verify Keep me signed in checkbox is displayed and enabled$/, async function(){
    await signup.isCheckboxDisplayed();
    await signup.isCheckboxEnabled();
    await browser.pause(3000);
})

Then(/^I verify Continue button is displayed but NOT enabled$/, async function(){
   await signup.isContinueDisabled();
   await signup.isContinueDisplayed();
    await browser.pause(3000);
})

When(/^I click “Terms and Conditions” link$/, async function(){
    await signup.clickTerms();
    await browser.pause(3000);
})

Then(/^I verify “Terms and Conditions” page opens in new tab$/, async function(){
    const allHandles =  await signup.isNewTab();
    expect(allHandles.length, ' ').to.equal(2);
    await browser.pause(3000);
})

Then(/^I verify “Last revised“ date format$/, async function(){
    await signup.switchToTermsPage();
    const date = await signup.isTermsDateFormatExpected();
    expect(date,'').to.be.true;
    await browser.pause(3000);
})

When(/^I click “Privacy Statement” link$/, async function(){
    await signup.clickPrivacy();
    await browser.pause(3000);
})

Then(/^I verify “Privacy Statement” page opens in new tab$/, async function(){
   const allHandles =  await signup.isNewTab();
   expect(allHandles.length, '').to.equal(3);
   await browser.pause(3000);
})

Then(/^I verify “Last Updated“ date format$/, async function(){
    await signup.switchToPrivacyPage();
   const date =  await signup.isPrivacyDateFormatExpected();
   expect(date, '').to.be.true;
    await browser.pause(3000);
})


Then(/^I verify Password strength message is (.*)$/, async function(strengthMsg){
    const message = await signup.isStrengthMsg();
    expect(message, '').to.equal(strengthMsg);
    await browser.pause(3000);
})

Then(/^I verify Password strength bar is (.*) filled$/, async function(strengthBar){
    const message = await signup.isStrengthBar();
    expect(message, '').to.equal(strengthBar);
    await browser.pause(3000);
})


Then(/^I verify (.*) message1 is displayed$/, async function(msg1){
    const message = await signup.isMsg1();
    //expect(message, '').to.equal(msg1);
})

Then(/^I verify (.*) message2 is displayed$/, async function(msg2){
    const message = await signup.isMsg2();
    //expect(message, '').to.equal(msg2);
})



