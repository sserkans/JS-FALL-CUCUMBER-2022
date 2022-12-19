// const { Given, When, Then } = require("@wdio/cucumber-framework");
// const HomePage = require("../../POM/Hotels/HomePage");


// const homepage = new HomePage();

// Given(/^I am on hotels$/, async function () {
//     await browser.url('https://www.hotels.com');  
//     await browser.pause(3000);  
// });

// When(/^I open calendar$/, async function () {
//     await homepage.openCalendar();   
//     await browser.pause(3000);
// });

// When(/^I select (.+) as Check-in$/, async function (checkindate) {
//     await homepage.selectCheckInDate(checkindate);  
//     await browser.pause(3000); 
// });

// When(/^I select (.+) as Check-out$/, async function (checkoutdate) {
//     await homepage.selectCheckOutDate(checkoutdate); 
//     await browser.pause(3000);  
// });

// When(/^I type (.+) in destination$/, async function (destination) {
//     await homepage.enterDestination(destination)
//     await browser.pause(3000);  
// });

// Then(/^I click done button$/, async function () {
//     await homepage.clickDoneOnCalendar();   
// });

// Then(/^I select (.+) from auto-suggestions$/, async function (destination) {
//     await homepage.selectFromSuggestedDestinations(destination)  
// });
