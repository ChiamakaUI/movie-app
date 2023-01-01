import Navbar from "../Navbar"
import { x } from "@xstyled/styled-components";
import { BsSearch } from "react-icons/bs";



const Main = (props) => {
  return (
    <x.div display={{ lg: "flex" }} fontFamily="outfit">
      <Navbar />
      <x.div
        w={{ _: "100%" }}
        display="flex"
        py={6}
        px={{ _: 4, md: 0 }}
        mx={0}
        pt={{ md: 0 }}
        flexDirection="column"
        m={{ md: 6 }}
        ml={{ lg: 32 }}
        minWidth={{ lg: 800 }}
        flexGrow={{ lg: 1 }}
      >
        <x.form
          display="flex"
          alignItems="center"
          pb={{ _: 6, md: 10 }}
          mt={{ lg: 9 }}
          flexGrow={1}
          color="#fff"
        >
          <BsSearch style={{ color: "#fff", fontSize: "1em" }} />
          <x.input
            placeholder={props.placeholder}
            bg="#10141E"
            mx={2.5}
            p={2.5}
            outline={{ focus: "none" }}
            ring={{ focus: 0 }}
            border={{ focus: "transparent" }}
            borderWidth="0 0 2 0"
            borderStyle="solid"
            borderColor="#5a6a90"
            w={{ _: "100%" }}
          />
          <x.button
            bg="#5A698F"
            color="#fff"
            p={2.5}
            borderRadius="md"
            fontSize="xs"
          >
            Search
          </x.button>
        </x.form>
        <x.div>{props.children}</x.div>
      </x.div>
    </x.div>
  );
};

export default Main;
