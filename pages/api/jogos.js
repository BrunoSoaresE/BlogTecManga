import { GoogleSpreadsheet } from 'google-spreadsheet'

export default async function (req, res) {


    const credsStr = process.env.SHEETS_SECRET_API;
    const creds = JSON.parse(credsStr);
    const doc = new GoogleSpreadsheet(process.env.SHEETS_URL);
    await doc.useServiceAccountAuth(creds);


    await doc.loadInfo();


    const sheet = doc.sheetsByIndex[0];///primeira pagina da planilha
    //sheet.rowCount, linhas totais prenchidas ou n 
    const rows = await sheet.getRows();
    


    const jogos = rows.map(({ Nome, Descricao }) => {
        return {
            Nome,
            Descricao,
        };
    });


    res.send({
        title: doc.title,
        games: jogos,
    })

}