// const Commands = require("../Commands")
// const moment = require("moment")

// class HomePage {

//     commands = new Commands();

//     //locators

//     searchBarLocator = '//input[@type="text"]';
//     searchButtonLocator = '//img[@alt="Search Button"]'
//     tempValue = '//span[@class="summary swap"]';
//     feelsLikeTempElement = '.feels-like-text';
//     lowTempElement = '.low-temp-text';
//     highTempElement = '.high-temp-text';
//     unitDropdownLocator = '//div[@id="header"]//div[contains(@class,"selectric-units")]//b';
//     degCelMphLocator = '//div[contains(@class, "selectric-open")]//li[starts-with(text(), "˚C,") and contains(text(), "mph")]'
//     degFahMphLocator = '//div[contains(@class, "selectric-open")]//li[starts-with(text(), "˚F,") and contains(text(), "mph")]'
//     degCelKmhLocator = '//div[contains(@class, "selectric-open")]//li[starts-with(text(), "˚C,") and contains(text(), "km/h")]'
//     degCelMsLocator = '//div[contains(@class, "selectric-open")]//li[starts-with(text(), "˚C,") and contains(text(), "m/s")]'
//     timeMachineButton = '//div[@id="timeMachine"]//a';
//     allDataPoints = '//span[starts-with(@class, "hour")]//span';
    
    
//     // functions

//     async enterZipCode(zipcode){
//         await this.commands.typeInWebElement(this.searchBarLocator, zipcode);
//     }

//     async clickSearch(){
//         await this.commands.clickWebElement(this.searchButtonLocator);
//     }

//     async getFeelsLikeTempValue(){
//         return await this.commands.getTextOfWebElement('.feels-like-text');
//     }
 
//     async getLowTempValue(){
//         return  await this.commands.getTextOfWebElement('.low-temp-text');
//     }
 
//     async getHighTempValue(){
//         return await this.commands.getTextOfWebElement('.high-temp-text');
//     }
    
//     async getAllTimelineElements(){
    
//         const allTimeElements = await $$('//span[starts-with(@class, "hour")]//span');
    
//             const allTimeValues = [];
    
//             for (const timeElement of allTimeElements) {
//                 allTimeValues.push(await timeElement.getText());
//             }
//            return allTimeValues;
//     }

//     async expectedTimelines(){
        
//         let expTimeline = ['Now']

//         let newTime = moment().add(2, 'hour');

//         for (let i = 2; i <= 12; i++) {
//             expTimeline.push(newTime.format('ha'));
//             newTime = newTime.add(2, 'hour');
//         }
//         return expTimeline;
//     }

//     async verifyFeelTempBetweenLowAndHigh(){
//         const feelsLikeTemp = await this.commands.getTextOfWebElement(this.feelsLikeTempElement);
//         const feelsLikeValue = feelsLikeTemp.substring(0, (feelsLikeTemp.length-1));
//         const lowTemp = await this.commands.getTextOfWebElement(this.lowTempElement);
//         const lowTempValue = lowTemp.substring(0, (lowTemp.length-1));
//         const highTemp = await this.commands.getTextOfWebElement(this.highTempElement);
//         const highTempValue = highTemp.substring(0, (highTemp.length-1)); 

//         let result = '';

//         if (lowTempValue*1  <= feelsLikeValue*1 && feelsLikeValue*1 <= highTempValue*1 ){
//             //console.log('Feels like value is in between Low and High Temp Value');
//             result = true
//         } else {
//             //console.log('Feels like value is not in between Low and High Temp Value');
//             result = false
//         }

//         return result;

//     }

//     async currentTemp () {
//         const tempText = await this.commands.getTextOfWebElement(this.tempValue);
//         const tempNumber = Number(tempText.split('˚')[0]);
//         const tempCelValue = (tempNumber - 32) * 5/9;
//         return tempCelValue;

//     }

//     async changeUnit (option) {

//         await this.commands.clickWebElement(this.unitDropdownLocator);

//         switch (option) {
//             case '˚F, mph':
//                 await this.commands.clickWebElement(this.degFahMphLocator);
//                 break;  
//             case '˚C, m/s':
//                 await this.commands.clickWebElement(this.degCelMsLocator);
//                 break;
//             case '˚C, km/h':
//                 await this.commands.clickWebElement(this.degCelKmhLocator);
//                 break;
//             case '˚C, mph':
//                 await this.commands.clickWebElement(this.degCelMphLocator);
//                 break;       
//             default:
//                 break;
//         }
//     }

//     async currentTemp2 () {
//         const tempText2 = await this.commands.getTextOfWebElement(this.tempValue);
//         const tempValue2 = Number(tempText2.split('˚')[0]);
//         return tempValue2;
//     }

// }
// module.exports = HomePage;