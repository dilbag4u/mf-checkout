

import {Given, When, Then} from '@cucumber/cucumber';
// @ts-ignore
 //const {pw ,context}  = require('../world.mjs');
 import {page} from "/Users/dilbags/Desktop/mf-checkout/tests/hooks.mjs";

Then('I am on 4th page', async ()=> {
    await page.getByRole('link', { name: 'conference talks' }).click();
    // Write code here that turns the phrase above into concrete actions
    
  });

