import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { Navbar } from './components'
import GlobleStyle from './GloblesStyles';

function App() {


  return (
    <BrowserRouter  >
       <GlobleStyle/>
       <Navbar/>
    </BrowserRouter>
  )
}

export default App
