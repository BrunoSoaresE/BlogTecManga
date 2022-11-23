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
/*
export function getStaticProps() {
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString,
        },
        revalidate: 10
    }
}

*/




export async function getServerSideProps({ req, res }) {

  const resposta = await fetch('http://localhost:3000/api/jogos');

  const post = await resposta.json();

  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )

  return {
    props:
    {
      title: 'My Title',
      jogos: post,
    },

  };

}

export default Home