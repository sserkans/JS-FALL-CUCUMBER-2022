Feature: Darksky

    Background: 
        Given I am on darksky
        
    Scenario: Verify there are 12-data-points with 2-hours gap
        Then I verify there are 12-data-points with 2 hours gap

    @feelslike
    Scenario: Verify temperature from DarkSky
        When I type istanbul in the searchbox
        Then I verify feelsLikeTempValue is in between lowTempValue and highTempValue
        
    @temp
    Scenario: Verify temp values are correct when user changes the temp-unit
        When I get current temp value
        When I select ˚C, mph from unit-dropdown
        Then I verify temp conversion is correct

