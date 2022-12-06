import styles from './ListaPostCard.module.css';
import React from 'react';


function ListPost(props) {
  return (
      <ol  className={styles.ListPost}>
        {props.filtered.map((filme, indice) => {

          return (
            <div key={indice} className={styles.Post}>
              <span>
                <h2>
                  {filme.Titulo}
                </h2>
                <span>
                  {filme.Ano}
                </span>
                <span>
                  {filme.Empresa}
                </span>
                <p>
                  {filme.Sinopse}
                </p>
                <span>
                  {filme.Gostaram}
                </span>
                <span>
                  {filme.Genero}
                </span>
                <div>
                  {filme.listDirecao?.map(function (ator) {
                    return (
                      <div key={ator}>{ator}</div>
                    );
                  })}
                </div>

                <div>
                  {filme.listAtores?.map(function (ator) {
                    return (
                      <div key={ator}>{ator}</div>
                    );
                  })}
                </div>

              </span>
            </div>

          )
        })

        }
      </ol>
  )
}







export default ListPost;