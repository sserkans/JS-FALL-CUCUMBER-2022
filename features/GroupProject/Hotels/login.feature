Feature: Hotels

Background: 
    Given I am on hotels

@TC-21
Scenario: Verify Verification message for invalid sign in credentials
    When I click on Sign In 
    When I click on Sign In button
    When I enter '1@x.com' as email address
    When I enter '1235567' as password
    When I click on Sign in
    Then I verify error message is displayed

        


