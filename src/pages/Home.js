// import { x } from "@xstyled/styled-components";
// import Navbar from "../components/Navbar";
import MovieHome from "../containers/MovieHome";
import TvHome from "../containers/TvHome";
import Main from "../components/Layout/Main";

//bg="#171E31"
const Home = () => {
  return (
    <Main placeholder="Search for movies or TV series">
      <MovieHome />
      <TvHome />
    </Main>
  );
};

export default Home;

// return (
//   <x.div
//     display="flex"
//     w="100vw"
//     h="100vh"
//     flexDirection="row"
//     justifyContent="space-around"
//     alignContent="center"
//     // overflowX="hidden"
//     overflow="hidden"

//   >
//     <x.div w={0.1}>
//       <Navbar />
//     </x.div>
//     <x.div w={0.9} overflowY="scroll">
//       <MovieHome />
//       <TvHome />
//     </x.div>
//   </x.div>
// )
