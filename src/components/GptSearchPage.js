import GptMovieSuggestions from "./GptMovieSuggestions";
import GptSearchBar from "./GptSearchBar";

const GptSearchPage = () => {
    return (
        <div className="bg-img">
            <div className="gpt-search-page-container">
                <GptSearchBar />
                <GptMovieSuggestions />
            </div>

        </div>
    )
};

export default GptSearchPage;