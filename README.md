# Test Automation - Cypress

This repository uses Cypress with the combination of BDD (Cucumber). Cucumber allows QA engineers and developers to write tests in a human-readable format using Gherkin syntax.

Typescript, ESLint and Prettier are also installed and configured in this project to follow the best quality practices and standards.

To install all packages run the following command under the cypress folder:

```bash
npm install
```

## Test folder structure

The tests for each endpoint are organized respectively into folders:

    .
    ├── cypress/e2e/
        ├── common
            ├── commonSelectors.ts
            ├── commonSteps.ts
        ├── customerManagement
            ├── customerManagement.feature
            ├── customerManagementSelectors.ts
            ├── customerManagementSteps.ts


- The feature files contain the Cucumber tests written in Gherkin.
- The step typescript files contain the respective code.
- The selectors typescript files contain the CSS selectors of the webpage.
- The common folder contains steps, which are shared between all feature files.

## Cypress Run Tests

The scripts to run Cypress can be found under:

    .
    ├── cypress
        ├── package.json

### Opens Cypress Launchpad

Select the browser and the feature file containing the tests you want to run.

```bash
npm run cypress:open
```

### Run all tests on the terminal

```bash
npm run cypress:allTests
```


## Check and format code

To analyse the code and check if it's aligned with the Typescript and ESLint standards:

```bash
npm run lint
```

To format the code with Prettier:

```bash
npm run prettier
```
