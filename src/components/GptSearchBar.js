import React, { useRef } from 'react';
import { lang } from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const selectedLang = useSelector(store => store.config.lang);
    const searchText = useRef(null);

    const handleGptSearch = () =>{
        console.log(searchText.current.value);
    };

    return (
        <div className='gpt-search__container'>
            <form className='flex' onSubmit={e=>e.preventDefault()}>
                <input ref={searchText} type="text" placeholder={lang[selectedLang]?.gptSearchPlaceholder} />
                <button onClick={handleGptSearch} className='gpt-search__submit'>{lang[selectedLang]?.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;