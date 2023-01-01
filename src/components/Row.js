import React from "react";
import { x } from "@xstyled/styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Movie from "./Movie";

const Row = ({ title, fetchURL, rowID }) => {
  const { data, isLoading } = useQuery([`${title}`], () => {
    return axios
      .get(fetchURL)
      .then((res) => res.data.results)
      .catch((err) => console.log(err.message));
  });

  if (isLoading) {
    return <x.h1>loading</x.h1>;
  }
  console.log(data);
  
  const slideLeft = () => {
    const slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft - 500;
  };
  const slideRight = () => {
    const slider = document.getElementById('slider' + rowID);
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <>
      <x.h2 p={4} color="gray-50" fontWeight="bold">
        {title}
      </x.h2>
      <x.div position="relative" display="flex" alignItems="flex-center">
        <MdChevronLeft
          onClick={slideLeft}
          // className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          position="absolute"
          size={40}
        />
        <x.div id={"slider" + rowID} w="100%" overflowX="scroll" position="relative" display="flex" justifyContent="space-between">
          {data.map((movie) => (
            <Movie key={movie.id} item={movie} />
          ))}
        </x.div>
        <MdChevronRight
          onClick={slideRight}
          // className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block'
          size={40}
        />
      </x.div>
    </>
  );
};

export default Row;

