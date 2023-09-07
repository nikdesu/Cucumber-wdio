Feature: The Internet Guinea Pig Website

  Scenario Outline: User should see error message

    Given User is located on the login page of saucedemo website
    When User click on login button
    Then User should see <message> error message

    Examples:
      | username | password             | message                                 |
      | foobar   | barfoo               | Epic sadface: Username is required      |