import { useState } from 'react';
import Link from 'next/link';
import firebase from 'firebase/app';
import 'firebase/auth';
import Style from  '../styles/signup.module.css';


const SignUp =()=>{
    

    const [username,setUsername] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [confirmPass,setConfirmPass] = useState("");
    
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


     
       
    const handleSubmit= (e)=>{
    e.preventDefault();
    console.log(username,email,password,confirmPass);
    
    
    {
      password === confirmPass?
      firebase.auth().createUserWithEmailAndPassword(email,password)
      .then((user)=>{
        console.log(user)
        document.getElementById('success').innerHTML ="You Have SignUp Successfull!! please login to process"
      })
      .catch((err)=>{
        console.log(err)
        document.getElementById('success').innerHTML ="Your Already Exist please LogIn"
      })
      :
      alert('sorry check your password')
    
   
    }
}
   
    
    return(

        <>
           <form className={Style.form} onSubmit={handleSubmit}>
               <h5 style={{color:"#111",textAlign:'center',padding:'10px'}}>Sign Up Here!</h5>
           <div className={Style.formContent}>
               <div className={Style.label}><label>Username:</label></div>
               <input 
               id="int"
               className={Style.input} 
               type="text" 
               size="40"
               name="username"
               value={username}
               onChange={(e)=>setUsername(e.target.value)}
               placeholder="username"/>
              </div>
               <div className={Style.formContent}>
               <div className={Style.label}><label>Email:</label></div>
               <input 
               ind="int2"
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
               id="int3"
               className={Style.input} 
               type="password" 
               size="40" 
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
               placeholder="password"/>
              </div>
              <div className={Style.formContent}>
               <div className={Style.label}><label>Confirm-Password:</label></div>
               <input 
               id="int4"
               className={Style.input} 
               type="password" 
               size="40" 
               value={confirmPass}
               onChange={(e)=>setConfirmPass(e.target.value)}
               placeholder="Confirm password"/>
              </div>
              <div className={Style.formContent}>
               <input type="submit" className={Style.button} value="Submit"/>
              </div>
              <div style={{color:'#111'}}>
                  Already a Member <Link href="/components/Dashbord"><a style={{textDecoration:'none',color:'#289278'}} href="">Login</a></Link> 
                  <br/><a style={{textDecoration:'none',color:'#289278'}} href="">Forgot Password?</a>
               </div>
               <p id="success" style={{color:'green'}}></p>
           </form>

        </>
        
        
    )
  
    
}

export default SignUp;


