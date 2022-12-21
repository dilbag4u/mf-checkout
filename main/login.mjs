import {page,context} from '../tests/hooks.mjs';
import {config} from '../playwright.config.mjs';
import { expect } from '@playwright/test';
//import {acceptCookies,login_email,login_email_continue,login_password,continue_to_checkout} from '../tests/locators.mjs';
// import * as  from '../tests/locators.mjs';
import * as  objectLocators from '../tests/locators.mjs';


export async function login(){
  // await page.click(acceptCookies);
  await page.getByRole('button', { name: 'Accept All Cookies' }).click();
    await page.locator(objectLocators.login_email).fill('testtype1@gmail.com');
    // await page.getByRole('button', { name: 'Accept All Cookies' }).click();
    await page.locator(objectLocators.login_email_continue).click();
    await page.locator(objectLocators.login_password).fill('Password1');
    await page.locator(objectLocators.continue_to_checkout).click();
    // await Promise.all([
    //     page.waitForNavigation(),
    //     page.locator(continue_to_checkout).click(),
    //   ]);

    // await page.locator(continue_to_checkout,{ waitUntil: 'networkidle' }).click();
    // const waitsuccess = await Promise.all([
    //    // page.waitForLoadState('networkidle'),
    //     // This action triggers the request
    //    // page.locator('topbar__options__item authenticated-user').waitFor()
    //   ]);
    //   waitsuccess.locator('topbar__options__item authenticated-user').waitFor();
     //  await page.waitForLoadState('networkidle');
//     await page.getByRole('button', { name: 'Accept All Cookies' }).click();
//      await page.getByRole('link',{name: 'Sign In'}).click();
//       await page.locator('j_username').fill('test89@test.com');
   
//    await page.locator('j_password').click();
//     await page.locator('j_password').fill('Password');
//     await page.getByRole('button', { name: 'Login' }).click();
}


export async function verifylogin(){
  
    // await expect('topbar__options__item authenticated-user').toBeVisible();
    console.log('****** started',page.locator("[class='topbar__options__item authenticated-user']").waitFor());
const loggedin1= page.locator("[class='topbar__options__item authenticated-user']");
console.log(' reached ********');
await loggedin1.waitFor();
// await page.locator('topbar__options__item authenticated-user').waitFor();

// await  page.waitForLoadState('domcontentloaded');

    
 await page.goto(config.use.baseURL+'/account');//,{timeout: 60 * 1000}
  //await page.goto('https://www.matchesfashion.com/account');
  
   await page.getByRole('heading',{name:'My Account'}).waitFor();
    const loggedin= page.getByRole('heading',{name:'My Account'});
    await expect(loggedin).toBeVisible();
    //await expect(page.locator('class=topbar__options__item authenticated-user'),'should be logged in').toBeVisible();

}

export async function clearCookies(){
   //await page.evaluate.window.clearCookies();
   console.log('***** before clear cookies');
   await context.clearCookies();
   await page.reload();
    // await page.clearCookies();

    
}

export async function goToPassword(){
    console.log('***** go to password field');
    await page.locator("[data-testid='login-form-email']").fill('testuser@test.com');
    await page.getByRole('button', { name: 'Accept All Cookies' }).click();
    await page.locator("[data-testid='login__submit']").click();
}

export async function verifyStaySignedIn(){
    console.log('***** verify stay signed in');
    expect(await page.locator("[data-testid='login__remember-me-link']").isChecked());
    // expect(await page.locator('_spring_security_remember_me').isChecked());
}

// export{
//     login,
//     verifylogin,
//     verifyStaySignedIn,
//     goToPassword,
//     clearCookies
// };