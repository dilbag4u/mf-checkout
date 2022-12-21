
 // const {pw ,context}  = require('../world.js');
 import {Given, When, Then} from '@cucumber/cucumber';
 // @ts-ignore
  //const {pw ,context}  = require('../world.mjs');
  import {page} from "/Users/dilbags/Desktop/mf-checkout/tests/hooks.mjs";

   When('I verify title', async ()=> {
    console.log('second started');
    await page.getByRole('link', { name: 'Community' }).click();
    console.log('another stepdef picked up');
    // Write code here that turns the phrase above into concrete actions
   
  });

