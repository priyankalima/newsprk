import { useEffect, useState} from 'react';
import Link from 'next/link';
import Style from  '../styles/signup.module.css';
import firebase from 'firebase/app';
import 'firebase/auth';


const LogIn =()=>{
    
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    // const [state,setState] = useState(null);

    // Your web app's Firebase configuration
   var firebaseConfig = {
    apiKey: "AIzaSyDrZtfVz5VX5S71QY9--S-Wu4FbtKof1YA",
    authDomain: "blogapp-23fab.firebaseapp.com",
    projectId: "blogapp-23fab",
    storageBucket: "blogapp-23fab.appspot.com",
    messagingSenderId: "17159320082",
    appId: "1:17159320082:web:62a0a7dbfe448e2cf31ecb"
  };
  // Initialize Firebase
  if(!firebase.apps.length) firebase.initializeApp(firebaseConfig);
  
 
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(email,password);
        // clearInput();
       document.querySelector('#int').value = null;
       document.querySelector('#int2').value = null;

       firebase.auth().signInWithEmailAndPassword(email,password)
       .then((user)=>{
        
         alert(`welcome ${email}`);
         
       })
       .catch((err)=>{
         alert('not sing in pls try again!1',err)
       })
    }
    

    return(

        <>
        
      <form className={Style.form} onSubmit={handleSubmit}>
      <h5 style={{color:"#111",textAlign:'center',padding:'10px'}}>Log In Here!</h5>
      <div className={Style.formContent}>
      <div className={Style.label}><label>Email:</label></div>
      <input 
      id="int"
      className={Style.input} 
      type="email" 
      size="40" 
      value={email}
      onChange={(e)=>setEmail(e.target.value)} 
      placeholder="email"/>
     </div>
     <div className={Style.formContent}>
      <div className={Style.label}><label>Password:</label></div>
      <input
      id="int2" 
      className={Style.input} 
      type="password" 
      size="40"
      value={password}
      onChange={(e)=>setPassword(e.target.value)} 
      placeholder="password"/>
     </div>
     <div className={Style.formContent}>
      <button  type="submit"  className={Style.button}>LogIn</button>
     </div>
     <div style={{color:'#111'}}>
         If Your New Create New Account Here <Link href="/signup"><a style={{textDecoration:'none',color:'#289278'}} href="">SignUp</a></Link> 
         <br/><a style={{textDecoration:'none',color:'#289278'}} href="">Forgot Password?</a>
      </div>
  </form>

          

        </>
    )
}
export default LogIn;


