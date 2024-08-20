import { Key } from 'webdriverio'
describe("browser",()=>{
    it("l a url",async()=>{
        await browser.url("https://www.flipkart.com/")
        await browser.maximizeWindow()
        await browser.$("input.Pke_EE").setValue("shoes")
        let autosugg=await browser.$$("a.OEFxE6")
        // await browser.keys(Key.Enter)

        await browser.pause(3000)
        await browser.minimizeWindow()
        // let a=await browser.getTitle()
        // let a=await browser.getUrl();
        await expect(browser).toHaveUrl("https://www.flipkart.com/search?q=shoes&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=off&as=off")
    })
})