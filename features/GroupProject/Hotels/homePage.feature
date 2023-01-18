Feature: Hotels

Background: 
    Given I am on hotels

@TC-24
Scenario: Verify error is displayed when user submits the empty feedback form
    When I click on Sign In 
    When I click Feedback 
    When I click Submit button
    Then I verify error message is displayed
    Then I verify star boxes section is in a red dotted box

@TC-30
Scenario: Verify invalid phone number error
    When I scroll to “Get the app“ button
    When I enter '0000000000' in Phone number
    When I click on “Get the app“ button
    Then I verify error is displayed

@TC-25
Scenario: Verify user can submit feedback after completing the feedback form
    When I click on Sign In
    When I click Feedback
    When I select 5 star rating
    When I enter comment as 'Very good experience'
    When I select Unsure option for “How likely are you to return to Hotels.com”
    When I select 'Yes' for “Prior to this visit, have you ever booked on Hotels.com”
    When I select 'No' for ”Did you accomplish what you wanted to do on this page”
    Then I click Submit button
    Then I verify thank you message is displayed

@TC-28
Scenario: Verify Child-age dropdowns are same as number of Children selected
    When I click travelers
    When I select Children as 2
    Then I verify Children-age dropdown are 2
    Then I verify Plus-button is enabled
    Then I verify minus-button is enabled
    When I select “Children” as 6
    Then I verify Children-age dropdown are 6
    Then I verify Plus button is disabled
    Then I verify minus-button is enabled
    When I select “Children” as 0
    Then I verify Children-age dropdown is NOT displayed
    Then I verify Plus button is enabled
    Then I verify minus-button is disabled

@TC-18
Scenario: Verify user can update number of guests on Home page
    When I click travelers
    When I select Adults as 6
    When I select Children as 3
    When I select first child age: 4
    When I select second child age: 3
    When I select third child age: 7
    Then I click done
    Then I verify total number of guests in sum of adults and children as same as selected on step 3 and 4

@TC-17
Scenario: Verify past dates and back button on Current month's calendar is disabled
    When I click on dates calendar
    Then I verify back button on current month is disabled
    Then I verify past dates are disabled



        


