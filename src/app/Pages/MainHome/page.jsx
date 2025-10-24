import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import AboutUsPage from '../AboutUs/page'
import ContactPage from '../Contact/page'
import HomePage from '../Home/page'

function MainHomePage() {
  return (
    <MainLayout>
    
      <AboutUsPage/>
      <HomePage/>
      <ContactPage/>

    </MainLayout>
  )
}

export default MainHomePage