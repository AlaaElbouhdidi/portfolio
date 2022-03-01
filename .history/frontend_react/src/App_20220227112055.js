import React from 'react';

import { About, Header, Footer, Work, Skills, Testimonial} from './container';
import { Navbar } from './components';
import './'
const App = () => {
  return (
    <div className='app'>
      <Navbar/>
      <Header />
      <About /> 
      <Work/>
      <Skills/>
      <Testimonial/>
      <Footer/>
    </div>
    
  );
}

export default App;