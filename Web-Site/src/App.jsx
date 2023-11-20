import React, { useEffect, useState } from 'react'
import  Nav  from './Components/Nav'
import Banner from './Components/Banner';
import About from './Components/About';
import Serivces from './Components/Serivces';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Footer from './Components/Footer';


export const App = () => {
  const [loading,setLoading]= useState(false);
  useEffect(() => {
    setLoading(true)
    setTimeout(() =>{
      setLoading(false)
    })
  },[1000])
  return (
    <>
    {
      loading ?
      <BallTriangle
       height={100}
       width={100}
       radius={5}
       color="#4fa94d"
       ariaLabel="ball-triangle-loading"
       wrapperClass={{}}
       wrapperStyle=""
       visible={true}
       />
      :
      <div className='bg-slate-900'>
      <Nav />
      <Banner />
      <About />
      <Serivces />
      <Projects />
      <Contact/>
      <Footer />
    </div>
    }
    </>
  )
  }

export default App;