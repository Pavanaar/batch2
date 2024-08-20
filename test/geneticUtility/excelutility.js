import excel from "exceljs"
class excell{
    // static filepath="./test/TestData/new.xlsx"
    async read(filepath,sname,rno,cno){
        let book=new excel.Workbook()
        await book.xlsx.readFile(filepath)
        let sheet=book.getWorksheet(sname)
        let data=sheet.getRow(rno).getCell(cno).toString()
        return data
    }
    async write(filepath,sname,rno,cno,dataaa){
        let book2=new excel.Workbook()
        await book2.xlsx.readFile(filepath)
        let sheet2=book2.getWorksheet(sname)
        sheet2.getRow(rno).getCell(cno).value=dataaa
        await book2.xlsx.writeFile(filepath)
    }
    async readmultidata(filepath,sheet){
        let book3=new excel.Workbook()
        await book3.xlsx.readFile(filepath)
        let s=book3.getWorksheet(sheet)
        for (let i = 1; i <=s.rowCount; i++) {
            for (let j = 1; j <=s.columnCount; j++) { 
                console.log(s.getRow(i).getCell(j).toString());
            } 
        }

    }
    
  
}
export default new excell()