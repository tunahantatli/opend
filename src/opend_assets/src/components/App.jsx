import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "bootstrap/dist/css/bootstrap.min.css";
import homeImage from "../../assets/home-img.png";
import Item from "./Item";

function App() {

  const NFTID = "rrkah-fqaaa-aaaaa-aaaaq-cai";


  return (
    <div className="App">
      <Header />
      
      <div className="container">
        <div className="main-content-1">
         <Item id={NFTID}/>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
