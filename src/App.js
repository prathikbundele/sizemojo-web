import logo from './logo.svg';
import './App.css';
import AppContextProvider from './contexts/AppContext';
import LandingPage from './Containers/LandingPage';
import { useState } from 'react';
import ResultPage from './Containers/ResultPage/ResultPage';

function App() {

  const [currentPage, setCurrentPage] = useState("landing")
  return (
    <div className="App">
      <AppContextProvider>
        {currentPage == "landing" && 
        <LandingPage setCurrentPage={setCurrentPage} />
        }
        {
          currentPage == "result" && 
          <ResultPage />
        }
      </AppContextProvider>
    </div>
  );
}

export default App;
