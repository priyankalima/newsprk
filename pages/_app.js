import Head from 'next/head';
import '../styles/global.css'
import {auth} from '../firebase';
import {useEffect, useState} from 'react';




export default function MyApp({ Component, pageProps }) {
  const [user,setUser] = useState("");
  useEffect(()=>{
    auth.onAuthStateChanged(user=>{
    if(user) setUser(user)
    else setUser(null)
    
    })
  },[])


  return(
  	<>
      <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>NewsPRK</title>
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet" />
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/js/bootstrap.bundle.min.js" ></script>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"/>     
      <link rel="stylesheet" type="text/css" href="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.css"/>
      <script type="text/javascript" src="//cdn.jsdelivr.net/npm/slick-carousel@1.8.1/slick/slick.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js"></script>
	<script src="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/js/bootstrap.min.js"></script>
      </Head>
      

      <Component {...pageProps}  user={user}/>
      
    </>
  ) 
}
