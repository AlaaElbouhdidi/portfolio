import React from 'react';

import { About, Header, Footer, } from './container';
import { Navbar } from './components';
const App = () => {
  return (
    <div className='app'>
      <Header />
      <About /> 
    </div>
    
  );
}

export default App;