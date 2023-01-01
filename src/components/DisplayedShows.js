import { x } from "@xstyled/styled-components";

const DisplayedShows = ({ show, width }) => {
  return (
    <x.div mb={4} maxWidth={width} color="blue-gray-50">
    <x.img
      src={`https://image.tmdb.org/t/p/original/${show?.poster_path}`}
      alt={show?.name}
      borderRadius="lg"
      // w={350}
      w="100%"
      h="100%"
    />
    <x.div>
      {/* <x.p fontFamily="outfit">{show?.first_air_date.slice(0, 4)}</x.p> */}
      <x.p fontFamily="outfit">{show?.name || show?.original_name}</x.p>
    </x.div>
  </x.div>
  )
}

export default DisplayedShows