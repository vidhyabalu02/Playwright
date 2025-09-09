import test, { chromium, expect } from '@playwright/test'

test(' Create and verify a New Case in Chatter', async ({ page }) => {

    await page.goto("https://login.salesforce.com/")
    await page.getByLabel('Username').fill('vidyar@testleaf.com')
    await page.getByLabel('Password').fill('Sales@123')
    await page.locator('#Login').click()
    await page.waitForTimeout(6000)
    await page.locator("button:has-text('App Launcher')").click()

    //await page.getByText('View All').click()
    await page.waitForTimeout(2000)
    await page.getByPlaceholder('Search apps and items...').fill("Service")
    //await page.locator("(//span/p[@class='slds-truncate']/b)[1]").click()
    await page.locator("//p[normalize-space(.)='Service']").click()
    //await page.locator("span.slds-avatar.slds-avatar_large").first().click()
    await page.locator("a[title='Cases']").click()
    await page.waitForTimeout(1000)
    await page.getByRole('button', { name: 'New' }).click()
    await page.waitForTimeout(1000)
    await page.getByPlaceholder('Search Contacts...').click()
    //
    await page.locator("//span[text()='New Contact']").click()
    await page.waitForTimeout(1000)
    await page.locator("[name='salutation']").click()
    await page.locator("//span[text()='Ms.']").click()
    await page.getByPlaceholder('First Name').fill("Vidh")
    await page.getByPlaceholder('Last Name').fill("Balu")
    await page.locator("button[name='SaveEdit']").last().click()
    await page.waitForTimeout(1000)

    const textMessage = await page.locator("div[data-key='success']").textContent()
    console.log(textMessage)

    //Contact "Ms. Vidhya Balu" was created.

    await page.getByPlaceholder("Search Accounts...").click()
    await page.locator("//span[text()='New Account']").click()
    await page.waitForTimeout(2000)
    await page.locator("input[name='Name']").fill("VidhBalu")
    await page.getByLabel('Account Number').fill("565445645646554")
    await page.waitForTimeout(3000)
    await page.locator("button[aria-label='Rating']").click()
    await page.locator("//span[text()='Hot']").click()


    await page.locator("button[name='SaveEdit']").last().click()

    const textaccMessage = await page.locator("div[data-key='success']").textContent()
    console.log(textaccMessage)

    //Account "vidhya" was created.

    await page.waitForTimeout(2000)
    await page.locator("button[aria-label='Status']").click()
    await page.locator("(//span/span[text()='New'])[1]").click()
    await page.locator("button[aria-label='Priority']").click()
    await page.locator("//span[text()='High']").click()
    await page.locator("button[aria-label='Case Origin']").click()
    await page.locator("//span[text()='Email']").click()
    //await page.locator("input[name='Subject']").scrollIntoViewIfNeeded();

    await page.locator("input[name='Subject']").fill("Product Return Request")
    await page.locator("(//div/textarea)[1]").fill("Requesting a return for a defective product")
    //await page.locator("[name='Subject']").fill("Product Return Request")
    //await page.locator("//div[@class='slds-form-element__control slds-grow textarea-container']").first().fill("Requesting a return for a defective product")
    await page.locator("//button[text()='Save']").click()

    //Success notification.Case "00001556" was created.


    await page.locator("//button[@title='Edit Status']").first().click()
    await page.locator("//button[@aria-label='Status']").click()
    await page.locator("//span[@class='slds-media__body']/span[text()='Escalated']").click()
    await page.locator("button[name='SaveEdit']").click()
   // await expect(page.locator("[class='cuf-ftcFieldNewValue']")).toHaveText("Escalated");
   await expect(page.locator("[class='cuf-ftcFieldNewValue']")).toHaveText("Escalated")
})
