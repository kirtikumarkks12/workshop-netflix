const fetch = require('node-fetch')

exports.handler = async function (event) {
  const body = JSON.parse(event.body)
  const genre = body.genre
  const pageState = body.pageState
  const url = process.env.ASTRA_GRAPHQL_ENDPOINT
  const query = `
  query {
***REMOVED***
  ***REMOVED***genre: ${JSON.stringify(genre)***REMOVED******REMOVED***,
      orderBy: [year_DESC],
      options: { pageSize: 6, pageState: ${JSON.stringify(pageState)***REMOVED*** ***REMOVED***
  ***REMOVED*** {
***REMOVED***
        year,
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
      ***REMOVED***
  ***REMOVED***
    ***REMOVED***
  ***REMOVED***
  `  
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      "Content-Type": "application/json",
      "x-cassandra-token": process.env.ASTRA_DB_APPLICATION_TOKEN
    ***REMOVED***,
    body: JSON.stringify({ query ***REMOVED***)
  ***REMOVED***)

  try {
    const responseBody = await response.json()
    return {
      statusCode: 200,
      body: JSON.stringify(responseBody)
    ***REMOVED***
  ***REMOVED*** catch (e) {
    console.log(e)
    return {
      statusCode: 500,
      body: JSON.stringify(e)
    ***REMOVED***
  ***REMOVED***
***REMOVED***