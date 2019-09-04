### Rockstar Theater code challenge

![Cover image](https://github.com/joseivansandoya/rockstar-theater/blob/master/src/assets/cover.jpg)

Rockstar Theater is a React application that shows a set of movies retrieved from The Movie DB API. The page allows you to filter by keywords and movie rating. Once you click on a specific movie the page will come out whith details of the selected movie.

## 🚀 Launch the Application

To launch the application the only requirement is that you have **node** and **npm** installed in your computer.
Install the project with `npm install` and in the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

## 👨🏻‍💻 Development notes

I will briefly describe the procedure taken to implement this application, as well as some notes:

### Dependencies

In addition to the **Create React App** needed to bootstrap the page, I used these ones:
- **lodash:** I used its `debounce` method for wrapping the search api call
- **react-rating:** This dependency helped me with the stars rating filter
- **react-router-dom:** It helped me to implement the two routes that the application has
- **react-slick:** This dependency helped me to implement a fancy carousel in the discover page

### Application structure

![Structure](https://github.com/joseivansandoya/rockstar-theater/blob/master/src/assets/sketch.jpg)

The application consists in two pages:
- Discover (route `/`)
- Movie (route `/movie/:id`)

Each page is defined as separate components and the rest of inner web components have been organized within the `ui/` directory.

### ⚛️ Usin new React features

Capitalizing the power of React, I have used the following features:
- **Lazy and suspense:** when loading the two different pages in the Router ([View file](https://github.com/joseivansandoya/rockstar-theater/blob/master/src/Router.js))
- **Error boundaries:** when trying to catch if anything went wrong ([View file](https://github.com/joseivansandoya/rockstar-theater/blob/master/src/Router.js))
- **Fragments:** useful when no extra `div` wrapper is needed ([View file](https://github.com/joseivansandoya/rockstar-theater/blob/8bf22725181bb061e7a4e5f7dc98479d1a9f6026/src/components/Discover.js#L39))
- **Hooks `useState` and `useEffect`:** extremely useful feature when needed to implement stateful components within a functional one ([View file](https://github.com/joseivansandoya/rockstar-theater/blob/master/src/components/Discover.js))
