# gif-loader
Simple project for loading gifs from multiple resources (giphy and pixabay).

You asked me about a simple node server but during recruitment call I heard all of you work as a fullstack so I decided to create the server in TypeScript / Express.js.
Frontend is written in React / Sass.


#Server suggestions
1) Query params validation for `/giphs` endpoint,
2) Proper error handling (specified errors) for services `GiphyService` and `PixabayService`

#Frontend suggestions
1) Better way for handling images, with default placeholder or any loader for image,
2) Filters manager (currently simple hoc) with default values and helpers (`toRouterValue`, `fromRouterValue`),
3) Add pagination and Infinite scroll,
4) Improve `Page` component (styles for fit whole page).
5) Unit tests
6) Storybook

#Run server
Directly in server directory, install dependencies by

`npm install` 

and after this
 
 `npm start`
 
#Run app
Directly in app directory, install dependencies by

`npm install`

and after this

`npm start`
