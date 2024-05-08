import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/redux/moviesSlice";
import { sampleMovies } from "../utils/sampleData";
import { useEffect } from "react";
import { NOW_PLAYING_MOVIES_API_URL, TMDB_API_options } from "../utils/constants";

//Following hook is fetching nowPlayingMovies and putting it into store.
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch(NOW_PLAYING_MOVIES_API_URL,TMDB_API_options);
        const json = await data.json();
        console.log("Now playging movies response=",json);
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        getNowPlayingMovies();
        // console.log(sampleMovies);
         //dispatch(addNowPlayingMovies(sampleMovies.results));
    }, []);

};

export default useNowPlayingMovies;