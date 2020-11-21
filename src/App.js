import logo from './logo.svg';
import './App.css';
import {Switch, Route} from "react-router-dom";
import About from './pages/About';
import DiscoverMovies from './pages/DiscoverMovies';
import HomePage from './pages/HomePage';
import Link from "react-router-dom"
import NavBar from "./components/NavBar"

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Switch>
        <Route path="/discover" component={DiscoverMovies} />
        <Route path="/about" component={About} />
        <Route path="/" component={HomePage} />
      </Switch>
    </div>
  );
}

export default App;
