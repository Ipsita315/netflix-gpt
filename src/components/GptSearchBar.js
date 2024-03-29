import React from 'react';
import { lang } from '../utils/languageConstants';
import { useSelector } from 'react-redux';

const GptSearchBar = () => {
    const selectedLang = useSelector(store => store.config.lang);
    return (
        <div className='gpt-search__container'>
            <form className='flex'>
                <input type="text" placeholder={lang[selectedLang]?.gptSearchPlaceholder} />
                <button className='gpt-search__submit'>{lang[selectedLang]?.search}</button>
            </form>
        </div>
    )
}

export default GptSearchBar;