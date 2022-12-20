const Commands = require("../Commands");

class CodeTest {

commands = new Commands();

//locators

langLocator = '//div[@class="uitk-layout-flex uitk-layout-flex-gap-two"]';

langDropDownLocator = '//select[@id="language-selector"]';

englishLocator = '//option[@value="en_US"]';

spanishLocator = '//option[@value="es_US"]';

saveLocator = '//button[text() = "Save"]';

travelersLocator = '//button[@data-stid="open-room-picker"]';

plusButtonLocator = '//*[text() = "Increase the number of adults in room 1"]';

minusButtonLocator = '//*[@aria-label="Decrease the number of adults in room 1"]';

// functions

async clickLang (){

    await this.commands.clickWebElement(this.langLocator);
}


async clickSave (){
    await this.commands.clickWebElement(this.clickSave);
}

async changeLang (lang) {

    await this.commands.clickWebElement(this.langDropDownLocator);

    switch (lang) {
        case 'English (United States)':
            await this.commands.clickWebElement(this.englishLocator);
            break;  
        case 'Español (Estados Unidos)':
            await this.commands.clickWebElement(this.spanishLocator);
            break;
    }

}

async verifyLang () {



}

async clickTravelers () {
    await this.commands.clickWebElement(this.travelersLocator);
}

async clickMinus () {
    await this.commands.clickWebElement(this.minusButtonLocator);
}

async clickPlus () {
    let count = 1 ;
    while(count<=13){
        await this.commands.clickWebElement(this.plusButtonLocator);
        count++
    }

}

async isPlusButtonEnabled () {
    await this.commands.isWebElementEnabled(this.plusButtonLocator);
}

async isMinusButtonEnabled () {
    await this.commands.isWebElementEnabled(this.minusButtonLocator);
}



}

module.exports = CodeTest;