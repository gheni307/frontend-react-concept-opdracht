import './App.css';
import Navigation from './components/navigation/Navigation.js'
import {Route, Switch} from "react-router-dom";
import Home from "./pages/home/Home";
import Subreddit from "./pages/subreddit/Subreddit";
import Footer from "./components/footer/Footer";



function App() {

  return (
    <div className="App">
      <Navigation/>
        <Switch>
        <Route exact path='/'>
            <Home/>
        </Route>
            <Route path='/subreddit/:subreddit'>
                <Subreddit/>
            </Route>
        </Switch>
        <Footer/>
    </div>
  );
}

export default App;
