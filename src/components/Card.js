import { useState ***REMOVED*** from "react"

const Card = ({ movie ***REMOVED***) =***REMOVED*** {
  const [isShown, setIsShown] = useState(false)

  return (
    <div
      className="card"
      onMouseEnter={() =***REMOVED*** setIsShown(true)***REMOVED***
      onMouseLeave={() =***REMOVED*** setIsShown(false)***REMOVED***
    ***REMOVED***
      {!isShown && (
        <video className="video" controls***REMOVED***
          <source src={movie.thumbnail***REMOVED*** type="video/mp4" /***REMOVED***
        </video***REMOVED***
    ***REMOVED******REMOVED***

      {isShown && (
        <***REMOVED***
          <video className="video" controls autoPlay={true***REMOVED*** loop***REMOVED***
            <source src={movie.thumbnail***REMOVED*** type="video/mp4" /***REMOVED***
          </video***REMOVED***
          <div className="info-box"***REMOVED***
            <p***REMOVED***{movie.title***REMOVED***</p***REMOVED***
          </div***REMOVED***
        </***REMOVED***
    ***REMOVED******REMOVED***
    </div***REMOVED***
***REMOVED***
***REMOVED***

export default Card
