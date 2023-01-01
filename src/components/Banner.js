import { x } from "@xstyled/styled-components";
import axios from "axios";
import { useQuery } from "react-query";
import MovieCard from "./MovieCard";
import "./Styles.css";

const Banner = ({ title, searchTitle }) => {
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

  return (
    <x.div color="blue-gray-50" mt={4} mb={{_:6, md:10}} h="100%" w="100%" overflow={{ _: "hidden", lg: 'visible' }}>
      
      <x.h1 fontFamily="outfit" fontSize="2xl">{title.toUpperCase()}</x.h1>
      <x.div
        display="flex"
        overflowX="scroll"
        justifyContent="space-between"
        maxWidth="100%"
        alignItems="flex-center"
        p={8}
        pb={1}
        className="movies__banner"
        position="relative"
        columnGap={{_:"16px", sm:"40px"}}
        
      >
        {/* "h-scroll relative flex gap-x-4 overflow-x-scroll sm:gap-x-10 2xs:mt-2 */}
        {data.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </x.div>
    </x.div>
  );
};

export default Banner;
