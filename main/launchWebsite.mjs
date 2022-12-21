import {page} from '../tests/hooks.mjs';
import {config} from '../playwright.config.mjs';


async function goToCheckout(){
    // await page.goto(config.use.baseURL);
   // await page.browserContext.clearCookies();
    // await page.evaluate(() => window.localStorage.clear());
    // await page.evaluate(() => window.sessionStorage.clear());
   
  await page.goto(config.use.baseURL+'/checkout');
   
//    await page.goto('https://www.matchesfashion.com/login');
}


export {goToCheckout};
