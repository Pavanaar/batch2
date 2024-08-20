import excel from "exceljs"
describe("",()=>{
    it("",async()=>{
        let book=new excel.Workbook()
        await book.xlsx.readFile("./test/TestData/ddt.xlsx")
        let sheet=await book.getWorksheet("Sheet1")
        let data=await sheet.getRow(1).getCell(1).toString()
        console.log(data);
        
        // let book2=new excel.Workbook()
        // await book2.xlsx.readFile("./test/TestData/ddt.xlsx")
        // let sheet2=await book2.getWorksheet("write")
        // sheet2.getRow(1).getCell(2).value="hii pavana"
        // await book2.xlsx.writeFile("./test/TestData/ddt.xlsx")
    })
    it("multiple data in row",async()=>{
        let book3= new excel.Workbook()
        await book3.xlsx.readFile("./test/TestData/ddt.xlsx")
        let sheet=await book3.getWorksheet("Sheet1")
        //  let a= await sheet.rowCount
        //  console.log(a);
         
        for (let i = 1; i <= sheet.rowCount; i++) {
            let a=await sheet.getRow(i).getCell(1).toString()
            console.log(a);
              
        }
    })
    it("",async()=>{
        let book4=new excel.Workbook()
        await book4.xlsx.readFile("./test/TestData/ddt.xlsx")
        let sheet=await book4.getWorksheet("Sheet2")
        for (let i = 1; i <= sheet.rowCount; i++) {
            for (let j = 1; j <= sheet.columnCount; j++) {
                
                let a=await sheet.getRow(i).getCell(j).toString()
                console.log(a); 
                
            }
               
        }
    })
})
