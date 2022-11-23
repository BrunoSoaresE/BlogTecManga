import React from "react";

function Home({ jogos }) {

    return (
        <main>
            <h1>Top jogos - TecManga</h1>

            <ol>
                {jogos.map((jogo, indice) => {
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

export default Home;