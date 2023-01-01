import requests from "../Requests"
import TvBanner from "../components/TvBanner"
import TvShowcase from "../components/TvShowcase"
const TvHome = () => {
  return (
    <div>
      <TvBanner title={"trending"} searchTitle={requests.requestAirToday}/>
      <TvShowcase title={"popular"} searchTitle={requests.requestTvPopular}/>
      <TvShowcase title={"top rated"} searchTitle={requests.requestTvTopRated}/>
      <TvShowcase title={"on air"} searchTitle={requests.requestOnAir}/>
      <TvShowcase title={"airing today"} searchTitle={requests.requestAirToday}/>
    </div>
  )
}

export default TvHome