
import {AfterAll, BeforeAll,setDefaultTimeout} from '@cucumber/cucumber';
// import { chromium, test } from "@playwright/test";

// let context;
// let page=test;
//let browser=Browser;
setDefaultTimeout(80000);


// BeforeAll(async () =>  {
 
//   page.browser= await chromium.launch({headless:false});
//   context = await page.browser.newContext();
//   page= await context.newPage();
//   return page;

//     });


// AfterAll(async ()=> {
//     await page.browser.close();
// });

//------
import { chromium } from "playwright";

let page=null;
let context=null;
let browser=null;
BeforeAll(async () =>  {
  browser= await chromium.launch({headless:false});
  context = await browser.newContext();
  // context.addCookies([{name:"mf-checkout", value: true , url: "www.matchesfashion.com" , path: "/", domain: "matchesfashion.com"}]);
  //context.setDefaultTimeout(800000);
 // context.setDefaultNavigationTimeout(80000);
  page = await context.newPage();
  // await page.goto('https://www.matchesfashion.com/');
  // await page.reload();
  // await page.goto('https://www.matchesfashion.com/checkout');
  
  // page.setDefaultTimeout(80000);
  page.setDefaultNavigationTimeout(80000);

});

AfterAll(async ()=> {
    await context.close();
    await browser.close();
});

export {page,context};


