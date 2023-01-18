const { Given, When, Then} = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HomePage = require("../../../POM/GroupProject/Hotels/HomePage");
const moment = require("moment");


const homepage = new HomePage();

Given(/^I am on hotels$/, async function(){
    await browser.url('https://www.hotels.com')
    await browser.pause(3000);
})

When(/^I click on Sign In$/, async function(){
    await homepage.clickSignIn();
    await browser.pause(3000);
})

When(/^I click Feedback$/, async function(){
    await homepage.clickFeedback();
    await homepage.switchToFeedback();
    await browser.pause(3000);
})

When(/^I select (.*) star rating$/, async function(starRating){
  await homepage.selectStarRating(starRating);
  await browser.pause(3000);
})

When(/^I enter comment as '(.*)'$/, async function(comment){
    await homepage.enterComment(comment);
    await browser.pause(3000);
})

When(/^I select (.*) option for “How likely are you to return to Hotels.com”$/, async function(option){
    await homepage.howLikelyReturn(option)
    await browser.pause(3000);
})

When(/^I select '(.*)' for “Prior to this visit, have you ever booked on Hotels.com”$/, async function(answer){
    await homepage.priorVisitYesOrNo(answer);
    await browser.pause(5000);
})

When(/^I select '(.*)' for ”Did you accomplish what you wanted to do on this page”$/, async function(answer){
    await homepage.accomplishYesOrNo(answer);
    await browser.pause(5000);
})


When(/^I click Submit button$/, async function(){
    await homepage.clickSubmit();
    await browser.pause(3000);
})

Then(/^I verify thank you message is displayed$/, async function(){
    await homepage.isThanksMessageDisplayed();
    await browser.pause(3000);
})


Then(/^I verify error message is displayed$/, async function(){
    await homepage.isLoginErrorDisplayed();
    await browser.pause(3000);
})

Then(/^I verify star boxes section is in a red dotted box$/, async function(){
    await homepage.isRedDottedBoxDisplayed();
    await browser.pause(3000);
})

When(/^I scroll to “Get the app“ button$/, async function(){
    await homepage.scrollToApp();
    await browser.pause(3000);
})

When(/^I enter '(.*)' in Phone number$/, async function(phone){
    await homepage.clickPhoneNumber();
    await homepage.enterPhoneNumber(phone);
    await browser.pause(3000);
})

When(/^I click on “Get the app“ button$/, async function(){
    await homepage.clickGetTheApp();
    await browser.pause(3000);
})

Then(/^I verify error is displayed$/, async function(){
    await homepage.isPhoneNumberErrorDisplayed();
})

When(/^I click on Sign In button$/, async function(){
    await homepage.clickSignInButton();
})

When(/^I click travelers$/, async function(){
    await homepage.clickTraveler();
    await browser.pause(3000);
})

When(/^I select Children as (.*)$/, async function(num){
    await homepage.clickPlusChildren(num);
    await browser.pause(3000);
})

When(/^I select Adults as (.*)$/, async function(num){
    await homepage.clickPlusAdult(num);
    await browser.pause(3000);
})

When(/^I select first child age: 4$/, async function(){
    await homepage.selectChildOneAge();
    await browser.pause(3000);
})

When(/^I select second child age: 3$/, async function(){
    await homepage.selectChildTwoAge();
    await browser.pause(3000);
})

When(/^I select third child age: 7$/, async function(){
    await homepage.selectChildThreeAge();
    await browser.pause(3000);
})

Then(/^I click done$/, async function(){
    await homepage.clickDoneButton();
    await browser.pause(3000);
})

Then(/^I verify total number of guests in sum of adults and children as same as selected on step 3 and 4$/, async function(){
    const num = await homepage.travelerNumber();
    expect(num, '').to.be.equal(9);
})

When(/^I click on dates calendar$/, async function(){
    await homepage.openCalendar();
    await browser.pause(3000);
})

Then(/^I verify past dates are disabled$/, async function(){
    const dates = await homepage.isPastDatesDisable()
    const currentDate = moment().date();
    expect(dates.length, '').to.be.equal(currentDate-1);
    await browser.pause(3000);
})

Then(/^I verify back button on current month is disabled$/, async function(){
    await homepage.isPrevMonthButtonDisable();
})

