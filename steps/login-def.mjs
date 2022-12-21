
        //@ts-check
        import {Given, When, Then} from '@cucumber/cucumber';
        // @ts-ignore
        import {login,verifylogin,goToPassword,verifyStaySignedIn,clearCookies} from '../main/login.mjs';
        // @ts-ignore
        import {goToCheckout} from '../main/launchWebsite.mjs';
        // @ts-ignore
        import {config} from '../playwright.config.mjs';
        
        Given('I am on the checkout website', async ()=> { // {timeout: 60 * 1000},
        await clearCookies(); 
        await goToCheckout();
        
        });
         
       
        When('I login with registered user', async ()=> {  //{timeout: 60 * 1000},
          await login();
        });
         

        Then('I logged in successfully', async ()=> {  //
          await verifylogin();
          
        });


        When('I go to password field', async ()=> {  //
          await goToPassword();
        });


        When('I see stay signed in checbox checked', async ()=> {  //
          await verifyStaySignedIn();
        });

