import React from 'react'
import  Nav  from './Components/Nav'
import Banner from './Components/Banner';
import About from './Components/About';
import Serivces from './Components/Serivces';
import Projects from './Components/Projects';

export const App = () => {
  return (
    <div className='bg-slate-900'>
      <Nav />
      <Banner />
      <About />
      <Serivces />
      <Projects />
    </div>
  )
}

export default App;