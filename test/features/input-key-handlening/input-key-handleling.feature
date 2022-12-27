Feature: To handle input and key in "ActiTime"

   @input_keys @input_behaviour @e2e
   Scenario Outline: input and key handle
      Given Open the actitime application in maximise window
      Then I expect Login page is displayed
      When I enter the username in login page
      And I clear the username input feild
      Then I expect username input feild is empty
      And I enter the username one by one
