const Commands = require('../../Commands');
const moment = require("moment");

class HomePage {

    commands = new Commands();

    //Locators

    signInLinkLocator = '//button[text() = "Sign in"]';
    signInButtonLocator ='//div[@class="actions"]//a[text()="Sign in"]'
    singUpButtonLocator = '//a[text()="Sign up, it’s free"]';
    feedbackLocator = '//a[text()="Feedback"]';
    submitLocator = '//button[@id="submit-button"]';
    errorMessageLocator = '//div[@id="validation_header"]';
    redDottedBoxLocator = '//fieldset[@id="required_box_page_rating"]';
    getTheAppLocator = '//button[text()="Get the app"]';
    phoneNumberLocator = '//input[@id="phoneNumber"]';
    phoneNumberErrorLocator = '//div[@id="phoneNumber-error"]';
    goingToLocator = '//button[@aria-label="Going to"]';
    calendarOpenLocator = '//button[@data-stid="open-date-picker"]';
    calendarDoneButtonLocator = '//button[text()="Done" and @data-stid]';
    searchButtonLocator = '//button[@id="search_button"]';
    goingToTypeLocator = '//input[@id="destination_form_field"]';
    allDatesLocator_starts = '//button[starts-with(@aria-label, "'
    allDatesLocator_ends = '")]'
    nextCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[2]';
    prevCalendarButtonLocator = '(//button[@data-stid="date-picker-paging"])[1]';
    leftSideCalendarHeaderLocator = '(//div[@class="uitk-date-picker-month"])[1]//h2';
    autoSuggestionsLocator = '//div[@class="truncate"]//strong';
    travelersLocator = '//button[@data-stid="open-room-picker"]';
    childrenLocator = '//input[@id="traveler_selector_children_step_input-0"]';
    adultLocator = '//input[@id="traveler_selector_adult_step_input-0"]';
    minusLocator = '//span[@class="uitk-step-input-button"]/following::*[@aria-label="Decrease the number of children in room 1"]';
    childPlusLocator = '//span[@class="uitk-step-input-button"]/following::*[@aria-label="Increase the number of children in room 1"]';
    adultPlusLocator = '//span[@class="uitk-step-input-button"]/following::*[@aria-label="Increase the number of adults in room 1"]';
    oneStarLocator = '//label[@for="page-rating-1"]';
    twoStarLocator ='//label[@for="page-rating-2"]';
    threeStarLocator ='//label[@for="page-rating-3"]';
    fourStarLocator ='//label[@for="page-rating-4"]';
    fiveStarLocator ='//label[@for="page-rating-5"]';
    commentAreaLocator = '//textarea[@id="verbatim"]';
    returnLocator = '//select[@name="will-you-return"]';
    highLikeLocator = '//option[@value="Highly likely"]';
    someLikeLocator = '//option[@value="Somewhat likely"]';
    unsureLocator = '//option[@value="Unsure"]';
    someUnLikeLocator = '//option[@value="Somewhat unlikely"]';
    highUnlikeLocator = '//option[@value="Highly unlikely"]';
    priorVisitYesLocator = '//label[@for="booked-here-before-yes"]';
    priorVisitNoLocator  = '//label[@for="booked-here-before-no"]';
    accomplishYesLocator = '//label[@for="were-you-successful-yes"]';
    accomplishNoLocator = '//label[@for="were-you-successful-no"]';
    thankYouLocator = '//div[@id="thank-you"]';
    childThreeLocator = '//select[@id="age-traveler_selector_children_age_selector-0-2"]';
    childTwoLocator = '//select[@id="age-traveler_selector_children_age_selector-0-1"]';
    childOneLocator = '//select[@id="age-traveler_selector_children_age_selector-0-0"]';
    childOneAge = '//select[@id="age-traveler_selector_children_age_selector-0-0"]//option[@value="4"]';
    doneButtonLocator = '//button[@id="traveler_selector_done_button"]';
    travelerTextLocator = '//input[@value="9 travelers, 1 room"]';
    monthLocator = '//button[starts-with(@aria-label, "Jan")]';
    disablePastDatesLocator = '//button[starts-with(@aria-label, "Jan") and @disabled]';

