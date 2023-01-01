import React from "react";
import { x } from "@xstyled/styled-components";
import { RxDashboard, RxAvatar } from "react-icons/rx";
import { MdLocalMovies } from "react-icons/md";
import { IoTvSharp } from "react-icons/io5";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <x.div
      bg="#171E31"
      h={{ lg: 5 / 6 }}
      position={{ _: "sticky", lg: "fixed" }}
      top={{ _: 0 }}
      left={{ lg: 0 }}
      zIndex={50}
      p={5}
      py={{ lg: 9 }}
      display="flex"
      flexDirection={{ lg: "column" }}
      alignItems="center"
      justifyContent="space-between"
      mx={{ md: 6 }}
      mt={{ md: 6 }}
      mb={{ md: 33 }}
      mr={{ lg: 0 }}
      borderRadius={{ md: "lg" }}
    >
      <Link to="/">
        <x.div w={"25px"} h={"20px"}>
          <x.img src="/movie-logo.svg" alt="logo" w={"100%"} />
        </x.div>
      </Link>
      <x.div
        display="flex"
        alignItems="center"
        justifyContent="space-between"
        w={1 / 2}
        flexDirection={{ lg: "column" }}
      >
        <Link to="/">
          <RxDashboard
            style={{
              color: "#5a6a90",
              cursor: "pointer",
              width: "1.5em",
              height: "1.5em",
            }}
          />
        </Link>
        <Link to="/movie">
          <MdLocalMovies
            style={{ fontSize: "1.5em", color: "#5a6a90", cursor: "pointer" }}
          />
        </Link>
        <Link to="/tv">
          <IoTvSharp
            style={{ fontSize: "1.5em", color: "#5a6a90", cursor: "pointer" }}
          />
        </Link>
      </x.div>
      <RxAvatar
        style={{ fontSize: "1.5em", color: "#5a6a90", cursor: "pointer" }}
      />
    </x.div>
  );
};

export default Navbar;
/* style={{ margin: "2% auto" }} */
//  bg={"#fff"}

// return (
//   <x.div w={"70%"} bg="#171E31" mx={6} h={"550px"} my={8} borderRadius="lg">
//     <x.div mx={6} pt={6} w={"45px"}>
//       <x.img src="/movie-logo.svg" alt="logo" w={"100%"} />
//     </x.div>
//     <x.div
//       mx={6}
//       mt={8}
//       display="flex"
//       flexDirection="column"
//       justifyContent="space-between"
//       alignItems="center"
//       h={"60%"}
//     >
//       <RxDashboard
//         style={{ fontSize: "2em", color: "#5a6a90", cursor: "pointer" }}
//       />
//       <Link to="/movie">
//         <MdLocalMovies
//           style={{ fontSize: "2em", color: "#5a6a90", cursor: "pointer" }}
//         />
//       </Link>
//       <Link to="/tv">
//         <IoTvSharp
//           style={{ fontSize: "2em", color: "#5a6a90", cursor: "pointer" }}
//         />
//       </Link>

//       <RxAvatar
//         style={{ fontSize: "2em", color: "#5a6a90", cursor: "pointer" }}
//       />
//     </x.div>
//   </x.div>
// )