import { Page } from "@playwright/test";

export class LoginPage {
  constructor(private page: Page) {}

  emailInput = 'input[data-qa="login-email"]';
  passwordInput = 'input[data-qa="login-password"]';
  loginButton = 'button[data-qa="login-button"]';

  async open() {
    await this.page.goto("https://automationexercise.com/login");
  }

  async login(email: string, password: string) {
    await this.page.fill(this.emailInput, email);
    await this.page.fill(this.passwordInput, password);
    await this.page.click(this.loginButton);
  }
  async home() {
    await this.page.goto("https://automationexercise.com/");
  }
}
