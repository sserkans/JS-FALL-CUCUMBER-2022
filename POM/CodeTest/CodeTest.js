const Commands = require("../Commands");

class CodeTest {

commands = new Commands();

//locators

langLocator = '//div[@class="uitk-layout-flex uitk-layout-flex-gap-two"]'

langDropDownLocator = '//select[@id="language-selector"]';

lLocator = '//div[text() = "List your property" or text()="Anunciar una propiedad"]';

englishLocator = '//option[@value="en_US"]';

spanishLocator = '//option[@value="es_US"]';

saveLocator = '//button[text() = "Save" or text() = "Guardar"]';

travelersLocator = '//button[@data-stid="open-room-picker"]';

plusButtonLocator = '//*[@aria-label="Increase the number of adults in room 1"]';

minusButtonLocator = '//*[@aria-label="Decrease the number of adults in room 1"]';


// functions

async clickLang (){
    await this.commands.clickWebElement(this.langLocator);
}


async clickSave () {
    await this.commands.clickWebElement(this.saveLocator);
}

async changeLang (languageOption) {
    await this.commands.selectDataInDropdown(this.langDropDownLocator, languageOption);
}

async verifyLang () {
    
    const title = await this.commands.getTextOfWebElement(this.lLocator);
  
    let lang = '';
  
        if (title.localeCompare('Anunciar una propiedad') === 0){
            lang = Español;
        }
        else if (title.localeCompare('List your property') === 0){
            lang = English;
        }
   
   return lang;

}

async clickTravelers () {
    await this.commands.clickWebElement(this.travelersLocator);
}

async clickMinus () {
    await this.commands.clickWebElement(this.minusButtonLocator);
}

async clickPlus () {
    let count = 1 ;
    while(count < 14){
        await this.commands.clickWebElement(this.plusButtonLocator);
        count++
    }

}

async isPlusButtonEnabled () {
   return  await this.commands.isWebElementEnabled(this.plusButtonLocator);
}

async isMinusButtonEnabled () {
    return await this.commands.isWebElementEnabled(this.minusButtonLocator);
}




}

module.exports = CodeTest;