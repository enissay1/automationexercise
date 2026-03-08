import { createBdd } from "playwright-bdd";
import { testUser } from "../fixtures/user.fixture";

const { Given, When, Then } = createBdd(testUser);

Given("I navigate to home page", async ({ userPage }) => {
 

  await userPage.home();
});

When("I add a product to cart", async ({ productPage }) => {
  await productPage.products();
  await productPage.addProduct();
});

Then("I view cart", async ({ productPage }) => {
  await productPage.goToCart();
});
