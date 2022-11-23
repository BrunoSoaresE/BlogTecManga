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


async function loadPosts() {
  const resposta = await fetch(process.env.URL_API + 'api/jogos');
  const post = await resposta.json();
  return post
}

export async function getStaticProps() {
  const posts = await loadPosts()

  return {
    props:
    {
      title: 'My Title',
      jogos: posts,
    },
  };

   
}




export default Home