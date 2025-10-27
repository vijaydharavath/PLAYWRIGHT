// playwright.config.js
const { defineConfig, devices } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './', // your test folder
  timeout: 30000,
  
  use: {
    headless: false, // show browser UI
    screenshot: 'off',
    video: 'off',
  },
  projects: [
    {
      name: 'chromium', // Chrome / Edge
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox', // Mozilla Firefox
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit', // Safari
    //   use: { ...devices['Desktop Safari'] },
    // },
  ],
});
