import { x } from "@xstyled/styled-components";
import { useQuery } from "react-query";
import axios from "axios";
import requests from "../Requests";
import Main from "../components/Layout/Main";
import Card from "../components/Card";

const Movies = () => {
  const { data, isLoading } = useQuery([`movieGenre`], () => {
    return axios
      .get(requests.requestMovieGenre)
      .then((res) => res.data.genres)
      .catch((err) => console.log(err.message));
  });
  console.log(data);
  if (isLoading) {
    return <x.h1>loading</x.h1>;
  }

  return (
    <Main placeholder="Search for movies">
      <x.div color="#fff" display="flex" justifyContent="space-between" mb={10} flexWrap="wrap">
        {data.map((item, index) => (
          <Card
            key={item.id}
            text={item.name}
            bgColor={index % 2 !== 0 ? "#171E31" : "cyan-700"}
          />
        ))}
      </x.div>
    </Main>
  );
};

export default Movies;
