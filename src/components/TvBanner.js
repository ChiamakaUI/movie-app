import { x } from "@xstyled/styled-components";
import axios from "axios";
// import requests from "../Requests";
import { useQuery } from "react-query";
import TvCard from "./TvCard";
import "./Styles.css";

const TvBanner = ({ title, searchTitle }) => {
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
    <x.div color="blue-gray-50" mt={4}>
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
    >
      {data.map((show) => (
        <TvCard key={show.id} show={show} />
      ))}
    </x.div>
  </x.div>
  )
}

export default TvBanner