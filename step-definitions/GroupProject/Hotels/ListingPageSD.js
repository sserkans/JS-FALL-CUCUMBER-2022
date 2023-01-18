const { Given, When, Then } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const HomePage = require("../../../POM/GroupProject/Hotels/HomePage");
const ListingPage = require("../../../POM/GroupProject/Hotels/ListingPage");

const homepage = new HomePage();
const listingPage = new ListingPage();

Given(/^I am on hotels$/, async function(){
    await browser.url('https://www.hotels.com')
    await browser.pause(3000);
})

When(/^I type (.*) as a destination$/, async function(city){
    await homepage.clickGoingTo();
    await homepage.enterDestination(city)
    await homepage.selectFromSuggestedDestinations(city);
    await browser.pause(3000);
})

When(/^I enter (.+) as check-in$/, async function (checkindate) {
    await homepage.openCalendar();
    await homepage.selectCheckInDate(checkindate);  
    await browser.pause(3000); 
});

When(/^I enter (.+) as check-out$/, async function (checkoutdate) {
    await homepage.selectCheckOutDate(checkoutdate);  
    await homepage.clickDoneOnCalendar();
    await browser.pause(3000); 
});

When(/^I click on search button$/, async function(){
    await homepage.clickSearchButton();
    await browser.pause(3000);
})

When(/^I click on 5 star from star-rating filter$/, async function(){
    await listingPage.clickFiveStarRating();
    await browser.pause(3000);
})

When(/^I select (.*) from sort-by dropdown$/, async function(option){
    await listingPage.clickDropDown();
    await listingPage.selectFromDropDown(option);
    await browser.pause(5000);
})

Then(/^I verify all hotels prices are listed in increasing order$/, async function(){
    const allPrices = await listingPage.getAllPrices();
    expect(await listingPage.isPricesInOrder(allPrices), 'Prices are not in increasing order').to.be.true;
    await browser.pause(3000);
})

Then(/^I verify all hotels in search results are 5 star-rated as selected$/, async function(){
    const allStars = await listingPage.getAllFiveStar();
    const allFive = await listingPage.isAllFiveStar(allStars);
    expect(allFive, 'All hotels are not 5 stars').to.be.true;
})

