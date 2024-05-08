import { useEffect } from "react";
import { POPULAR_MOVIES_API_URL, TMDB_API_options } from "../utils/constants";
import { useDispatch } from "react-redux";
import { addPopularMovies } from "../utils/redux/moviesSlice";

const usePopularMovies = () => {
    const dispatch = useDispatch();

    const getPopularMovies = async () => {
        const data = await fetch(POPULAR_MOVIES_API_URL, TMDB_API_options);
        const json = await data.json();
        console.log("Popular movies: ",json);
        dispatch(addPopularMovies(json.results))
    };

    useEffect(() => {
        getPopularMovies();
    }, []);
};

export default usePopularMovies;