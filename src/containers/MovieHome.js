import requests from "../Requests"
import Banner from "../components/Banner"
import Showcase from "../components/Showcase"


const MovieHome = () => {
  return (
    <div>
      <Banner title={"trending"} searchTitle={requests.requestMovieTrending}/>
      <Showcase title={"popular"} searchTitle={requests.requestMoviePopular}/>
      <Showcase title={"upcoming"} searchTitle={requests.requestMovieUpcoming}/>
      <Showcase title={"top rated"} searchTitle={requests.requestMovieTopRated} />
      <Showcase title={"newest addition"} searchTitle={requests.requestMovieUpcoming}/>
    </div>
  )
}

export default MovieHome