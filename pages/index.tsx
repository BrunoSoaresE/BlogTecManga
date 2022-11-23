import Home from '../screens/Home';

export async function getStaticProps() {
  const dadosDaAPI = await fetch('http://localhost:3000/api/jogos')
  .then((res) => {
    if(res.ok){
      return res.json();
    }
  }).then((res) =>{
    return res
  })
  

  return {
    props: {
      jogos: dadosDaAPI.games
    }
  }
  
}

export default Home;