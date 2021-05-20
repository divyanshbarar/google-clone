import './App.css';
import Home from './pages/Home';
import SearchPage from "./pages/SearchPage"
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";



function App() {
  return (
    <div className="app">
      <Router>
        <Switch>

          <Route path="/search">
            <SearchPage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>

      </Router>

      {/* home page -> search page */}


      {/* result page */}


    </div>
  );
}

export default App;
