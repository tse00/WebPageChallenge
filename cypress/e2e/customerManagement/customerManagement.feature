@main
Feature: Manage customers as a bank manager

  Background: Customer login
    Given I navigate to the login page
    And I login as a bank manager

  Scenario Outline: Validate creation and deletion of new customer
    When I click on add customer
    And I add the first name "<firstName>", last name "<lastName>" and post code "<postCode>"
    And I submit the new customer data
    And I click on the customer tab
    Then I see the customer with the first name "<firstName>", last name "<lastName>" and post code "<postCode>"
    And I delete the new added customer
    And I validate new added customer does not exist
    Examples:
      | firstName | lastName | postCode |
      | Alfred    | Botha    | 123456   |
      | 123Rob    | 456      | Ana      |
