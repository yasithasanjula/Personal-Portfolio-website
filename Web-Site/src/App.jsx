import React from 'react'
import { Nav } from './Components/Nav'
import Banner from './Components/Banner';

export const App = () => {
  return (
    <div className='bg-slate-900'>
      <Nav />
      <Banner />
    </div>
  )
}

export default App;