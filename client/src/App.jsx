import React, { lazy, Suspense} from 'react'
import {Routes, Route} from "react-router-dom"
import {FaSpinner} from "react-icons/fa"
const LandingPage = lazy(() => import("./pages/LandingPage/Index"))  
const AboutPage = lazy(() => import("./pages/AboutPage/Index"))  
const ContactPage = lazy(() => import("./pages/ContactPage/Index"))  
const SignupPage = lazy(() => import("./pages/Auth/Signup"))  
const LoginPage = lazy(() => import("./pages/Auth/Login"))  

function App() {
  return (
    <section>
      <Suspense fallback={
          <div className="flex justify-center items-center min-h-screen bg-light-2 text-center text-4xl font-bold">
            <FaSpinner className="text-primary-dark" />
          </div>
        }>

        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Suspense>
    </section>
  )
}

export default App