    //Functions
    async clickPlusChildren(num){
        let count = 0 ;
        while(count < num){
            await this.commands.clickWebElement(this.childPlusLocator);
            count++
        }
    }
    
    async clickPlusAdult(num){
        // const webElement  = await this.commands.findWebElement(this.adultLocator);
        // let count = webElement.getAttribute("value");
        //console.log(count);
        let count = 2;
        while(count < num){
            await this.commands.clickWebElement(this.adultPlusLocator);
            count++
        }
    }

    async selectChildOneAge(){
        await this.commands.clickWebElement(this.childOneLocator);
        await this.commands.selectDataInDropdown(this.childOneLocator, 4);
    }

    async selectChildTwoAge(){
        await this.commands.clickWebElement(this.childTwoLocator);
        await this.commands.selectDataInDropdown(this.childTwoLocator, 3);
    }

    async selectChildThreeAge(){
        await this.commands.clickWebElement(this.childThreeLocator);
        await this.commands.selectDataInDropdown(this.childThreeLocator, 7);
    }

    async clickDoneButton(){
        await this.commands.clickWebElement(this.doneButtonLocator);
    }

    async travelerNumber(){
        const text = await this.commands.getAttributeWebElement(this.travelerTextLocator, 'value');
        console.log(`text ---> ${text}`);
        return Number(text.substring(0,1));
    }

    async clickTraveler(){
        await this.commands.clickWebElement(this.travelersLocator);
    }

    async clickSignIn (){
        await this.commands.clickWebElement(this.signInLinkLocator);
    }

    async clickSignUp(){
        await this.commands.clickWebElement(this.singUpButtonLocator);
    }

    async clickFeedback (){
        await this.commands.clickWebElement(this.feedbackLocator);
    }

    async switchToFeedback(){
        const allHandles = await browser.getWindowHandles();
        for (const handle of allHandles) {
            await browser.switchToWindow(handle);
            const title = await browser.getTitle();
            if (title.startsWith('Direct')) {
                await browser.switchToWindow(handle);
                break;
            }
        }
    }

        async selectStarRating(rating) {
        switch (rating) {
            case '1':
                await this.commands.clickWebElement(this.oneStarLocator);
                break;  
            case '2':
                await this.commands.clickWebElement(this.twoStarLocator);
                break;
            case '3':
                await this.commands.clickWebElement(this.threeStarLocator);
                break;
            case '4':
                await this.commands.clickWebElement(this.fourStarLocator);
                break;
            case '5':
                await this.commands.clickWebElement(this.fiveStarLocator);
                break;        
            default:
                break;
        }
    }

    async enterComment(comment){
        await this.commands.typeInWebElement(this.commentAreaLocator, comment);
    }

    async howLikelyReturn(option){
        await this.commands.clickWebElement(this.returnLocator);
        
        switch (option) {
            case 'Highly likely':
                    await this.commands.selectDataInDropdown(this.returnLocator, option);
                    break;  
            case 'Somewhat likely':
                    await this.commands.selectDataInDropdown(this.returnLocator, option);
                    break;
            case 'Unsure':
                    await this.commands.selectDataInDropdown(this.returnLocator, option);
                    break;
            case 'Somewhat unlikely':
                    await this.commands.selectDataInDropdown(this.returnLocator, option);
                    break;
            case 'Highly unlikely':
                    await this.commands.selectDataInDropdown(this.returnLocator, option);
                    break;        
            default:
                    break;
        }


    }

    async priorVisitYesOrNo(answer) {
        switch (answer) {
            case 'Yes':
                await this.commands.clickWebElement(this.priorVisitYesLocator);
                break;  
            case 'No':
                await this.commands.clickWebElement(this.priorVisitNoLocator);
                break;   
            default:
                break;
        }
    }

