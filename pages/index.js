import Home from '../screens/Home';
import React from 'react';

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



  return {
    props: {
      jogos: post
    },

  }

}

export default Home;