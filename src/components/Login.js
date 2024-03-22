import React from 'react';
import Header from './Header';
import { useState, useRef } from 'react';
import { validate } from '../utils/validate';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMsg, setErrorMsg] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  const toggleForm = () => setIsSignInForm(!isSignInForm);

  const handleSubmitBtnClick = () => {
    console.log(email.current.value, password.current.value);

    const msg = validate(email.current.value, password.current.value);
    console.log("msg: ", msg);
    setErrorMsg(msg);
  };

  return (
    <div>
      <Header />
      <div className='bg-img'>
        <div className='form-container'>
          <div className='sign-in-form'>
            <h1 className='sign-in__title'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
            <form onSubmit={(e) => e.preventDefault()}>
              <div className='email-section'>

                <input ref={email} type="email" placeholder="Email Address" />
              </div>
              <div className='password'>

                <input ref={password} type="password" placeholder='Password' />
              </div>

              <p className='error-msg'>{errorMsg}</p>

              <button className="sign-in__submit-btn" type="submit" onClick={handleSubmitBtnClick}>{isSignInForm ? "Sign In" : "Sign Up"}</button>
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