import { Page, Locator } from "@playwright/test";

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
}
