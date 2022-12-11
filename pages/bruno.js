import Head from 'next/head';
import { useState } from 'react'
import styles from '../styles/Home.module.css';


export default function Home(props) {
  const [query, setQuery] = useState('');

  const searchFilter = (array) => {
    if (query.length <= 1) {
      return array;
    } else {
      return array.filter(
        (el) => {
          if (el.caption != null) {
            return el.caption.toLowerCase().includes(query.toLowerCase())
          }
        }
      )
    }
  }

  console.log("teste => ", props);
  console.log("teste1 => ", props?.listPost);
  console.log("teste2 => ", props?.listPost?.data);

  const filtered = searchFilter(props?.listPost?.data);



  const handleChange = (e) => {
    if (e && e.target)
      setQuery(e.target.value)
  }



  return (
    <div>
      <Head>
        <title>TecManga - Veja como ter um site sem preocupações</title>
        <meta property="og:title" content="TecManga - Sites personalizados" />

        {/* <meta name='description' content='Seu site está próximo de se tornar realidade a TecManga vai ajuda-lo a tornar seu sonho realidade sem dor de cabeça' />
        <meta property="og:description" content="Seu site está próximo de se tornar realidade a TecManga vai ajuda-lo a tornar seu sonho realidade sem dor de cabeça." />

        <meta property="og:image" content="/assets/logos/LogoColorida.png" />
        <link rel='icon' href='/assets/logos/LogoColorida.png' />

        <meta name="author" content="TecManga" />
        <meta name="copyright" content="© 2022 TecManga" />
  */}
        <meta property='og:url' content='tecmanga.com.br/' />
        <meta property='og:type' content='website' />
        <meta http-equiv="content-language" content="pt-br, en-US" />*/
      </Head>
      <h1>Insta Bruno</h1>

      <input value={query.value} onChange={handleChange} type='text' placeholder='Search...' />


      <ol className={styles.ListPost}>
        {filtered && filtered?.map((post, indice) => {

          return (
            <div key={post.id} className={styles.Post} >
              <div className={styles.Poster}>
               <img src={post.media_url} alt="Logo TecManga" />
                <p>{post.caption}</p>
                <p>{new Date(post.timestamp).toUTCString()}</p>
              </div>
            </div>)
        })

        }
      </ol>



    </div>
  )
}

async function loadPosts() {
  const resposta = await fetch(process.env.URL_API + 'api/instagram');
  const post = await resposta.json();

  console.log("post => ", post);

  return post
}

export async function getStaticProps() {
  const posts = await loadPosts();

  console.log("posts => ", posts);

  return {
    props:
    {
      listPost: posts,
    },
    revalidate: 60/* apos 10 segundos, a proxima requicição ira atualizar o cache */
  };


}