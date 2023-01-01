import { x } from "@xstyled/styled-components";

const TvCard = ({ show }) => {
  return (
    <x.div
    position="relative"
    minWidth="450px"
    h="230px"
    bg="gray-300"
    border={1}
    borderColor="gray-900"
    mx={4}
    borderRadius="lg"
    fontFamily="outfit"
  >
    <x.img
      objectFit="cover"
      h="100%"
      w="100%"
      src={`https://image.tmdb.org/t/p/original/${show?.poster_path}`}
      alt={show?.name}
      borderRadius="lg"
    />
    <x.div position="absolute" bottom={10} left={10}>
      {/* <x.p fontFamily="outfit">{show?.first_air_date.slice(0,4)}</x.p> */}
      <x.h3 fontFamily="outfit">
        {show?.name || show?.original_name}
      </x.h3>
    </x.div>
  </x.div>
  )
}

export default TvCard
