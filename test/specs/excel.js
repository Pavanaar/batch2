import excel from "exceljs"
import excell from "../geneticUtility/excelutility.js"
describe("excel",()=>{
    it("read&write data",async()=>{
        let book=new excel.Workbook()
        await book.xlsx.readFile("./test/TestData/new.xlsx")
        let sheet=book.getWorksheet("Sheet1")
        let data=sheet.getRow(1).getCell(1).toString()
        console.log(data);

        let book2=new excel.Workbook()
        await book2.xlsx.readFile("./test/TestData/new.xlsx")
        let sheet1=book2.getWorksheet("Sheet2")
        sheet1.getRow(2).getCell(1).value="hello"
        await book2.xlsx.writeFile("./test/TestData/new.xlsx") 
        
    })
    it.only("",async()=>{
        // console.log(await excell.read("./test/TestData/new.xlsx","Sheet1",1,1));
        // await excell.write("./test/TestData/new.xlsx","Sheet1",5,1,"asdfghjk")
        await excell.readmultidata("./test/TestData/new.xlsx","Sheet1")
        
       
        
    })
})