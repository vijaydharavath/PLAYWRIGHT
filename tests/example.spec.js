// const { test, expect } = require('@playwright/test');

// test('Stable Maze Master login with Microsoft Auth', async ({ page }) => {
// test.setTimeout(60000);
//   // 1️⃣ Go to Maze Master
//   await page.goto('https://maze-master.azurewebsites.net/');
//   await page.waitForLoadState('networkidle'); // Wait until page finishes network activity

//   // 2️⃣ Wait for Microsoft email field
//   await page.waitForSelector('//input[@type="email"]', { timeout: 10000 });
//   await page.fill('//input[@type="email"]', 'vijay.dharavath@purplemavens.com');
//   console.log('Email entered');

//   // 3️⃣ Click Next
//   await page.waitForSelector('//input[@type="submit"]', { timeout: 10000 });
//   await page.click('//input[@type="submit"]');
//   console.log('Submit button clicked');

//   // 4️⃣ Wait for Password field
//   await page.waitForSelector('//input[@name="passwd"]', { timeout: 10000 });
//   await page.fill('//input[@name="passwd"]', 'Dadi@1234');
//   console.log('Password entered');

//   // 5️⃣ Click Sign In
//   await page.waitForSelector('//input[@type="submit"]', { timeout: 10000 });
//   await page.click('//input[@type="submit"]');
//   console.log('Sign in clicked');

//   // 6️⃣ Handle "Stay signed in?" prompt
//   try {
//     await page.waitForSelector('//input[@id="idSIButton9"]', { timeout: 5000 });
//     await page.click('//input[@id="idSIButton9"]'); // Click Yes
//     console.log('Clicked Stay signed in - YES');
//   } catch {
//     console.log('Stay signed in prompt not shown');
//   }

//   // 7️⃣ Wait for Dashboard (or any element in your page)
//   const pathElement = page.locator("(//*[name()='path'])[10]");
//   await expect(pathElement).toBeVisible({ timeout: 20000 });
//   await pathElement.click();
//   console.log('Clicked on path element');
//    await page.waitForTimeout(5000); // Wait for 5 seconds to observe the result

//    const emaze = await page.locator("(//img[@class='maze-logo'])[6]");
//     await expect(emaze).toBeVisible({ timeout: 10000 });
//     await emaze.click()
//     console.log('Clicked on emaze element');
//     await page.waitForTimeout(5000); 

// });


const{test, expect} =require('@playwright/test');

test('login page  test ',async ({page }) => {

    await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');

    await page.waitForSelector("//input[@placeholder='Username']",({timeout :10000}));
    await page.fill("//input[@placeholder='Username']","Admin"); 

await page.waitForSelector("//input[@placeholder='Password']",({timeout : 10000}));
await page.fill("//input[@placeholder='Password']","admin123");

await page.waitForTimeout(2000);

await page.waitForSelector("//button[normalize-space()='Login']",({timeout:10000}));
await page.click("//button[normalize-space()='Login']")
   
   await page.waitForTimeout(2000); 
   await expect(page).toHaveURL("https://opensource-demo.orangehrmlive.com/web/index.php/dashboard/index");
   await page.waitForTimeout(2000);

   await page.waitForSelector("(//p[@class='oxd-userdropdown-name'])[1]",({timeout:1000}));
    await page.click("(//p[@class='oxd-userdropdown-name'])[1]")
    await page.waitForSelector("//a[normalize-space()='Logout']",({timeout :1000}))
    await page.click ("//a[normalize-space()='Logout']")
    await page.waitForTimeout(5000)
    await expect(page).toHaveURL(/login/)
});


