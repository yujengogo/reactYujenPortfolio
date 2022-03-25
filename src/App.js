import './App.css';
import { useState } from 'react';
// import image from './image/5th_P.JPG';
import Header from './components/Header';
import AboutMe from './components/AboutMe';
import PreviousWork from './components/PreviousWork';
import Contact from './components/Contact';
import Footer from './components/Footer';


function App() {

  const [currentPage, setCurrentPage] = useState("About")

  function render(){
    if(currentPage == "About") {
      return <AboutMe />
    } else if (currentPage == "Work") {
      return (
        <div class="previous-work">
          <PreviousWork />
        </div>
      )
    } else {
      return (
        <div class="contact">
          <Contact />
        </div>
      )
    }
  }

  return (
    <div className="App">
      <Header setCurrentPage={setCurrentPage}/>
      <div class="main">
        {render()}
      </div>
      <div class="footer">
        <Footer/>
      </div>

    </div>
  );
}

export default App;
