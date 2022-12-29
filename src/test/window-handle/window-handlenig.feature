Feature: To handle window handeling in web

    @window_handles @e2e
    Scenario Outline: Handle the multiple window
        Given Open the actitime Application
        When I click on actiTIME Inc link on login page
        And I switch to login page
        Then I expect login page is displayed
        When I enter the valid username and password
        Then I expect home page should be displayed
        And I click second top menu button prevent panels hiding on home page
        And I click on Integration with actiPLANS in prevent panels page
        When I switch to the home page
        Then I expect home page page is displayed
