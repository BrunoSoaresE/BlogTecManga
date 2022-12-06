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
    

    const filmes = rows.map(({ Titulo, Ano,Empresa,Gostaram,Sinopse,Direcao,Genero,Atores,Analise,Poster }) => {   

        var listAtores = Atores != null ? Atores.split(";") : [];
        var listDirecao = Direcao != null ? Direcao.split(";") : [];
        var listGenero = Genero != null ? Genero.split(";") : [];
        return {
            Titulo, Ano,Empresa,Gostaram,Sinopse,listDirecao,listGenero,listAtores,Analise,Poster
        };
    });

    
    const searchFilter = (array) => {       
          return array.filter(
            (el) => {
              if (el.Titulo != null) {     
                return el.Titulo != null && el.Titulo != "" && el.Titulo !== undefined
              }
            }
          )        
      }
    
    
      const filtered = searchFilter(filmes);



    res.send({
        title: doc.title,
        filmes: filtered,
    }); 
}