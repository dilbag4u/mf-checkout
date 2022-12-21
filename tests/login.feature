Feature: login functionality

Scenario: test login -registered user
    Given I am on the checkout website
    When I login with registered user
    Then I logged in successfully

Scenario: verify stay signed in checkbox
 Given I am on the checkout website
 When I go to password field
 Then I see stay signed in checbox checked

#   Scenario: test login
#     Given I am on the website
#     When I verify title
#     Then Title should be correct
#     Then I am on 4th page
    