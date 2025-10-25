import MainLayout from '@/app/Components/MainLayout/MainLayout'
import React from 'react'
import AboutUsPage from '../AboutUs/page'
import ContactPage from '../Contact/page'
import HomePage from '../Home/page'
import ComplaintsbtnPage from '../Complaintsbtn/page'

function MainHomePage() {
  return (
    <MainLayout>
      <HomePage/>
      <AboutUsPage/>
      <ComplaintsbtnPage/>
    
      <ContactPage/>

    </MainLayout>
  )
}

export default MainHomePage