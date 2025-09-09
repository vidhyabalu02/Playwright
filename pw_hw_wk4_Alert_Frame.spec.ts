//day8_Alert_Frame.spec.ts

import test , {chromium, expect} from '@playwright/test'

test('Alert and Frame',async({page})=>{

    page.once('dialog',alertType=>{

        const type = alertType.type()
        const message = alertType.message()
        console.log(type)
        console.log(message)
        alertType.accept()
        

    })

await page.goto("https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm")
await page.waitForTimeout(5000)
await page.frameLocator("[name='iframeResult']").locator("//button[text()='Try it']").click()
await expect(page.frameLocator("[name='iframeResult']").locator("#demo")).toHaveText("You pressed OK!")


})