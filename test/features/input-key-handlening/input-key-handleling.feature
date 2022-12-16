 Feature: To handle input and key in "ActiTime"
    
    @input_keys
    Scenario Outline: input and key handle 
    Given Open the actitime application in maximise window
    Then I expect login page is displayed
    When I enter the username
    And I clear the un input feild
    Then I expect input feild is empty
    And I enter the username slowly
