import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { TMDB_API_options, UPCOMING_MOVIES_URL } from "../utils/constants";
import { addUpcomingMovies } from "../utils/redux/moviesSlice";

const useUpcomingMovies = () => {
    const dispatch = useDispatch();

    const getUpcomingMovies = async () => {
        const data = await fetch(UPCOMING_MOVIES_URL,TMDB_API_options);
        const json = await data.json();
        console.log("upcoming response=",json);
        dispatch(addUpcomingMovies(json.results));
    };

    useEffect(() => {
        getUpcomingMovies();
    }, []);

};

export default useUpcomingMovies;