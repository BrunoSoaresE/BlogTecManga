import Head from 'next/head';
import { ListPost } from '../screens/ListaPostCard';
import { useState } from 'react'


export default function Home(props) {
  const [query, setQuery] = useState('');

  const searchFilter = (array) => {
    if (query.length <= 1) {
      return array;
    } else {
      return array.filter(
        (el) => {
          if (el.Titulo != null) {     
            return el.Titulo.toLowerCase().includes(query.toLowerCase())
              || el.Empresa.toLowerCase().includes(query.toLowerCase())                     
              || el.listAtores.join(";").toLowerCase().includes(query.toLowerCase())
              || el.listDirecao.join(";").toLowerCase().includes(query.toLowerCase())
          }
        }
      )
    }
  }


  const filtered = searchFilter(props.listPost.filmes);

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
      <h1>Melhores filmes Marvel e DC - TecManga - {props.listPost.title}</h1>

      <input        value={query.value}        onChange={handleChange}        type='text' placeholder='Search...' />

        <ListPost filtered={filtered} ></ListPost>    


    
    </div>
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
      listPost: posts,
    },
    revalidate: 10/* apos 10 segundos, a proxima requicição ira atualizar o cache */

  };


}