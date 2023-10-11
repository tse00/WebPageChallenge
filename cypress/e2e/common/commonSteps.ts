import { Given } from "@badeball/cypress-cucumber-preprocessor";
import { commonSelectors } from "./commonSelectors";

Given("I navigate to the login page", () => {
  // visit url configured under cypress.config.ts
  cy.visit("/");
  cy.get(".mainhdr").should("be.visible");
  cy.get("[ng-click='home()']").should("be.visible");
});
Given("I login as a bank manager", () => {
  cy.get(commonSelectors.login.bankManagerLoginButton).click();
});
