import "./App.css"
import { useEffect, useState ***REMOVED*** from "react"
import Section from "./components/Section"
import HeroSection from "./components/HeroSection"
import NavBar from "./components/NavBar"

const App = () =***REMOVED*** {
  const genreIncrement = 4
  const [genres, setGenres] = useState(null)
  const [limit, setLimit] = useState(genreIncrement)

  const fetchData = async () =***REMOVED*** {
    const response = await fetch("/.netlify/functions/getGenres", {
      method: "POST",
      body: limit,
    ***REMOVED***)
    const responseBody = await response.json()
    setGenres(responseBody.data.reference_list.values)
  ***REMOVED***

  console.log(limit)

  useEffect(() =***REMOVED*** {
    fetchData()
  ***REMOVED***, [limit])

  return (
    <***REMOVED***
      <NavBar /***REMOVED***
      <HeroSection /***REMOVED***
      {genres && (
        <div className="container"***REMOVED***
          {Object.values(genres).map((genre) =***REMOVED*** (
            <Section key={genre.value***REMOVED*** genre={genre.value***REMOVED*** /***REMOVED***
        ***REMOVED***)***REMOVED***
        </div***REMOVED***
    ***REMOVED******REMOVED***
      <div
        className="page-end"
        onMouseEnter={() =***REMOVED*** {
          setLimit(limit + genreIncrement)
        ***REMOVED******REMOVED***
      /***REMOVED***
    </***REMOVED***
***REMOVED***
***REMOVED***

export default App
