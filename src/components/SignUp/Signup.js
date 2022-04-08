import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { createUserWithEmailAndPassword, FacebookAuthProvider, getAuth, GithubAuthProvider, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from '../../Firebase/Firebase';
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const gitprovider = new GithubAuthProvider();
const fbprovider = new FacebookAuthProvider();

const Signup = () => {
    const [user, setUser] = useState([])
    const { uid } = user

    // Menual Sign Up Setting
    const [dispalyName, setDispalyName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [userfirstpassword, setUserepassword] = useState('')
    const [checkPassword, setConfirmPassword] = useState('')


    const username = (e) => {
        setDispalyName(e.target.value)
    }

    const useremail = (e) => {
        setEmail(e.target.value)
    }
    const userpassword = (e) => {
        setUserepassword(e.target.value)
    }

    const confirmPassword = (e) => {
        setConfirmPassword(e.target.value)
    }


    const submitform = (e) =>{
        // Password Filtering 
        if (checkPassword === userfirstpassword) {
            setPassword(checkPassword)
        }
        else {
            document.getElementById('pass').innerText='Password Not Mached !!!!'
        }
        console.log(dispalyName,email,password);

        createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    setUser(user)
  })
  .catch((error) => {
   console.log(error);
  });

        e.preventDefault()
}

    // Google Sign in Setting

    const googleClick = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                const user = result.user;
                setUser(user)
            }).catch((error) => {
                console.log(error);
            });
    }
    // Github Sign in setting
    const githubClick = () => {
        signInWithPopup(auth, gitprovider)
            .then((result) => {
                const user = result.user;
                setUser(user)
            }).catch((error) => {
                console.log(error);
            });
    }
    // FaceBook Sign in Settings
    const facebookClick = () => {
        signInWithPopup(auth, fbprovider)
            .then((result) => {
                const user = result.user;
                setUser(user)
            })
            .catch((error) => {
                console.log(error);
            });



    }

    return (<>
        {uid ? <>
            <h2>Your Account Has been Created</h2>
            <Link to={'/login'}>Go To Login</Link>
        </> :


            <div className='signup'>
                <h2>Create account </h2>
                <div className='input-fileds '>

                    <form onSubmit={submitform}>
                        <label htmlFor="text" >Your Name</label>
                        <input onBlur={username} type="text" required />

                        <label htmlFor="email">Your Email Address</label>
                        <input onBlur={useremail} type="email" required />

                        <label htmlFor="email">Password</label>
                        <input onBlur={userpassword} type="password" required />

                        <label htmlFor="email">Re-type Your Password</label>
                        <input onBlur={confirmPassword} type="password" required />
                        <p id="pass"></p>
                        <input className='submitbtn' type="submit" value="Continue" />
                    </form>

                    <div className='or'>
                        <p><small>I Have a Accout <Link to={'/login'}>Login</Link></small></p>
                    </div>
                    <div className="signinwith">
                        <img onClick={googleClick} src="https://img.icons8.com/fluency/2x/google-logo.png" alt="" />
                        <img onClick={githubClick} src="https://img.icons8.com/ios-filled/2x/github.png" alt="" />
                        <img onClick={facebookClick} src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/1024px-Facebook_Logo_%282019%29.png" alt="" />
                        <img src="https://img.icons8.com/glyph-neue/2x/mac-os.png" alt="" />
                    </div>
                </div>
            </div>}
    </>
    );
};

export default Signup;