const XLSX= require('xlsx')//import xlsx from 'xlsx'
//import *as XLSX from 'xlsx' Asterisk as
function getdata(sheet){
    const workbook=XLSX.readFile('testdata/testdata.xlsx')
    const worksheet=workbook.Sheets[sheet]
    const data=XLSX.utils.sheet_to_json(worksheet);//converts the worksheet data into JSON format
    return data

    
}
module.exports={getdata}//export {getdata}    