import { Page, expect } from "@playwright/test";

export class ProductPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async products() {
    await this.page.goto("https://automationexercise.com/products");
  }

  async addProduct(productIndex: number = 0) {
    // Hover sur la carte produit
    const productCard = this.page
      .locator(".product-image-wrapper")
      .nth(productIndex);
    await productCard.hover();

    // Cliquer sur le bouton Add to cart unique
    const addToCartBtn = productCard.locator("text=Add to cart").first();
    await addToCartBtn.waitFor({ state: "visible", timeout: 5000 });
    await addToCartBtn.click();

    console.log(`Produit ${productIndex + 1} ajouté au panier`);
  }

  async goToCart() {
    await this.page.locator('a[href="/view_cart"]').first().click();
  }

  // vérifier * produits dans le panier
  async verifyProductsInCart() {
    const cartProducts = this.page.locator("#cart_info_table tbody tr");

    // soft assertion : si le test échoue, le test continue
    await expect.soft(cartProducts).toHaveCount(1);
    console.log("Step finished, test continues même si soft assertion échoue");
  }

  async verifyPriceQuantityTotal() {
    const rows = this.page.locator("#cart_info_table tbody tr");

    const price1 = await rows.nth(0).locator(".cart_price").innerText();
    const quantity1 = await rows.nth(0).locator(".cart_quantity").innerText();
    const total1 = await rows.nth(0).locator(".cart_total").innerText();
    console.log(
      `Produit 1 - Price: ${price1}, Quantity: ${quantity1}, Total: ${total1}`,
    );
    // const price2 = await rows.nth(1).locator(".cart_price").innerText();
    // const quantity2 = await rows.nth(1).locator(".cart_quantity").innerText();
    // const total2 = await rows.nth(1).locator(".cart_total").innerText();

    expect(price1).toBeTruthy();
    expect(quantity1).toBeTruthy();
    expect(total1).toBeTruthy();

    // expect(price2).toBeTruthy();
    // expect(quantity2).toBeTruthy();
    // expect(total2).toBeTruthy();
  }
}
