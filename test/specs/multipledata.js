import { url } from "inspector";
import loggin from "../pageobjects/loggin.js";
import fs from "fs"
let data=fs.readFileSync("./test/TestData/ddt.json")
let cred=JSON.parse(data)

   
describe("",()=>{
    cred.forEach(element => {
        let usn=element.username
        let pwd=element.password
        let urrl=element.urlll
        it("",async()=>{
            await browser.url(urrl)
            await loggin.loginpage(usn,pwd)
        })
    });
   
})