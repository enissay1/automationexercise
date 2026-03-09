import { createBdd } from "playwright-bdd";
import { testUser } from "../fixtures/user.fixture";

const { Given, When, Then } = createBdd(testUser);

Given("Verify that home page is visible successfully", async ({ userPage }) => {
  await userPage.home();
});

When(
  "Hover over first product and click 'Add to cart'",
  async ({ productPage }) => {
    await productPage.products();
    await productPage.addProduct();
  },
);
When("Click 'View Cart' button", async ({ productPage }) => {
  await productPage.goToCart();
});
When(
  "Verify that product is displayed in cart page",
  async ({ productPage }) => {
    await productPage.verifyProductsInCart();
  },
);

Then(
  "Verify their prices, quantity and total price",
  async ({ productPage }) => {
    await productPage.verifyPriceQuantityTotal();
  },
);
