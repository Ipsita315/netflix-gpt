import { useDispatch } from "react-redux";
import { addTopRatedMovies } from "../utils/redux/moviesSlice";

import { useEffect } from "react";
import { TMDB_API_options, TOP_RATED_MOVIES_URL } from "../utils/constants";

const useTopRatedMovies = () => {
    const dispatch = useDispatch();

    const getTopRatedMovies = async () => {
        const data = await fetch(TOP_RATED_MOVIES_URL,TMDB_API_options);
        const json = await data.json();
        console.log("Top Rated response=",json);
        dispatch(addTopRatedMovies(json.results));
    };

    useEffect(() => {
        getTopRatedMovies();
    }, []);

};

export default useTopRatedMovies;