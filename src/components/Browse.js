import React, { useEffect } from 'react';
import Header from './Header';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {
  const gptSearchActive = useSelector(store => store.gpt.gptSearchActive);
  useNowPlayingMovies();


  return (
    <div>
      <Header />
      {gptSearchActive
        ? <GptSearchPage />
        :
        <>
          <MainContainer />
          <SecondaryContainer />
        </>}
    </div>
  )
}

export default Browse;