import { expect } from "chai";
import loggingin from "../pageobjects/log.js";
describe("",()=>{
    it("",async()=>{
        await browser.url("https://practicetestautomation.com/practice-test-login/")
        await loggingin.loooogin("student","Password123")
        let a=await browser.getUrl()
       await loggingin.submitbtn.click()

       await expect(a).to.equal('https://practicetetautomation.com/practice-test-login/')
       

    })
})