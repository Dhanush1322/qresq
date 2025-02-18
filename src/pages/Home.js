import React from 'react'
import Header from '../components/Header'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import PrivacyFocursedProduct from '../components/PrivacyFocursedProduct'
import OurProducts from '../components/OurProducts'
import CustomerReview from '../components/CustomerReview'
import KeyFeature from '../components/KeyFeature'
import SystemWorkflow from '../components/SystemWorkflow'
function Home() {
  return (
    <div>
        <Header/>
        <Banner/>
        <PrivacyFocursedProduct/>
        <KeyFeature/>
        
        <OurProducts/>
        <SystemWorkflow/>
        <CustomerReview/>
        <Footer/>
    </div>
  )
}

export default Home