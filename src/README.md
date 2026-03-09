# Playwright BDD Automation Framework

Automation testing framework built with Playwright + TypeScript.

Tested website:
https://automationexercise.com

Framework features:

• Playwright test automation  
• BDD (Gherkin scenarios)  
• Page Object Model  
• Test data management  
• HTML reporting

Project structure:

features → BDD scenarios  
pages → page objects  
steps → step definitions  
utils → test data

Before Run tests

npm install playwright
npm install playwright-bdd
npm install @playwright/test --save-dev
npm install typescript ts-node --save-dev
npm install @types/node --save-dev
--
to run test
npx playwright install
npx bddgen
npx playwright test
npx playwright show-report
