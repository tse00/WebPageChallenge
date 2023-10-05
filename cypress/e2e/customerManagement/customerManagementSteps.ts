import { When, Then } from "@badeball/cypress-cucumber-preprocessor";
import { customerManagementSelectors } from "./customerManagementSelectors";

When("I click on add customer", () => {
  cy.get(customerManagementSelectors.actions.addCustomer).click();
});

When(
  "I add the first name {string}, last name {string} and post code {string}",
  (firstName: string, lastName: string, postCode: string) => {
    cy.get(customerManagementSelectors.actions.firstNameInputField).type(
      firstName,
    );
    cy.get(customerManagementSelectors.actions.LastNameInputField).type(
      lastName,
    );
    cy.get(customerManagementSelectors.actions.postCodeInputField).type(
      postCode,
    );
  },
);

When("I submit the new customer data and validate successful message", () => {
  const stub = cy.stub();
  cy.on("window:alert", stub);
  cy.get(customerManagementSelectors.actions.addCustomerSubmitButton)
    .click()
    .then(() => {
      expect(stub.getCall(0)).to.be.calledWithMatch(
        "Customer added successfully with customer id",
      );
    });
});

When("I click on the customer tab", () => {
  cy.get(customerManagementSelectors.actions.customersTab).click();
});

Then(
  "I search for the customer name {string} on the search bar",
  (name: string) => {
    cy.get(customerManagementSelectors.actions.searchCustomersField).type(name);
  },
);

Then(
  "I see the customer with the first name {string}, last name {string} and post code {string}",
  (firstName: string, lastName: string, postCode) => {
    cy.get(customerManagementSelectors.actions.customersDataTableField)
      .eq(0)
      .should("have.text", firstName);
    cy.get(customerManagementSelectors.actions.customersDataTableField)
      .eq(1)
      .should("have.text", lastName);
    cy.get(customerManagementSelectors.actions.customersDataTableField)
      .eq(2)
      .should("have.text", postCode);
  },
);

Then("I delete the new added customer", () => {
  cy.get(customerManagementSelectors.actions.deleteCustomerButton).click();
});
Then("I validate new added customer does not exist", () => {
  cy.get(customerManagementSelectors.actions.customersDataTableField).should(
    "not.exist",
  );
});

When("I submit the new customer data", () => {
  cy.get(customerManagementSelectors.actions.addCustomerSubmitButton).click();
});

Then(
  "I see an alert message when an input field was left empty",
  (firstName: string, lastName: string, postCode: string) => {
    if (firstName === "") {
      cy.get(customerManagementSelectors.actions.firstNameInputField)
        .invoke("prop", "validationMessage")
        .should("equal", "Please fill in this field.");
    }

    if (lastName === "") {
      cy.get(customerManagementSelectors.actions.LastNameInputField)
        .invoke("prop", "validationMessage")
        .should("equal", "Please fill in this field.");
    }

    if (postCode === "") {
      cy.get(customerManagementSelectors.actions.postCodeInputField)
        .invoke("prop", "validationMessage")
        .should("equal", "Please fill in this field.");
    }
  },
);
