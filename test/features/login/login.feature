Feature: To test the login functionality in "ActiTime"

   @valid_login @login
   Scenario Outline: The one where user logs in using valid credentials
      Given Open the actitime application
      Then I expect Login page is displayed
      When I enter the valid Username and password
      Then I expect home page should be Displayed
