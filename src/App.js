import React, { Fragment } from 'react'
import { Navbar } from './components/Navbar';
import { Map } from './Pages/Map'
import { GlobalStyles } from './styles/GlobalStyles'
import { Footer } from './components/Footer'
import { Router, } from '@reach/router'
import { Home } from './Pages/Home'
import { About } from './Pages/About'

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
        <Router>
          <Home default />
          <Map path='/' />
          <Home path='/home' />
          <About path='/acerca'/>
        </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
