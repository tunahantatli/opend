import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImage from "../../assets/home-img.png";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container">
        <div className="main-content-1">
          <h2>Welcome to new NFT Market!</h2>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
