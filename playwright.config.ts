import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "src/features/**/*.feature",
  steps: ["src/steps/**/*.ts", "src/fixtures/**/*.ts"],
});

export default defineConfig({
  testDir, // BDD feature + steps

  use: {
    baseURL: "https://automationexercise.com",
    headless: false,
    screenshot: "only-on-failure",
    video: "retain-on-failure",
  },

  reporter: [
    ["list"], // console simple
    ["html", { outputFolder: "playwright-report", open: "never" }],
  ],

  timeout: 60_000, // timeout par test
  // retries: 1, // retenter un test en cas d'échec
  fullyParallel: true, // lancer tests en parallèle
});
