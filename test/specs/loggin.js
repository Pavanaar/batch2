import login from "../pageobjects/loggin.js";

describe("",()=>{
    it("",async()=>{
        await browser.url("https://practicetestautomation.com/practice-test-login/")
        await login.loginpage("student","Password123")
        // await browser.waitUntil(()=>{
        //     return $("//h1[text()='Logged In Successfully']")
        // },3000)
        
    })
})