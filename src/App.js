import React, { Fragment } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Navbar } from './components/Navbar';
import { Map } from './Pages/Map'
import { GlobalStyles } from './styles/GlobalStyles'
import { Footer } from './components/Footer'
import { Router, } from '@reach/router'
import { Home } from './Pages/Home'
import { About } from './Pages/About'
import { Detail } from './Pages/Detail'

function App() {
  return (
    <Fragment>
      <GlobalStyles />
      <Navbar />
        <Router>
          <Home default />
          <Detail path='/detalle/:id' />
          <Map path='/' />
          <Home path='/home' />
          <About path='/acerca'/>
        </Router>
      <Footer />
    </Fragment>
  );
}

export default App;
