import test , {chromium, expect} from '@playwright/test'

test('Create a Lead',async({page})=> {

    await page.goto("http://leaftaps.com/opentaps/control/main")
    await page.locator('#username').fill("Demosalesmanager")
    await page.locator('#password').fill("crmsfa")
    await page.locator('.decorativeSubmit').click()
    await page.waitForTimeout(3000)
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()
    await page.waitForTimeout(3000)
    await page.locator("//a[text()='Leads']").click()
    await page.waitForTimeout(3000)
    await page.locator("//a[text()='Create Lead']").click()
    await page.waitForTimeout(3000)


    await page.locator("#createLeadForm_companyName").fill("TCS")

    await page.locator("//td/input[@name='firstName']").fill("Vidhya")

    await page.locator("//td/input[@name='lastName']").fill("Balasubramanian")

    await page.selectOption('#createLeadForm_dataSourceId',{label:'Conference'})

    await page.locator("#createLeadForm_personalTitle").fill("Miss")

    await page.locator("#createLeadForm_generalProfTitle").fill("Lead")

    await page.locator("#createLeadForm_annualRevenue").fill("125114154")

    await page.locator("#createLeadForm_departmentName").fill("Testing ")

    await page.locator("#createLeadForm_primaryPhoneNumber").fill("9876543210")

    await page.locator(".smallSubmit").click()

    await page.waitForTimeout(2000)

    await expect(page.locator("#viewLead_companyName_sp")).toContainText("TCS")

    await expect(page.locator("#viewLead_firstName_sp")).toHaveText("Vidhya")

    await expect(page.locator("#viewLead_lastName_sp")).toHaveText("Balasubramanian")

    await expect(page.locator("#viewLead_statusId_sp")).toHaveText("Assigned")

    console.log(await page.title())


})


test('Edit a Lead', async({page})=>{

    await page.goto("http://leaftaps.com/opentaps/control/main")

    await page.locator("input#username").fill("Demosalesmanager")
    await page.locator("input#password").fill("crmsfa")
    await page.locator("input.decorativeSubmit").click()
    await page.waitForTimeout(3000)
    await page.locator("//a[contains(text(),'CRM/SFA')]").click()
    await page.waitForTimeout(3000)
    await page.locator("//a[text()='Leads']").click()
    await page.waitForTimeout(2000)
    await page.click("//a[text()='Find Leads']")
    //await page.click('a:has-text("Find Leads")')
    await page.waitForTimeout(2000)
    //div[@class='x-panel-header x-panel-header-noborder x-unselectable']//following::input[@name='firstName']

    await page.locator("//div[@class='x-panel-header x-panel-header-noborder x-unselectable']//following::input[@name='firstName']").fill("vidhya")
    await page.waitForTimeout(2000)
    await page.click("//button[text()='Find Leads']")
    await page.waitForTimeout(2000)
    await page.locator("(//table[@class='x-grid3-row-table']/tbody/tr/td/div)[1]/a").click()
    await page.locator("//a[text()='Edit']").click()
    await page.locator("#updateLeadForm_companyName").fill("TataServices")
    await page.locator("#updateLeadForm_departmentName").fill("Automation Testing")
    await page.locator("#updateLeadForm_annualRevenue").fill("541255555555")
    await page.locator("#updateLeadForm_description").fill("This is the updated desription")
    await page.locator("//input[@name='submitButton' and @value='Update']").click()
    await page.waitForTimeout(2000)


    await expect(page.locator("span#viewLead_companyName_sp")).toContainText("TataServices")
    await expect(page.locator("span#viewLead_departmentName_sp")).toHaveText("Automation Testing")
    const annualRevenue= await page.locator("span#viewLead_annualRevenue_sp").textContent()
    //const revisedRevenue = annualRevenue.replace(/[^0-9]/g,'')
    //const finalValue = Math.floor(Number(revisedRevenue)/100)
    //expect(finalValue).toEqual(541255555555)
    await expect(page.locator("span#viewLead_description_sp")).toHaveText("This is the updated desription")

    await page.waitForTimeout(2000)
    console.log(await page.title())
    

})

test.only('Create a salesforce Account',async({page})=>{

await page.goto("https://login.salesforce.com/")
await page.getByLabel('Username').fill('dilip@testleaf.com')
await page.getByLabel('Password').fill('Leaf@2025')
await page.locator('#Login').click()
await page.waitForTimeout(6000)
const title = await page.title()
expect(title).toBe('Home | Salesforce')
const currentUrl = await page.url()
expect(currentUrl).toBe('https://testleaf4-dev-ed.develop.lightning.force.com/lightning/setup/SetupOneHome/home')
await page.locator("button:has-text('App Launcher')").click()
//await page.getByText('View All').click()
await page.waitForTimeout(2000)
await page.getByPlaceholder('Search apps and items...').fill("Service")
await page.locator("(//span/p[@class='slds-truncate']/b)[1]").click()
await page.waitForTimeout(3000)
await page.locator("[title='Accounts']").click()
await page.waitForTimeout(3000)
await page.getByRole('button',{name:'New'}).click()
await page.waitForTimeout(3000)
await page.locator("input[name='Name']").fill("Dilip")
await page.locator("button[name='SaveEdit']").click()
const textMessage = await page.locator("div[data-key='success']").textContent()
console.log(textMessage)

})