import React from 'react';
import { auth } from "../utils/firebase";
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  const handleLogoutClick = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/");
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  };

  return (
    <header className='flex justify-between align-baseline'>
      <div>
        <img className="netflix-logo" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="netflix-logo" />
      </div>
      <div>
        <button className='logout-btn' onClick={handleLogoutClick}>Log out</button>
      </div>

    </header>
  )
}

export default Header;