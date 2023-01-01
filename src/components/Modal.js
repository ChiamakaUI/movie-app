import React, { useEffect, useState } from "react";
import { x } from "@xstyled/styled-components";
import { AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios";
import ReactPlayer from "react-player/lazy";

const Modal = ({ movie }) => {
  const [trailer, setTrailer] = useState("");
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const getTrailer = async () => {
      const res = await axios.get(
        `https://api.themoviedb.org/3/${
          movie?.media_type === "tv" ? "tv" : "movie"
        }/${movie?.id}?api_key=${
          process.env.REACT_APP_IMDB_API_KEY
        }&language=en-US&append_to_response=videos`
      );
      const data = await res.data;
      if (data?.videos) {
        const index = data.videos.results.findIndex(
          (element) => element.type === "Trailer"
        );
        setTrailer(data.videos?.results[index]?.key);
      }
      if (data?.genres) {
        setGenres(data.genres);
      }
    };
    getTrailer();
  }, [movie]);
  console.log(genres)
  return (
    <x.div
      zIndex={100}
      position="fixed"
      top={0}
      left={0}
      // maxHeight="100%"
      // maxWidth="100%"
      // overflow="auto"
      // bg="rgba(0, 0, 0, 0.5)"
      w="100vw"
      h="100vh"
      bg="red"
    >
      <x.div position="fixed" top="5%" right="5%">
        <AiOutlineCloseCircle
          style={{ fontSize: "2.5rem", cursor: "pointer", color: "white" }}
        />
      </x.div>
      <x.div
        bg="#fff"
        boxShadow
        maxWidth="60%"
        mx={8}
        my={8}
        maxHeight="550px"
      >
        <ReactPlayer
          url={`https://www.youtube.com/watch?v=${trailer}`}
          width="100%"
          height="100%"
          style={{ position: "absolute", top: "0", left: "0" }}
          playing
          muted={true}
        />
       
      </x.div>
    </x.div>
  );
};

export default Modal;
