import React from "react";
import "../../assets/css/Header.css";
const Home = () => {
  return (
    <header>
      <h1>Welcome to React Router DOM Tutorials</h1>

      <p>
      React Router DOM is an npm package that enables you to implement dynamic routing in a web app. 
      It allows you to display pages and allow users to navigate them. 
      It is a fully-featured client and server-side routing library for React. 
      React Router Dom is used to build single-page applications 
      i.e. applications that have many pages or components but the page is never refreshed instead 
      the content is dynamically fetched based on the URL. 
      This process is called Routing and it is made possible with the help of React Router Dom.
      The major advantage of react-router is that the page does not have to be 
      refreshed when a link to another page is clicked, for example. 
      Moreover, it is fast, very fast compared to traditional page navigation. 
      This means that the user experience is better and the app has overall better performance.
      </p>
    </header>
  );
};

export default Home;
