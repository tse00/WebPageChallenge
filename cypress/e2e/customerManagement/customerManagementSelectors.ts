export const customerManagementSelectors = {
  actions: {
    addCustomer: "[ng-click='addCust()']",
    firstNameInputField: "[ng-model='fName']",
    LastNameInputField: "[ng-model='lName']",
    postCodeInputField: "[ng-model='postCd']",
    addCustomerSubmitButton: "button[type='submit']",
    customersTab: "[ng-click='showCust()']",
    searchCustomersField: "[ng-model='searchCustomer']",
    customersDataTableField: ".ng-binding",
    deleteCustomerButton: "[ng-click='deleteCust(cust)']",
  },
};
