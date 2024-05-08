import { useDispatch } from "react-redux";
import { TMDB_API_options } from "../utils/constants";
import { addTrailerVideo } from "../utils/redux/moviesSlice";
import { useEffect } from "react";

const useMovieTrailer = (movieId) => {
    const dispatch = useDispatch();
    const getTrailerVideo = async () => {
        const data = await fetch(
            "https://api.themoviedb.org/3/movie/" + movieId + "/videos?language=en-US",
            TMDB_API_options
        );

        const json = await data.json();
        console.log("Videos response : ", json);
        const filterData = json.results.filter(obj => obj.type === "Trailer");
        const trailer = filterData.length > 0 ? filterData[0] : json.results[0];
        dispatch(addTrailerVideo(trailer));
    };

    useEffect(() => {
        getTrailerVideo();
    }, []);
}

export default useMovieTrailer;