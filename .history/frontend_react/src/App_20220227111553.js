import React from 'react';

import { About, Header, Footer, Work, Skills, Testimonial} from './container';
import { Navbar } from './components';
const App = () => {
  return (
    <div className='app'>
      <Header />
      <About /> 
      <Work/>
      <Skills/>
      <Testimonial/>
      
    </div>
    
  );
}

export default App;