import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from './firebase'
import {ReactComponent as KodiusMarketLogo} from './kodiusMarket3.svg';
import './Login.css'

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signIn = e => {
    e.preventDefault();

    // Firebase Login

    auth
        .signInWithEmailAndPassword(email, password)
        .then(auth => {
          navigate('/')
        })
        .catch(error => alert(error.message))
  }

  const register = e => {
    e.preventDefault();

    auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          // it successfully create a new user with email and password
          if (auth) {
            navigate('/')
          }
        })
        .catch(error => alert(error.message))

    // Firebase Register
  }

  return (
    <div className="login">
      <Link to="/">
        <KodiusMarketLogo className='header__logo'/>
      </Link>

      <div className='login__container'>
        <h1>Sign in</h1>

        <form>
          <h5>E-mail</h5>
          <input type="text" value={email} onChange={e => setEmail(e.target.value)} />

          <h5>Password</h5>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        </form>

        <button type="submit" onClick={signIn} className='login__signInButton'>Sign in</button>

        <p>
          By signing in you agree to the Kodius Market Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
        </p>

        <button onClick={register} className='login__registerButton'>Create your Kodius Account</button>

      </div>
    </div>
  )
}

export default Login