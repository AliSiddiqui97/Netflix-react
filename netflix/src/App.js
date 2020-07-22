import React from "react";
import "./App.css";
import Row from "./componenets/Row.js";
import requests from "./request";
import Banner from "./componenets/Banner";
// bea964f81e1f3008c5235a82e58ed9b0

function App() {
  return (
    <div className="app">
      <h1> Netflix </h1>
      {/* navbar */}

      {/* Banner */}
      <Banner />
      <Row
        title={"NETFLIX ORIGINALS"}
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title={"TRENDING NOW "} fetchUrl={requests.fetchTrending} />

      <Row title={"TOP RATED"} fetchUrl={requests.fetchTopRated} />
      <Row title={"ACTION MOVIES"} fetchUrl={requests.fetchActionMovies} />
      <Row title={"COMEDY MOVIES"} fetchUrl={requests.fetchComedyMovies} />
      <Row title={"HORROR MOVIES"} fetchUrl={requests.fetchHorrorMovies} />
      <Row title={"ROMANCE MOVIES"} fetchUrl={requests.fetchRomanceMovies} />
      <Row
        title={"DOCUMENTARIES"}
        fetchUrl={requests.fetchDocumentariesMovies}
      />
    </div>
  );
}

export default App;
