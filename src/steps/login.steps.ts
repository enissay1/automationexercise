import { createBdd } from "playwright-bdd";
import { users } from "../utils/testData";
import { test } from "../fixtures/base.fixture";
import { LoginPage } from "../pages/login.page";

let loginPage: LoginPage;
const { Given, When, Then } = createBdd(test);

Given("I open the login page", async ({ page }) => {
  loginPage = new LoginPage(page);
  await loginPage.open();
});

When("I login with valid credentials", async () => {
  await loginPage.login(users.user.email, users.user.password);
});

Then("I should see the logged in user", async ({ page }) => {
  await page.waitForSelector('a:has-text("Logout")');
  await page.waitForTimeout(10000);
});
