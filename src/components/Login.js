import React from 'react';
import Header from './Header';
import { useState } from 'react';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleForm = () => setIsSignInForm(!isSignInForm);


  return (
    <div>
      <Header />
      <div className='bg-img'>
        <div className='form-container'>
          <div className='sign-in-form'>
            <h1 className='sign-in__title'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <form>
              <div className='email-section'>

                <input type="email" placeholder="Email Address" />
              </div>
              <div className='password'>

                <input type="password" placeholder='Password' />
              </div>

              <button className="sign-in__submit-btn" type="submit">{isSignInForm ? "Sign In" : "Sign Up"}</button>
            </form>
            <div className='form-footer cursor-pointer' onClick={toggleForm}>
              {isSignInForm ? "New to Netflix? Sign up now." : "already registered? Sign in now"}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login;