Feature: To handle "dropdown and checkbox"

    @dropdown_and_checkbox @e2e
    Scenario Outline: input and key handle
        Given Open the facebook page
        Then I expect Login Page is displayed
        When I click Create new account button
        Then I expect signup page should be displayed
        When I select dob on signup page
        Then I expect date matched with enter date
        When I check female checkbox in signup page
        Then I expected to female is selected
