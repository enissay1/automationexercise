import { defineConfig } from "@playwright/test";
import { defineBddConfig } from "playwright-bdd";

const testDir = defineBddConfig({
  features: "src/features/**/*.feature",

  steps: ["src/steps/**/*.ts", "src/fixtures/**/*.ts"],
});

export default defineConfig({
  testDir,

  use: {
    baseURL: "https://automationexercise.com",

    headless: false,
  },
});
