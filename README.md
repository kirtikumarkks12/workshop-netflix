***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

*50 minutes, Intermediate, [Start Building](#running-astra-netflix)*

***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED*** You will have to adapt commands and paths based on your environment and install the dependencies by yourself. **We won't provide support** to keep on track with schedule. However, we will do our best to give you the info you need to be successful.

***REMOVED***
***REMOVED*** * You will need a github account
***REMOVED*** * You will also need Netlify and AstraDB accounts, but we'll work through that in the exercises
***REMOVED*** * Use **Chrome** or **Firefox** for the best experience. Other browsers are great, but don't work well with the GitPod integration we use a bit later.

***REMOVED***
***REMOVED*** * **No.** All tools and services we provide here are FREE.

***REMOVED***

***REMOVED*** Attending the session is not enough. You need to complete the homeworks detailed below and you will get a nice badge.

***REMOVED***

***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***

<img src="tutorial/images/netflix-badge.png?raw=true" width="200" align="right" /***REMOVED***

***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
  
***REMOVED***

***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED*** *When creating your instance use the promotion code **ANIA200** to get 200$ of free credit allowing you about 30 million writes + 30 Million reads  + 50GB a month of monthly storage!!*

***REMOVED***

✅ Click the button to login or register with Datastax. You can use your `Github`, `Google` accounts or register with an `email`.

***REMOVED***

<a href="http://dtsx.io/netflix-workshop-1"***REMOVED***<img src="img/create_astra_db.png?raw=true" /***REMOVED***</a***REMOVED***
- <details***REMOVED***<summary***REMOVED***Show me!</summary***REMOVED***
    <img src="https://github.com/datastaxdevs/workshop-spring-stargate/raw/main/images/tutorials/astra-create-db.gif?raw=true" /***REMOVED***
</details***REMOVED***

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED***

[🏠 Back to Table of Contents](#table-of-content)


***REMOVED***

✅ [Create a token for your app](https://docs.datastax.com/en/astra/docs/manage-application-tokens.html) to use in the settings screen

Copy the token value (eg `AstraCS:KDfdKeNREyWQvDpDrBqwBsUB:ec80667c....`) in your clipboard and save the CSV, this value would not be provided afterward.

***REMOVED***
- <details***REMOVED***<summary***REMOVED***Show me!</summary***REMOVED***
    <img src="img/astra-create-token.gif?raw=true" /***REMOVED***
</details***REMOVED***

[🏠 Back to Table of Contents](#table-of-content)

***REMOVED***

✅ Open **GraphQL Playground** by 
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

***REMOVED*** *Note that values in the picture do no reflect the database name `netflix_workshop_db`, reason is we do not reproduce every pictures each time*

✅ In GraphQL Playground, **Populate HTTP HEADER** variable `x-cassandra-token` on the bottom of the page with your token as shown below

***REMOVED***

✅ In GraphQL Playground, create a table with the following mutation, making sure to replace `netflix_keyspace` if you used a different name:

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***

[🏠 Back to Table of Contents](#table-of-content)

***REMOVED***

✅ In graphQL playground, change tab to now use `graphql`. Edit the end of the URl to change from `system` to the name of your keyspace: `netflix_keyspace`

✅ Populate **HTTP HEADER** variable `x-cassandra-token` on the bottom of the page with your token as shown below (again !! yes this is not the same tab)

***REMOVED***

✅ In GraphQL Playground,populate the `reference_list` table with the following values

***REMOVED***

***REMOVED***
***REMOVED***
  action: insertreference_list(value: {label:"genre", value:"Action"***REMOVED***) {
    value{value***REMOVED***
  ***REMOVED***
  anime: insertreference_list(value: {label:"genre", value:"Anime"***REMOVED***) {
     value{value***REMOVED***
  ***REMOVED***
  award: insertreference_list(value: {label:"genre", value:"Award-Winning"***REMOVED***) {
     value{value***REMOVED***
  ***REMOVED***
  children: insertreference_list(value: {label:"genre", value:"Children & Family"***REMOVED***) {
     value{value***REMOVED***
  ***REMOVED***
  comedies: insertreference_list(value: {label:"genre", value:"Comedies"***REMOVED***) {
     value{value***REMOVED***
  ***REMOVED***
  documentaries: insertreference_list(value: {label:"genre", value:"Documentaries"***REMOVED***) {
     value{value***REMOVED***
  ***REMOVED***
  drama: insertreference_list(value: {label:"genre", value:"Dramas"***REMOVED***) {
     value{value***REMOVED***
  ***REMOVED***
  fantasy: insertreference_list(value: {label:"genre", value:"Fantasy"***REMOVED***) {
     value{value***REMOVED***
  ***REMOVED***
  french: insertreference_list(value: {label:"genre", value:"French"***REMOVED***) {
     value{value***REMOVED***
  ***REMOVED***
  horror: insertreference_list(value: {label:"genre", value:"Horror"***REMOVED***) {
     value{value***REMOVED***
  ***REMOVED***
  independent: insertreference_list(value: {label:"genre", value:"Independent"***REMOVED***) {
     value{value***REMOVED***
  ***REMOVED***
  music: insertreference_list(value: {label:"genre", value:"Music & Musicals"***REMOVED***) {
     value{value***REMOVED***
  ***REMOVED***
  romance: insertreference_list(value: {label:"genre", value:"Romance"***REMOVED***) {
     value{value***REMOVED***
  ***REMOVED***
  scifi: insertreference_list(value: {label:"genre", value:"Sci-Fi"***REMOVED***) {
     value{value***REMOVED***
  ***REMOVED***
  thriller: insertreference_list(value: {label:"genre", value:"Thriller"***REMOVED***) {
     value{value***REMOVED***
  ***REMOVED***  
***REMOVED***
***REMOVED***

***REMOVED***

[🏠 Back to Table of Contents](#table-of-content)

***REMOVED***

✅ In GraphQL Playground, not changing tab (yeah) list values from the table with the following query.

***REMOVED***
***REMOVED***
    reference_list (value: {label:"genre"***REMOVED***) {
***REMOVED***
***REMOVED***
      ***REMOVED***
    ***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

[🏠 Back to Table of Contents](#table-of-content)

***REMOVED***

✅ Move to tab `GRAPHQL-SCHEMA`, everything should be set, use the following mutation to create a new table:

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
      { name: "genre", type: {basic: TEXT***REMOVED*** ***REMOVED***
***REMOVED***
***REMOVED*** 
      { name: "year", type: {basic: INT***REMOVED***, order: "DESC" ***REMOVED***,
      { name: "title", type: {basic: TEXT***REMOVED***, order: "ASC" ***REMOVED***
***REMOVED***
***REMOVED***
      { name: "synopsis", type: {basic: TEXT***REMOVED*** ***REMOVED***,
      { name: "duration", type: {basic: INT***REMOVED*** ***REMOVED***,
      { name: "thumbnail", type: {basic: TEXT***REMOVED*** ***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

[🏠 Back to Table of Contents](#table-of-content)

***REMOVED***

✅ Move to tab `GRAPHQL`, everything should be set, use the following mutation to populate movies table: 

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
      thumbnail:"https://i.imgur.com/RPa4UdO.mp4"***REMOVED***) {
    value{title***REMOVED***
    ***REMOVED***
  
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
      thumbnail:"https://i.imgur.com/L8k6Bau.mp4"***REMOVED***) {
    value{title***REMOVED***
    ***REMOVED***
  
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
      thumbnail:"https://i.imgur.com/QvkrnyZ.mp4"***REMOVED***) {
    value{title***REMOVED***
    ***REMOVED***
  
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
      thumbnail:"https://i.imgur.com/xhhvmj1.mp4"***REMOVED***) {
    value{title***REMOVED***
    ***REMOVED***
  ***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

***REMOVED*** ℹ️ You can find more movie data in the `data` folder, however, we will be doing a bulk import of all this data shortly.

[🏠 Back to Table of Contents](#table-of-content)

***REMOVED***

✅ In GraphQL Playground, not changing tab (yeah) list values from the table with the following command.

***REMOVED***
***REMOVED***
***REMOVED***
      value: {genre:"Sci-Fi"***REMOVED***,
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
      ***REMOVED***
    ***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***

✅ For small datasets you can retrieve all values in the table but for performance or network reasons you need to you paging. Let's do the same query asking for a `page size to 2`

***REMOVED***
***REMOVED***
***REMOVED***
      value: {genre:"Sci-Fi"***REMOVED***,
       options: {pageSize: 2***REMOVED***,
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
      ***REMOVED***
***REMOVED***
    ***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***

Notice that `pageState` is also now returned. Let's use it to fetch the next 2 items. Edit the next query to replace your own pageState `YOUR_PAGE_STATE`

***REMOVED***
***REMOVED***
***REMOVED***
      value: {genre:"Sci-Fi"***REMOVED***,
       options: {pageSize: 2, pageState: "<YOUR_PAGE_STATE***REMOVED***"***REMOVED***,
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
      ***REMOVED***
***REMOVED***
    ***REMOVED***
***REMOVED***
***REMOVED***
 
voila !

***REMOVED***

<br/***REMOVED***
<br/***REMOVED***
<br/***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED*** *If the file open in the browser save it with the name `movies.csv`. This is important as the filename will be the table name.*

<p align="left"***REMOVED***
<a href="https://raw.githubusercontent.com/datastaxdevs/workshop-graphql-netflix/main/data/movies.csv"***REMOVED***
 <img src="https://dabuttonfactory.com/button.png?t=Download Dataset&f=Roboto-Bold&ts=20&tc=fff&hp=20&vp=15&c=11&bgt=unicolored&bgc=15d798" /***REMOVED***
</a***REMOVED***
</p***REMOVED***

✅ **Step 9b: Open Astra Data Loader**

***REMOVED***

***REMOVED***

***REMOVED***


✅ **Step 9c: Open Astra Data Loader**


***REMOVED***

***REMOVED***
- <details***REMOVED***<summary***REMOVED*** What does the netlify deploy button do?</summary***REMOVED***The Netlify deploy button will:<ul***REMOVED***
    <li***REMOVED***Create a new repository for you on Github</li***REMOVED***
    <li***REMOVED***Create a site on Netlify</li***REMOVED***
    <li***REMOVED***Link the two together.</li***REMOVED***</ul***REMOVED***
</details***REMOVED***

***REMOVED***

  [![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/RyanWelford/workshop-graphql-netflix)
 * <details***REMOVED***<summary***REMOVED***Show me!</summary***REMOVED***
    <img src="tutorial/images/deploy-to-netlify.gif?raw=true" /***REMOVED***
    </details***REMOVED***

***REMOVED***

***REMOVED***
    <details***REMOVED***
    <summary***REMOVED***Show me! </summary***REMOVED***
    <img src="tutorial/images/deploy-1.png" /***REMOVED***
    </details***REMOVED***

***REMOVED***
    <details***REMOVED***
    <summary***REMOVED***Show me! </summary***REMOVED***
    <img src="tutorial/images/deploy-2.png" /***REMOVED***
    </details***REMOVED***

***REMOVED***
    <details***REMOVED***
    <summary***REMOVED***Show me! </summary***REMOVED***
    <img src="tutorial/images/deploy-3.png" /***REMOVED***
    </details***REMOVED***

  * Scroll up to the top and click on the site name (it'll be after {yourlogin***REMOVED***'s Team next to the Netlify button).
    <details***REMOVED***
    <summary***REMOVED***Show me! </summary***REMOVED***
    <img src="tutorial/images/deploy-4.png" /***REMOVED***
    </details***REMOVED***

***REMOVED***

***REMOVED***
    <details***REMOVED***
    <summary***REMOVED***Show me! </summary***REMOVED***
    <img src="tutorial/images/deploy-5.png" /***REMOVED***
    </details***REMOVED***

***REMOVED***
***REMOVED***

* _Supported by <img src="tutorial/images/chrome-logo.svg" height="20"/***REMOVED*** Chrome and <img src="tutorial/images/firefox-logo.svg" height="20"/***REMOVED*** Firefox_

***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED***
 * <details***REMOVED***
     <summary***REMOVED***CLICK HERE to launch GitPod</summary***REMOVED***

***REMOVED***
   </details***REMOVED***

***REMOVED***
***REMOVED***
 ***REMOVED***
***REMOVED***
***REMOVED***

 * <details***REMOVED***<summary***REMOVED***Show me!</summary***REMOVED***
    <img src="tutorial/images/netlify-install-cli.png?raw=true" /***REMOVED***
    </details***REMOVED***

***REMOVED***

Use the token you previously generated. If you no longer have the token and did not download a .csv, you can generate a new token using the instructions above

***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***
***REMOVED***

***REMOVED***

***REMOVED***

***REMOVED***ini
ASTRA_DB_APPLICATION_TOKEN={ your_token ***REMOVED***
ASTRA_GRAPHQL_ENDPOINT={ your_endpoint ***REMOVED***
***REMOVED***

***REMOVED***

***REMOVED***bash
***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
  ***REMOVED***
***REMOVED***
  ***REMOVED***
***REMOVED***

***REMOVED***
***REMOVED***
  * First thing, we'll need to **STOP** the `netlify dev` command we issued a moment ago. In the terminal where you executed the netlify command issue a `CTRL-C` (control key + the C key) in order to stop the process.
  * Then continue with the following commands
  * This will pop up a browser to authenticate with netlify
  ***REMOVED***
***REMOVED***
  ***REMOVED***
  _Note, when using GitPod the preview pane will not display this properly. You must click the "open in a new window" button in the very top right of the preview pane._

  * This will link your workspace to the associated site
  ***REMOVED***
  ***REMOVED***
  ***REMOVED***

  * This will take the .env file created by astra-setup and upload it to netlify
  ***REMOVED***
***REMOVED***
  ***REMOVED***

***REMOVED***
***REMOVED***
  ***REMOVED***
***REMOVED***
  ***REMOVED***
--***REMOVED***

***REMOVED***
***REMOVED***

***REMOVED***
  ***REMOVED***
***REMOVED***
  ***REMOVED***

***REMOVED***
  ***REMOVED***
***REMOVED***
  ***REMOVED***

***REMOVED***
  ***REMOVED***
***REMOVED***
  ***REMOVED***
  
***REMOVED***
***REMOVED***


***REMOVED***

***REMOVED***
***REMOVED***

***REMOVED***

***REMOVED***
