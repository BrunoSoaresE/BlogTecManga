import styles from './ListaPostCard.module.css';
import React from 'react';
import { AiFillStar, AiOutlineStar } from "react-icons/ai";


function ListPost(props) {

  return (
    <ol className={styles.ListPost}>
      {props.filtered && props.filtered.map((filme, indice) => {

        var Sinopse = filme.Sinopse.length > 175 ? filme.Sinopse.substring(0,200) + "... Ler mais": filme.Sinopse;

        return (
          <div key={indice} className={styles.Post} >
            <div className={styles.Poster}>
              <img src={filme.Poster} alt="Logo TecManga" />
            </div>



            <div className={styles.details}>
              <h2 className={styles.Titulo}>
                {filme.Titulo}
              </h2>

              <h3>
                Directed by
                {filme.listDirecao && filme.listDirecao?.map(function (ator) {
                  return (
                    <span key={ator}> {ator}.</span>
                  );
                })}
              </h3>
              <div className={styles.rating}>
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiFillStar />
                <AiOutlineStar />
                <span>  {filme.Gostaram}</span>
              </div>

              <div className={styles.tags}>
                {filme.listGenero && filme.listGenero?.map(function (genero) {
                  return (
                    <span key={genero}>{genero}</span>
                  );
                })}
              </div>


              <div className={styles.info}>
                <p>
                  {Sinopse}
                </p>
              </div>

              <div className={styles.cast}>
                <ul>
                  {filme.listAtores && filme.listAtores?.map(function (ator) {
                    return (
                      <li key={ator}><img src="https://recreio.uol.com.br/media/uploads/animacoes/bob_esponja_chorando_capa.jpg"></img></li>
                    );
                  })}
                </ul>
              </div>

            </div>


            {/*
            <div className={styles.details}>
              <h2>
                {filme.Titulo}
              </h2>
              <h3>
                Directed by
                {filme.listDirecao?.map(function (ator) {
                  return (
                    <span key={ator}>{ator}</span>
                  );
                })}
              </h3>
         


              <div className={styles.tags}>
                {filme.listGenero?.map(function (genero) {
                  return (
                    <span key={genero}>{genero}</span>
                  );
                })}
              </div>
              */}
            {/* <span>
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
               
              </div>

              <div>
                {filme.listAtores?.map(function (ator) {
                  return (
                    <div key={ator}>{ator}</div>
                  );
                })}
              </div>

           


            </div>
             */}
          </div>

        )
      })

      }
    </ol>
  )
}







export default ListPost;