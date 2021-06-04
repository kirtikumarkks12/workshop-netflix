import { useEffect, useState ***REMOVED*** from "react"
import Card from "./Card"

const Section = ({ genre ***REMOVED***) =***REMOVED*** {
  const [movies, setMovies] = useState(null)
  const [pageState, setPageState] = useState(null)

  const fetchData = async () =***REMOVED*** {
    const response = await fetch("/.netlify/functions/getMovies", {
      method: "POST",
      body: JSON.stringify({ genre: genre, pageState: pageState ***REMOVED***),
    ***REMOVED***)
    const responseBody = await response.json()
    setMovies(responseBody.data.movies_by_genre.values)
    setPageState(responseBody.data.movies_by_genre.pageState)
  ***REMOVED***

  useEffect(() =***REMOVED*** {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  ***REMOVED***, [])

  return (
    <***REMOVED***
      <h2 id={genre***REMOVED******REMOVED***{genre***REMOVED***</h2***REMOVED***
      {movies && (
        <div className="movie-section"***REMOVED***
          {movies.map((movie, index) =***REMOVED*** (
            <Card key={index***REMOVED*** movie={movie***REMOVED*** /***REMOVED***
        ***REMOVED***)***REMOVED***
          <div
            className="more-button"
            onClick={() =***REMOVED*** {
              setPageState(pageState)
              fetchData()
            ***REMOVED******REMOVED***
          ***REMOVED***
            <i className="fas fa-angle-right"***REMOVED***</i***REMOVED***
          </div***REMOVED***
        </div***REMOVED***
    ***REMOVED******REMOVED***
    </***REMOVED***
***REMOVED***
***REMOVED***

export default Section
