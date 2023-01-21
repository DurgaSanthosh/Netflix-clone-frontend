import React, { useEffect, useState } from "react";
import "./Rowcards.css";
import YouTube from "react-youtube";
import { API_KEY, imageUrl } from "../../constants/Constants";
import axios from "../../axios";
function Rowcards(props) {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios.get(props.url).then((response) => {
      console.log(response.data);
      setMovie(response.data.results);
    });
  }, []);
  const opts = {
    height: "390",
    width: "640",
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 0,
    },
  };
  const movieClick = (id) => {
    axios
      .get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        if (response.data.results.length != 0) {
          setUrlId(response.data.results[0]);
        } else {
          console.log(response.data.results);
        }
      });
  };
  const [urlId, setUrlId] = useState();
  return (
    <div>
      <div className="row">
        <h2>{props.title}</h2>
        <div className="posters">
          {movie.map((obj) => (
            <img
              onClick={() => movieClick(obj.id)}
              className={props.isSmall ? "small_poster" : "poster"}
              src={`${imageUrl + obj.backdrop_path}`}
              alt="poster1"
            />
          ))}
        </div>
        {urlId && <YouTube videoId={urlId.key} opts={opts} />}
      </div>
    </div>
  );
}

export default Rowcards;
