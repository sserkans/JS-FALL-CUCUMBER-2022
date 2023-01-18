// const { Given, Then, When } = require("@wdio/cucumber-framework");
// const { expect } = require("chai");
// const CodeTest = require("../../POM/CodeTest/codeTest");

// const codeTest = new CodeTest();


// Given(/^I am on hotels$/, async function () {
//      await browser.url('https://www.hotels.com');  
     
     
// });

// When(/^I change language to (.+)$/, async function(languageOption){
//     await codeTest.clickLang();
//     await codeTest.changeLang(languageOption);
//     await codeTest.clickSave();
//     await browser.pause(2000);
// })

// Then(/^I verify language got changed to (Español|English)$/, async function(language){
    
//     expect(await codeTest.verifyLang(), 'error').to.be.equal(language)
    
// })


// When(/^I select number of adults in Room 1 as 1$/, async function(){
//     await codeTest.clickTravelers();
//     await browser.pause(1000);
//     await codeTest.clickMinus();
// })

// Then(/^I verify the minus button for adults is disabled$/, async function(){
//     await browser.pause(3000);
//     const result = await codeTest.isMinusButtonEnabled();
//     console.log(`result is ---> ${result}`);
//     expect(result, 'the minus button for adults is disabled').to.be.true;
// })

// Then(/^I verify the plus button for adults is enabled$/, async function(){
//     const result = await codeTest.isPlusButtonEnabled();
//     console.log(`result is ---> ${result}`);
//     expect(result,'the plus button for adults is enabled').to.be.true

// })

// When(/^I select number of adults in Room 1 as 14$/, async function(){
//     await codeTest.clickPlus();  
// })

// Then(/^I verify the plus button for adults is disabled$/, async function(){
//     const result = await codeTest.isPlusButtonEnabled();
//     console.log(`result is ---> ${result}`);
//     expect(result,'the plus button for adults is enabled').to.be.true
// })

// Then(/^I verify the minus button for adults is enabled$/, async function(){
//     const result = await codeTest.isPlusButtonEnabled();
//     console.log(`result is ---> ${result}`);
//     expect(result, 'the minus button for adults is disabled').to.be.true
    
// })




