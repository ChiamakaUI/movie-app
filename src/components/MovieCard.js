import React from "react";
import { x } from "@xstyled/styled-components";

const MovieCard = ({ movie }) => {
  return (
    <x.div
      position="relative"
      // minWidth="450px"
      // h="230px"
      // bg="gray-300"
      // border={1}
      // borderColor="gray-900"
      // mx={4}
      borderRadius="lg"
      fontFamily="outfit"
      w="100%"
    >
      <x.div position="relative" w="100%" borderRadius="lg">

      <x.div position="relative" h={{_: "140px", sm: "230px"}} w={{_: "240px", sm: "470px"}}
      >
      {/* relative h-[140px] w-[240px] sm:h-[230px] sm:w-[470px]">display: block; overflow: hidden; width: initial; height: initial; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; inset: 0px */}
      <x.img
        objectFit="cover"
        h="100%"
        w="100%"
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
        borderRadius="lg"
      />
      </x.div>
     
      <x.div position="absolute" bottom={10} left={10}>
        <x.p fontFamily="outfit">{movie?.release_date.slice(0,4)}</x.p>
        <x.h3 fontFamily="outfit">
          {movie?.title || movie?.original_title}
        </x.h3>
      </x.div>
      </x.div>
    </x.div>
  );
};

export default MovieCard;
