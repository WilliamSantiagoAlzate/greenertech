//Import react libraries
import React from 'react';
import { Switch, Route } from 'react-router-dom';

//Import views
import Home from './views/home/Home';
import About from './views/about/About';
import Products from './views/products/Products';
import Services from './views/services/Services';
import Contact from './views/contact/Contact';
import Blog from './views/blog/Blog';

//Import styles
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/nosotros">
        <About/>
      </Route>
      <Route exact path="/productos">
        <Products/>
      </Route>
      <Route exact path="/servicios">
        <Services/>
      </Route>
      <Route exact path="/blog">
        <Blog/>
      </Route>
      <Route exact path="/contacto">
        <Contact/>
      </Route>
    </Switch>
  );
}

export default App;
