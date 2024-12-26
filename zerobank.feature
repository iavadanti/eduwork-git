Feature: Search feature on http://zero.webappsecurity.com/index.html


    As a guest
    I want to be able to search a word in the website

    Scenario: Searching on zerobank
    Given I open the home page
    When I type a word in search bar and I click enter
    Then I see my search result in the website