const { Given, Then, When } = require("@wdio/cucumber-framework");
const { expect } = require("chai");
const CodeTest = require("../../POM/CodeTest/codeTest");

const codeTest = new CodeTest();


Given(/^I am on hotels$/, async function () {
     await browser.url('https://www.hotels.com');  
     await browser.pause(3000);  
});

When(/^I change language to <languageOption>$/, async function(languageOption){
    await codeTest.clickLang();
    await codeTest.changeLang(languageOption);
    await codeTest.clickSave();
})

Then(/^I verify language got changed to <language>$/, async function(language){
    
    
})




When(/^I select number of adults in Room 1 as 1$/, async function(){
    await codeTest.clickTravelers();
    await codeTest.clickMinus();
    await browser.pause(3000);
})

Then(/^I verify the minus button for adults is disabled$/, async function(){
    const result = await codeTest.isMinusButtonEnabled();
    expect(result, 'the minus button for adults is disabled').to.be.true
})

Then(/^I verify the plus button for adults is enabled$/, async function(){
    const result = await codeTest.isPlusButtonEnabled();
    expect(result,'the plus button for adults is enabled').to.be.false

})

When(/^I select number of adults in Room 1 as 14$/, async function(){
    await codeTest.clickPlus();  
})

Then(/^I verify the plus button for adults is disabled$/, async function(){
    const result = await codeTest.isPlusButtonEnabled();
    expect(result,'the plus button for adults is enabled').to.be.true
})

Then(/^I verify the minus button for adults is enabled$/, async function(){
    const result = await codeTest.isPlusButtonEnabled();
    expect(result, 'the minus button for adults is disabled').to.be.false
    
})




