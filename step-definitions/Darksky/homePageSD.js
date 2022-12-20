// const { Given, Then, When } = require("@wdio/cucumber-framework");
// const { expect } = require("chai");
// const HomePage = require("../../POM/Darksky/HomePage");

// const homePage = new HomePage();

// Given(/^I am on darksky$/, async function () {
//     await browser.url('https://www.darksky.net');  
//     await browser.pause(3000);  
// });

// When(/^I type (.+) in the searchbox$/, async function(city){
//     await homePage.enterZipCode(city);
//     await homePage.clickSearch();
//     await browser.pause(3000);
// })

// When(/^I select (.+) from unit-dropdown$/, async function(unit){
//      await homePage.changeUnit(unit);
//      await browser.pause(3000); 
// })

// When(/^I get current temp value$/, async function(){
//     await homePage.currentTemp();
//     await browser.pause(3000); 
// })


// Then(/^I verify there are 12-data-points with 2 hours gap$/, async function (){
//     const timeLine = await homePage.getAllTimelineElements()
//     const expectedTimeLine = await homePage.expectedTimelines()
//     expect(timeLine, 'Timeline is not as expected').to.eql(expectedTimeLine)
// });

// // Then(/^I verify feelsLikeTempValue is in between lowTempValue and highTempValue$/, async function (){
// //     const result = await homePage.verifyFeelTempBetweenLowAndHigh();
// //     expect(result, 'Feels like value is not in between Low and High Temp Value').to.be.true;
// // });



// Then(/^I verify temp conversion is correct$/, async function (){  
//     //const result1 = await homePage.currentTemp();
//     //console.log(`result 1 --> ${result1}`);
//     //const result2 = await homePage.changeUnit();
//     //console.log(`result 2 --> ${result2}`);
//     expect(await homePage.currentTemp(), 'Temp value in deg-Celsius is NOT as expected').to.equal(await homePage.currentTemp2());
// });