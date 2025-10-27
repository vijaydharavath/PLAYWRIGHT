const{test, expect} =require('@playwright/test');


test("log in failed test",async ({page})=>{
    


 await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

 await page.waitForSelector("//input[@placeholder='Username']",({timeout :10000}));
    await page.fill("//input[@placeholder='Username']","Admin"); 

await page.waitForSelector("//input[@placeholder='Password']",({timeout : 10000}));
await page.fill("//input[@placeholder='Password']","admin1");

await page.waitForSelector("//button[normalize-space()='Login']",({timeout:10000}));
await page.click("//button[normalize-space()='Login']")

const errorMessage = await page.waitForSelector("(//p[@class='oxd-text oxd-text--p oxd-alert-content-text'])[1]",({timeout:10000}))
await expect(errorMessage).toBeTruthy()
await page.waitForTimeout(10000)
  console.log("error message is " + errorMessage)
});
   