import React from "react";
import { x } from "@xstyled/styled-components";

const Movie = ({ item }) => {
  return (
    <x.div
      w={{ xs: 160, sm: 200, md: 240, lg: 280 }}
      position="relative"
      p={2}
      cursor="pointer"
      display="inline-block"
      // h="200px"
      mx={8}
    >
      <x.img
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item?.title}
        // w="100%"
        // h="100%"
        display="block"
      />
    </x.div>
  );
};

export default Movie;


