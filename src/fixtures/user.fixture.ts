import { test as base } from "playwright-bdd";
import { LoginPage } from "../pages/login.page";
import { ProductPage } from "../pages/product.page";
import { users } from "../utils/testData";

type Fixtures = {
  userPage: LoginPage;
  productPage: ProductPage;
};

export const testUser = base.extend<Fixtures>({
  userPage: async ({ page }, use) => {
    const userPage = new LoginPage(page);
    await userPage.open();
    await userPage.login(users.user.email, users.user.password);
    await use(userPage);
  },
  productPage: async ({ page }, use) => {
    await use(new ProductPage(page));
    await page.pause();
  },
});

export { expect } from "@playwright/test";
