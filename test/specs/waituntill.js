describe("",()=>{
    it("",async()=>{
        await browser.url("https://www.flipkart.com/")
        await browser.$("input.Pke_EE").setValue("shoes")
        
        // await browser.waitUntil(()=>{
        //     return $$("//div[@class='x6GwIv _2Ipp17']").waitForDisplayed
        // },5000)

        await browser.pause(4000)
        let aaaa=await browser.$$("//div[@class='x6GwIv _2Ipp17']").isdisplayed()
        console.log(aaaa);

        // for (const el in aaaa) {
        //    console.log(el);    
        // }
        // await browser.pause(2000)
        // console.log("------------------------------$$$$$-------------");
       
        // console.log(browser.getUrl);    
    })
})