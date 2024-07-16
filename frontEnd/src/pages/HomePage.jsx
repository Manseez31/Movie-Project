import React from 'react'
import Header from '../components/HomePageComp/Header'
import Banner from '../components/HomePageComp/Banner'
import MovieSection from '../components/HomePageComp/MovieSection'
import Footer from '../components/HomePageComp/Footer'

const HomePage = () => {
  return (
    <div className='h-auto w-[100%] bg-theme-dark text-gray-400'>
        <Header />
        <Banner />
        <MovieSection />
        <Footer />
    </div>
  )
}

export default HomePage
