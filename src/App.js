import './App.css';
import Navbar from './navbar'
import Home from './home'
import About from './about';
import Cart from './cart'
import './index.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './create'
import BlogDetails from './blogDetails'
import Contact from './contact';
import NotFound from './notFound';


function App() {

  // const title = 'Welcome to the My New Blog'
  // const likes = 50
  return (
    <Router>
    <div className="App">
      <Navbar />
      <div className="content">
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/create">
            <Create />
          </Route>
          <Route path="/blogs/:id">
            <BlogDetails />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
        </Switch>
        
        {/* <p>Liked {likes} times</p> */}
      </div>
    </div>
    </Router>
  );
}

export default App;
 