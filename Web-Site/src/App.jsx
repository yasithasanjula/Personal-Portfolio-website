import React from 'react'
import  Nav  from './Components/Nav'
import Banner from './Components/Banner';
import About from './Components/About';
import Serivces from './Components/Serivces';

export const App = () => {
  return (
    <div className='bg-slate-900'>
      <Nav />
      <Banner />
      <About />
      <Serivces />
    </div>
  )
}

export default App;