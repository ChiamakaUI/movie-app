import React from "react";
import { x } from "@xstyled/styled-components";
import axios from "axios";
// import requests from "../Requests";
import { useQuery } from "react-query";
import DisplayedShows from "./DisplayedShows";
const TvShowcase = ({ title, searchTitle }) => {
    const { data, isLoading } = useQuery([`${title}`], () => {
        return axios
          .get(searchTitle)
          .then((res) => res.data.results)
          .catch((err) => console.log(err.message));
      });
      console.log(data);
      if (isLoading) {
        return <x.h1>loading</x.h1>;
      }
    
      const showcaseMovies = data.slice(0, 6);
      console.log(showcaseMovies);
    
      return (
        <x.div mt={8} color="blue-gray-50" w="90%" maxW="1296px" mx={10} fontFamily="outfit">
          <x.div>
            <x.div display="flex" alignItems="flex-center">
              <x.p
                fontSize="lg"
                fontFamily="outfit"
                textTransform="capitalize"
                mb={4}
              >
                {title}
              </x.p>
              <x.button borderWidth={2} p={2}>
                Tv Series
              </x.button>
            </x.div>
          </x.div>
          <x.div
            display="flex"
            w="100%"
            justifyContent="space-between"
            row
            flexWrap="wrap"
          >
            {showcaseMovies.map((show, index) => (
              <DisplayedShows
              show={show}
                key={show.id}
                width={index >= 4 ? "500px" : "250px"}
                // height={index >= 4 ? "280px" : "140px"}
              />
            ))}
          </x.div>
        </x.div>
      );
}

export default TvShowcase

