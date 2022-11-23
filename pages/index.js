function Home(props) {
  return (
    <main>
      <h1>Top jogos - TecManga - {props.jogos.title}</h1>

      <ol>
        {props.jogos.games.map((jogo, indice) => {
          const posicao = indice + 1;

          return (
            <p key={jogo.Nome}>
              <span>
                <span className="indice">
                  - {posicao} -
                </span>
                <span>
                  {posicao == 1 && " 🥇"}
                  {posicao == 2 && " 🥈"}
                  {posicao == 3 && " 🥉"}
                  {jogo.Nome}
                </span>
                <span>
                  -  {jogo.Descricao}
                </span>
              </span>
            </p>

          )
        })

        }
      </ol>
    </main>
  )
}

export async function getStaticProps() {
  const resposta = await fetch('http://localhost:3000/api/jogos');

  const post = await resposta.json();



  return {
    props:
    {
      title: 'My Title',
      jogos: post,
    },
    revalidate: 10
  };

   
}




export default Home