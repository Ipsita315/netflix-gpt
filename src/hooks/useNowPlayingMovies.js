import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../utils/redux/moviesSlice";
import { sampleMovies } from "../utils/sampleData";
import { useEffect } from "react";

//Following hook is fetching nowPlayingMovies and putting it into store.
const useNowPlayingMovies = () => {
    const dispatch = useDispatch();

    const getNowPlayingMovies = async () => {
        const data = await fetch("");
        const json = await data.json();
        console.log(json);
        dispatch(addNowPlayingMovies(json.results));
    };

    useEffect(() => {
        //getNowPlayingMovies();
        console.log(sampleMovies);
        dispatch(addNowPlayingMovies(sampleMovies.results));
    }, []);

};

export default useNowPlayingMovies;