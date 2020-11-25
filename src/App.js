import React, { Fragment } from 'react'
import { Navbar } from './components/Navbar';
import { Map } from './Pages/Map'
import { GlobalStyles } from './styles'
import { Footer } from './components/Footer'
import { Router, } from '@reach/router'
import { Home } from './Pages/Home'
import { Layout } from './components/Layout'
import { About } from './Pages/About'

function App() {
  return (
    <Fragment>

      <GlobalStyles />
      <Navbar />
      <Layout>
        <Router>
          <Home default />
          <Home path='/' />
          <Map path='/mapa' />
          <About path='/acerca'/>
        </Router>
      </Layout>
      <Footer />
    </Fragment>
  );
}

export default App;
