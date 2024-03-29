import React, { useEffect } from 'react';
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/redux/userSlice';
import { USER_AVATAR } from '../utils/constants';
import { toggleGptSearch } from '../utils/redux/GptSlice';
import { changeLanguage } from '../utils/redux/configSlice';
import { SUPPORTED_LANGS } from "../utils/languageConstants";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const userInfo = useSelector((store) => store.user);
  const gptSearchActive = useSelector(store => store.gpt.gptSearchActive);

  const handleLogoutClick = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      navigate("/error")
    });
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { displayName, email, uid } = user;
        dispatch(addUser({ displayName: displayName, email: email, uid: uid }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });

    //- (Hygiene Practice) - Unsubscribing the onAuthStateChanged() whenever the Header component unmounts. 
    return () => { unsubscribe() };
  }, []);

  const handleLanguageChange = (selectedVal) => {
    dispatch(changeLanguage(selectedVal));
    console.log(selectedVal);
  };

  return (
    <header>
      <div className='flex justify-between align-baseline'>
        <div>
          <img className="netflix-logo" src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
            alt="netflix-logo" />
        </div>

        {userInfo &&
          <div>
            {
              gptSearchActive &&
              (<select className='mr-3 lang-selector' onChange={(e) => handleLanguageChange(e.target.value)}>
                {
                  SUPPORTED_LANGS.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)
                }
              </select>)
            }
            <button onClick={handleGptSearchClick} className='gpt-search-btn mr-3'>
              {gptSearchActive ? "Home Page" : "GPT Search"}
            </button>
            <span className='text-white'>{userInfo.displayName}</span>
            <img className='m-3 inline-block' alt="user avatar" src={USER_AVATAR} />
            <button className='logout-btn' onClick={handleLogoutClick}>Log out</button>
          </div>
        }
      </div>

    </header >
  )
}

export default Header;