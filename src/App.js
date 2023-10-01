import React from "react";
import "./style.css";
import "./Components/SearchBar";
import SearchBar from "./Components/SearchBar";

function App() {
  return (
    <div>
      <header>
        <nav>
          <a href="https://gmail.google.com/">Gmail</a>
          <a href="SignUp.html">SignUp</a>
          <a href="Login.html">Log-In</a>
        </nav>
      </header>
      <img id="img-tag" src="./images/google-logo.png" alt="google-logo" />
      <div className="search-bar">
        <input
          type="text"
          id="textsearch"
          placeholder="Search Google or type a URL"
        />

        {/*<button className="btn1" type="search">
          Search
  </button>*/}
      </div>
      <p>
        <input
          type="submit"
          className="btn btn-outline-light btn-sm"
          value="Inbox"
          id="inbox"
        />
        <input
          type="submit"
          className="btn btn-outline-light btn-sm"
          value="Web Store"
          id="web-store"
        />
        <input
          type="submit"
          className="btn btn-outline-light btn-sm"
          value="Add shortcut"
          id="add-shortcut"
        />
      </p>
      <footer>
        <a href="https://ads.google.com/">Advertising</a>
        <a href="https://www.google.com/">business</a>
        <a href="https://about.google/">About</a>
        <p>&copy; 2023 Google Clone</p>
      </footer>
      <SearchBar />
    </div>
  );
}
export default App;