    async accomplishYesOrNo(answer) {
        switch (answer) {
            case 'Yes':
                await this.commands.clickWebElement(this.accomplishYesLocator);
                break;  
            case 'No':
                await this.commands.clickWebElement(this.accomplishNoLocator);
                break;   
            default:
                break;
        }
    }

    async clickSubmit(){
        await this.commands.clickWebElement(this.submitLocator);
    }

    async isThanksMessageDisplayed(){
        return await this.commands.isWebElementDisplayed(this.thankYouLocator);
    }

    async isLoginErrorDisplayed(){
        return await this.commands.isWebElementDisplayed(this.errorMessageLocator);
    }

    async isRedDottedBoxDisplayed(){
        return await this.commands.isWebElementDisplayed(this.redDottedBoxLocator);
    }
    
    async scrollToApp(){
        const getAppButton = await $('//button[text()="Get the app"]');
        await getAppButton.scrollIntoView();
    }

    async enterPhoneNumber(phoneNumber){
        await this.commands.typeInWebElement(this.phoneNumberLocator, phoneNumber);
    }

    async clickGetTheApp(){
        await this.commands.clickWebElement(this.getTheAppLocator);
    }

    async isPhoneNumberErrorDisplayed(){
        await this.commands.isWebElementDisplayed(this.phoneNumberErrorLocator);
    }

    async clickPhoneNumber(){
        await this.commands.clickWebElement(this.phoneNumberLocator);
    }

    async clickSignInButton(){
        await this.commands.clickWebElement(this.signInButtonLocator);
    }

    async clickGoingTo(){
        await this.commands.clickWebElement(this.goingToLocator);
    }

    async enterDestination(destination) {
        await this.commands.typeInWebElement(this.goingToTypeLocator, destination);
    }

    async selectFromSuggestedDestinations(userChoice) {
        await this.commands.selectFromAutoSuggestion(this.autoSuggestionsLocator, userChoice);
   }

    async openCalendar(){
        await this.commands.clickWebElement(this.calendarOpenLocator);
    }

    async selectCheckInDate(date) {
        const dateArray = date.split('-');
        await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
        const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
        await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
    }

    async selectCheckOutDate(date) {
        const dateArray = date.split('-');
        await this.goToMonth(`${dateArray[0]} ${dateArray[2]}`);
        const allDatesLocator = this.allDatesLocator_starts + date.substring(0,3) + this.allDatesLocator_ends;
        await this.commands.selectDateInCalendar(allDatesLocator, dateArray[1]);
    }

    async goToMonth(monthYear) {
        let count = 1;
        while(count<=12) {
            const monthHeader = await this.commands.getTextOfWebElement(this.leftSideCalendarHeaderLocator);
            console.log(`\n monthHeader -> ${monthHeader} \n`);
            if (monthHeader.localeCompare(monthYear) === 0) {
                break;
            }
            await this.commands.clickWebElement(this.nextCalendarButtonLocator);
            await browser.pause(1000);
            count++;
        }
    }


    async clickDoneOnCalendar() {
        await this.commands.clickWebElement(this.calendarDoneButtonLocator);
    }

    async clickSearchButton(){
        await this.commands.clickWebElement(this.searchButtonLocator);
    }


    async isPastDatesDisable(){
        const allDisablePastDates = await this.commands.findAllWebElement(this.disablePastDatesLocator);

        console.log(`dates--->${allDisablePastDates}}`);

        // const currentDate = moment().date();
        
        // let allPastDatesDisabled = true;
        // for (let i=1 ; i <= currentDate ; i++) {
        //     if (await dates[i-1].getAttribute('disabled') !== 'true') {
        //         allPastDatesDisabled = false;
        //         break;
        //     }
        // }
        return allDisablePastDates;
    }

    async isPrevMonthButtonDisable(){
        await this.commands.isWebElementEnabled(this.prevCalendarButtonLocator);
    }
    

}
module.exports = HomePage;