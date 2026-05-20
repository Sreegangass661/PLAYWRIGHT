import XLSX from 'xlsx';

function getdata(row, column) {
    const workbook = XLSX.readFile('testdata/testdata.xlsx');
    const worksheet = workbook.Sheets['Login'];

    const cellvalue = XLSX.utils.encode_cell({
        r: row - 1,
        c: column - 1
    });

    const data = worksheet[cellvalue];
    return data ? data.v : undefined;
}

export { getdata };