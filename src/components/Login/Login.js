import React, { useState } from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';
import app from '../../Firebase/Firebase';
import { BrowserRouter } from 'react-router-dom';
import { createBrowserHistory } from 'history';



const auth = getAuth(app);

const Login = () => {
       const [user, setUser] = useState([])
       console.log(user);
       const { uid ,email} = user
       const [useremail , setEmail] = useState('')
       const [password , setPassword] = useState('')
       console.log(email,password);

       const signIn =(e)=>{
              signInWithEmailAndPassword(auth, useremail, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setUser(user)
  })
  .catch((error) => {
       const errorCode = error.code;
       const errorMessage = error.message;
       alert(errorCode ,errorMessage )
  });
  e.preventDefault()


       }

       const signinemail =(e) => {
              setEmail(e.target.value)
       }
       const signinpassword =(e) => {
              setPassword(e.target.value)
       }
          return (
                 <>
                 {

                     uid ? <> <h1> {uid} </h1> <h1> {email} </h1> </> : <>
                     <div className='signup'>
               <h2>Log In</h2>
           <div className='input-fileds'>
                  
                 <form onSubmit={signIn}>
                 <label htmlFor="email">Your email</label>
                  <input onBlur={signinemail} type="email" required />

                  <label  htmlFor="password">Your Password</label>
                  <input onBlur={signinpassword} type="password" required />

                  <input className='submitbtn' type="submit" value="Log in" />
                 </form>

                         </div>
                  
                  <div className='or'>
                                          <p><small>Create a Account Now <Link to={'/signup'}>Create Account</Link></small></p>
                            </div>
                            <div className="signinwith">
                                   <img src="https://img.icons8.com/fluency/2x/google-logo.png" alt="" />
                                   <img src="https://img.icons8.com/ios-filled/2x/github.png" alt="" />
                                   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
                                   <img src="https://img.icons8.com/glyph-neue/2x/mac-os.png" alt="" />
                            </div>

                     
                  
         
       </div>
                     
                     
                     </>
                 }
                 </>
               
          );
};


export default Login ;