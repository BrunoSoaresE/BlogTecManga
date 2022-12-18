import Head from 'next/head';
import styles from '../styles/Login.module.css';
import { useForm } from 'react-hook-form';
import {useContext} from 'react';
import {AuthContext} from '../src/contexts/AuthContext';

function Login() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const { signIn } = useContext(AuthContext);

  async function handleSingIn(itens: any) {

    try{

      await signIn(itens)
      .then((values)=>{
        console.log('values=>',values);
      })
      .catch((err) => {
        console.log('err =>',err);
      });

    }catch(err){
      console.log('err 123 =>',err);
    }
    


  }



  return (
    <div className={styles.container}>
      <Head>
        <title>TecManga - Veja como ter um site sem preocupações</title>
        <meta property="og:title" content="TecManga - Sites personalizados" />

        <meta name='description' content='Seu site está próximo de se tornar realidade a TecManga vai ajuda-lo a tornar seu sonho realidade sem dor de cabeça' />
        <meta property="og:description" content="Seu site está próximo de se tornar realidade a TecManga vai ajuda-lo a tornar seu sonho realidade sem dor de cabeça." />

        <meta property="og:image" content="/assets/logos/LogoColorida.png" />
        <link rel='icon' href='/assets/logos/LogoColorida.png' />

        <meta name="author" content="TecManga" />
        <meta name="copyright" content="© 2022 TecManga" />

        <meta property='og:url' content='tecmanga.com.br/' />
        <meta property='og:type' content='website' />
        <meta http-equiv="content-language" content="pt-br, en-US" />*/
      </Head>


      <main className={styles.main}>
   


        <div className={styles.LoginCard}>

          <h1>Login</h1>
          <form onSubmit={handleSubmit(handleSingIn)}>
       
            <div>
              <input {...register("email")} placeholder=" " required type="email"></input>
              <span>Email</span>
            </div>
            <div>
              <input {...register("senha")} placeholder=" " required type="password"></input>
              <span>Senha</span>
            </div>





            <button type='submit'>
              <span>Entrar</span>
            </button>
            </form>
        </div>



      </main>



    </div>
  )
}

export function getStaticProps() {/* roda somente 1 vez no servidor */
  const staticDate = new Date();
  const staticDateString = staticDate.toString();


  return {
    props: {
      staticDateString,
    },
    revalidate: 10/* apos 10 segundos, a proxima requicição ira atualizar o cache */
  }
}


export default Login