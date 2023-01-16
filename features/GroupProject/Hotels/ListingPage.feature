Feature: Hotels

Background: 
    Given I am on hotels

@TC-23
Scenario: Verify filter-by and sort-by functionality works as expected
    When I type Manhattan as a destination
    When I enter February-10-2023 as check-in 
    When I enter February-16-2023 as check-out  
    When I click on search button
    When I click on 5 star from star-rating filter
    When I select Price from sort-by dropdown
    Then I verify all hotels prices are listed in increasing order
    Then I verify all hotels in search results are 5 star-rated as selected





        


