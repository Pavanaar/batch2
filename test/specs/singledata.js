import loggin from "../pageobjects/loggin.js";
//fs-filesystem : inbuilt liberary to fetch json file
import fs from "fs"
//readfileSync is method from fs to fetch data from json file
let data=fs.readFileSync("./test/TestData/ddt.json")
//now data is in json format but we need to pass it as js-object so we use .parse()
let cred=JSON.parse(data)
describe("",()=>{
    let usn=cred.username
    let pwd=cred.password
    let url=cred.urlll
    it("",async()=>{
        await browser.url(url)
        await loggin.loginpage(usn,pwd)
    })
})
