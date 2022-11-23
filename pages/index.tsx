import Home from '../screens/Home';

export async function getStaticProps() {
  const res = await fetch('http://localhost:3000/api/jogos');

 const post = await res.json();
  return {
    props: {
      jogos: post
    }
  }
  
}

export default Home;