import Home from '../screens/Home';

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/jogos');

 const post = await res.json();
  return {
    props: {
      jogos: post
    },
    revalidate: 3600/* apos 10 segundos, a proxima requicição ira atualizar o cache */
    
  }
  
}

export default Home;