//======Frame======

import test, { chromium, expect } from '@playwright/test'

//=====Handling Frames using Frame Locators===========

test("Handling Frames using Frame locator ", async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml")
    await page.frameLocator("(//iframe)[1]").locator("#Click").click()
    await expect(page.frameLocator("(//iframe)[1]").locator("#Click")).toHaveText("Hurray! You Clicked Me.")
    await page.waitForTimeout(2000)

    //------For nested frame using locators you have to go to outside frame then inside frame---------
    await page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("button#Click").click()
    await expect(page.frameLocator("(//iframe)[3]").frameLocator("#frame2").locator("button#Click")).toHaveText("Hurray! You Clicked Me.")

})


//=====Handling Frames using Frame Index===========

test.only("Handling frames using FrameID", async ({ page }) => {

    await page.goto("https://leafground.com/frame.xhtml")
    const frameDetails = page.frames()
    console.log("Total Frames in this page is", frameDetails.length)

    const firstFrame = frameDetails[1]
    await firstFrame.locator("#Click").click()
    await expect(firstFrame.locator("#Click")).toHaveText("Hurray! You Clicked Me.")

    //---For nested frame using index - you can directly give index , no need of traversing--------
    const fourtFrame = frameDetails[4]
    const text = await fourtFrame.locator("#Click").innerText()
    console.log(text)

    await fourtFrame.locator("#Click").click()


    await expect(fourtFrame.locator("#Click")).toHaveText("Hurray! You Clicked Me.")



})