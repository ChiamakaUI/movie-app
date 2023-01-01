import { x } from "@xstyled/styled-components";
const DisplayedMovie = ({ movie, width }) => {
  return (
    <x.div mb={4} maxWidth={width} color="blue-gray-50">
      <x.img
        src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
        alt={movie?.title}
        borderRadius="lg"
        // w={350}
        w="100%"
      />
      <x.div>
        <x.p fontFamily="outfit">{movie?.release_date.slice(0, 4)}</x.p>
        <x.p fontFamily="outfit">{movie?.title || movie?.original_title}</x.p>
      </x.div>
    </x.div>
  );
};

export default DisplayedMovie;

//mb-4 grow basis-1/5 2xs:w-[130px] xs:w-full cursor-pointer
//flexGrow={1} col={1 / 2}
