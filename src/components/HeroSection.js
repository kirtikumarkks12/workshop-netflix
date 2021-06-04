import { useState, useEffect ***REMOVED*** from "react"

const HeroSection = () =***REMOVED*** {
  const [movie, setMovie] = useState(null)
  const pageState = null

  const fetchData = async () =***REMOVED*** {
    const response = await fetch("/.netlify/functions/getMovies", {
      method: "POST",
      body: JSON.stringify({ genre: "Sci-Fi", pageState: pageState ***REMOVED***),
    ***REMOVED***)
    const responseBody = await response.json()
    const movies = responseBody.data.movies_by_genre.values
    setMovie(movies[Math.floor(Math.random() * movies.length)])
  ***REMOVED***

  useEffect(() =***REMOVED*** {
    fetchData()
  ***REMOVED***, [])

  return (
    <***REMOVED***
      {movie && (
        <div className="hero"***REMOVED***
          <video className="hero-video" muted controls autoPlay={true***REMOVED*** loop***REMOVED***
            <source src={movie.thumbnail***REMOVED*** type="video/mp4" /***REMOVED***
          </video***REMOVED***

          <div className="info-section"***REMOVED***
            <h3 className="hero-blurb"***REMOVED***{movie.synopsis***REMOVED***</h3***REMOVED***
            <div className="button-section"***REMOVED***
              <div className="button play"***REMOVED***
                <span***REMOVED***
                  <i className="fas fa-play"***REMOVED***</i***REMOVED***
                </span***REMOVED***
                Play
              </div***REMOVED***
              <div className="button more"***REMOVED***
                <span***REMOVED***
                  <i className="fas fa-info-circle"***REMOVED***</i***REMOVED***
                </span***REMOVED***
                More info
              </div***REMOVED***
            </div***REMOVED***
          </div***REMOVED***
        </div***REMOVED***
    ***REMOVED******REMOVED***
    </***REMOVED***
***REMOVED***
***REMOVED***

export default HeroSection
