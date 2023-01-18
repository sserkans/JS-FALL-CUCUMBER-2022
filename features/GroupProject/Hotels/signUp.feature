Feature: Hotels

Background: 
    Given I am on hotels

@TC-20
Scenario: Verify TermsAndConditions link and PrivacyStatements link open correct page on new tab
    When I click on Sign In 
    When I click on Sign Up link
    When I click “Terms and Conditions” link
    Then I verify “Terms and Conditions” page opens in new tab
    Then I verify “Last revised“ date format
    When I click “Privacy Statement” link
    Then I verify “Privacy Statement” page opens in new tab
    Then I verify “Last Updated“ date format

@TC-22
Scenario: Verify error message for invalid data in SignUp form
    When I click on Sign In 
    When I click on Sign Up link
    When I enter '#@###' as email address
    Then I verify email error is displayed
    When I enter '!@' as first name
    Then I verify first name error is displayed
    When I enter '#&^*' as last name
    Then I verify last name error is displayed
    When I enter 1234 as Password 
    Then I verify Keep me signed in checkbox is displayed and enabled
    Then I verify Continue button is displayed but NOT enabled

@TC-32
Scenario Outline: Verify password strength bar and messages
    When I click on Sign In 
    When I click on Sign Up link
    When I enter 'user@test.com' as email address
    And I enter 'fUser' as first name
    And I enter 'lUser' as last name
    And I enter <password> as Password
    Then I verify Password strength message is <strengthMsg>
    Then I verify Password strength bar is <strengthBar> filled

    Examples:
        | password     | strengthBar | strengthMsg |
        | abcd         | not         | Weak        |
        | abcd@123     | half        | Weak        |
        | abcd@12324   | almost      | Strong      |
        | abcd@12@pl@2 | completely  | Very Strong |

@TC-33
Scenario Outline: Verify password strength bar and messages
    When I click on Sign In 
    When I click on Sign Up link
    When I enter 'user@test.com' as email address
    And I enter 'fUser' as first name
    And I enter 'lUser' as last name
    And I enter <password> as Password
    Then I verify <msg1> message1 is displayed
    And I verify <msg2> message2 is displayed

    Examples:
        | password | msg1                                | msg2                             |
        | abcd     | Includes 8-64 characters            | Combines letters and numbers     |
        | abcd@123 | Add more words that are less common | Avoid common character sequences |
