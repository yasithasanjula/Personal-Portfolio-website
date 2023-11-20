import React from 'react'
import  Nav  from './Components/Nav'
import Banner from './Components/Banner';
import About from './Components/About';

export const App = () => {
  return (
    <div className='bg-slate-900'>
      <Nav />
      <Banner />
      <About />
    </div>
  )
}

export default App;