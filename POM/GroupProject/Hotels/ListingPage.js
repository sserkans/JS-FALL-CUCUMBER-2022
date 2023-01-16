const Commands = require("../../Commands");

class ListingPage {

    commands = new Commands();

    //locators

    fiveStarRatingLocator = '//span[text()="5"]';             
    sortByDropDownLocator = '//select[@id="sort-filter-dropdown-sort"]';
    sortByRecommendLocator = '//option[text()="Recommended"]';
    sortByPriceLocator = '//option[@value="PRICE_LOW_TO_HIGH"]'; //option[text()="Price"]';
    sortByDistanceLocator = '//option[contains(text(),"Distance from")]';
    sortByGuestRatingLocator = '//option[text()="Guest rating + our picks"]';
    sortByOurPicksLocator = '//option[text()="Price + our picks"]';
    sortByStarRatingLocator = '//option[text()="Star rating"]';

    allPrices = '//div[contains(text() , "The price is")]';

    fiveStarLocator = '//span[contains(text() , "5.0 out")]';

    //select[@id="sort-filter-dropdown-sort"]//option[@aria-selected="true"]


    // functions

    async clickFiveStarRating(){
        await this.commands.clickWebElement(this.fiveStarRatingLocator);
    }

    async clickDropDown(){
        await this.commands.clickWebElement(this.sortByDropDownLocator);
    }

   async selectPriceFromDropDown(option){
        await this.commands.selectDataInDropdown(this.sortByDropDownLocator, option)
    }


    async selectFromDropDown(option){
        switch (option) {
            case 'Recommended':
                    await this.commands.selectDataInDropdown(this.sortByDropDownLocator, option);
                    break;  
            case 'Price':
                    await this.commands.selectDataInDropdown(this.sortByDropDownLocator, option);
                    break;
            case 'Distance from':
                    await this.commands.selectDataInDropdown(this.sortByDropDownLocator, option);
                    break;
            case 'Star rating':
                    await this.commands.selectDataInDropdown(this.sortByDropDownLocator, option);
                    break;
            case 'Guest rating + our picks':
                    await this.commands.selectDataInDropdown(this.sortByDropDownLocator, option);
                    break;
            case 'Price + our picks':
                    await this.commands.selectDataInDropdown(this.sortByDropDownLocator, option);
                    break;        
            default:
                    break;
        }
    }


    async getAllPrices(){

        const allPriceElements = await this.commands.findAllWebElement(this.allPrices)
        console.log(allPriceElements);
        const Prices = [];
        
        for(const priceElement of allPriceElements){
            let text = await priceElement.getText()
            Prices.push(Number(text.slice(14)))
         }
         console.log(`prices ---> ${Prices}`)
         return Prices;
        }
    
    
    async isPricesInOrder(pricesArray){
        let isArrayInExpectedOrder = true;
        for (let i=0 ; i < pricesArray.length-1 ; i++) {
            if (pricesArray[i] > pricesArray[i+1]) {
                isArrayInExpectedOrder = false;
                break;
            }
        }
        return isArrayInExpectedOrder;
    }

    async getAllFiveStar(){
        const allFiveStarHotelsElements = await this.commands.findAllWebElement(this.fiveStarLocator);
        const allFiveStarHotels = [];

        for(const starElement of allFiveStarHotelsElements){
            let star = await this.commands.getTextOfWebElement(starElement);
            allFiveStarHotels.push(star.substring(0,1));
        }
        console.log(`5stars ---> ${allFiveStarHotels}`)
    
        return allFiveStarHotels;
     
    }
    
    async isAllFiveStar(array){
        const allFive = (star) => star = 5;
        return array.every(allFive);
    }



    


    


}
module.exports = ListingPage;