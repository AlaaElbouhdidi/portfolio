import React from 'react';

import { About, Header, Footer, A} from './container';
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