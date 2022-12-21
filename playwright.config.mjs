// @ts-check
// const { devices } = require('@playwright/test');
// @ts-ignore
import {devices}  from 'playwright';
// import {devices}  from 'playwright';
// @ts-ignore
//import * as name from './cucumber.js';
/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();


/**
 * @see https://playwright.dev/docs/test-configuration
 * @type {import('@playwright/test').PlaywrightTestConfig}
 */
const config={
  testDir: './tests',
  /* Maximum time one test can run for. */
  timeout: 5* 60 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 500000
  },
   

    // @ts-ignore
    // name:{
    // paths: ["./tests"],
    // },

  /* Run tests in files in parallel */
  // @ts-ignore
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  // @ts-ignore
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  // @ts-ignore
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  // @ts-ignore
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  // @ts-ignore
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  // @ts-ignore
  use: {
    /* Maximum time each action such as `click()` can take. Defaults to 0 (no limit). */
    // @ts-ignore
    actionTimeout: 0,
    /* Base URL to use in actions like `await page.goto('/')`. */
     // @ts-ignore
     baseURL: 'https://integration.matchesfashion.com',
     
      
      
     

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    // @ts-ignore
    trace: 'on-first-retry',
  },

  /* Configure projects for major browsers */
  // @ts-ignore
  projects: [
    {
      name: 'chromium',
      use: {
        ...devices['Desktop Chrome'],
      },
    },

    {
      name: 'firefox',
      use: {
        ...devices['Desktop Firefox'],
      },
    },

    {
      name: 'webkit',
      use: {
        ...devices['Desktop Safari'],
      },
    },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: {
    //     ...devices['Pixel 5'],
    //   },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: {
    //     ...devices['iPhone 12'],
    //   },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: {
    //     channel: 'msedge',
    //   },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: {
    //     channel: 'chrome',
    //   },
    // },
  ],

  /* Folder for test artifacts such as screenshots, videos, traces, etc. */
  // outputDir: 'test-results/',

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   port: 3000,
  // },
};

//  module.exports = {config};
export {config};
