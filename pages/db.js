import { useEffect, useState } from 'react';

import { useForm } from 'react-hook-form';
import Head from 'next/head';
import styles from '../styles/Home.module.css';


export default function Home() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();

  

  const myFunc = (itens) => {


    var uid = generateUUID();
    var novoUsuario = `  {
                          "nome": "bruno",
                          "email": "bruno@bruno.com",
                          "celular": "31 983077711",
                          "_id": "9b3effd4-7844-11ed-a1eb-0242ac120002"
                        }`


    savePosts(novoUsuario);

  }


  return (
    <div className={styles.pai}>
      <Head>
        <title>TecManga - Veja como ter um site sem preocupações</title>
        <meta property="og:title" content="TecManga - Sites personalizados" />
        <meta property='og:url' content='tecmanga.com.br/' />
        <meta property='og:type' content='website' />
        <meta http-equiv="content-language" content="pt-br, en-US" />*/
        </Head>
        <h1> Newsletter</h1>
  
        <br></br>
        <br></br>
        <hr></hr>
  
        <div className={styles.newsletter}>
          <p>ASSINE A NOSSA NEWSLETTER</p>
          <form onSubmit={handleSubmit(myFunc)}>
            <div>
              <input {...register("Nome")} placeholder=" " required></input>
              <span>Nome</span>
            </div>
            <div>
              <input {...register("Email")} placeholder=" " required type="email"></input>
              <span>Email</span>
            </div>
            <div>
              <input {...register("Telefone")} placeholder=" " required minLength={8} title="Número de telefone precisa ser no formato (99) 9999-9999" type="phone"></input>
              <span>Whatsapp/Telefone</span>
            </div>
  
  
  
  
  
            <button type='submit'>
              <span>Receber e-book</span>
            </button>
          </form>
  
  
        </div>
  
  
        <hr></hr>
        <br></br>
        <br></br>
  
       
  
  
        <br></br>
  
      </div>
    )
  }
  /*
  
  async function savePosts(Item) {
    console.log("resulttt123 ->", process.env.URL_API)
  
    const resposta = await fetch("http://localhost:3000/" + 'api/bd', { method: "POST", body: Item });
    const post = await resposta.json();
    console.log("resulttt ->", post)
    //return post?.data?.users;
  }
  
  
  async function loadPosts() {
   // const resposta = await fetch(process.env.URL_API + 'api/bd', { method: "GET" });
  //  const post = await resposta.json();
   // return post?.data?.users;
  }
  
  export async function getStaticProps() {
    const posts = await loadPosts();
  
    return {
      props:
      {
        usuarios: posts,
      },
      revalidate: 60
    };
  
  
  }
  */
  function generateUUID() { // Public Domain/MIT
    var d = new Date().getTime();//Timestamp
    var d2 = ((typeof performance !== 'undefined') && performance.now && (performance.now() * 1000)) || 0;//Time in microseconds since page-load or 0 if unsupported
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = Math.random() * 16;//random number between 0 and 16
      if (d > 0) {//Use timestamp until depleted
        r = (d + r) % 16 | 0;
        d = Math.floor(d / 16);
      } else {//Use microseconds since page-load if supported
        r = (d2 + r) % 16 | 0;
        d2 = Math.floor(d2 / 16);
      }
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
  }
  
  
  
  
  
