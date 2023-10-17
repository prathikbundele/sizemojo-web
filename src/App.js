import logo from './logo.svg';
import './App.css';
import AppContextProvider from './contexts/AppContext';
import LandingPage from './Containers/LandingPage';

function App() {
  return (
    <div className="App">
      <AppContextProvider>
        <LandingPage />
      </AppContextProvider>
    </div>
  );
}

export default App;
