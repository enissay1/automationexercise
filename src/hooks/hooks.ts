import { createBdd } from "playwright-bdd";
import { test } from "../fixtures/base.fixture";

const { Before, After } = createBdd(test);

Before(async ({ page }) => {
  await page.context().clearCookies();
});

After(async ({ page }) => {

  // await page.close();
});
