Feature: To test the login functionality in "ActiTime"

   @valid_login @login @e2e
   Scenario Outline: The one where user logs in using valid credentials
      Given Open the actitime application
      Then I expect login page is displayed
      When I enter the valid username and password
      Then I expect home page should be displayed
