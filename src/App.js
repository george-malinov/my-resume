import "./App.css";
import React from "react";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import About from "./Components/About/About";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;
