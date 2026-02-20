import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Navbar from '../layout/Navbar'
import Onboarding from '../pages/Onboarding'
import SignIn from '../pages/SignIn'
import Home from '../pages/Home'
import SignUp from '../pages/SignUp'

export default function AppRouter() {
  return (
    <BrowserRouter>
        <Routes>

          {/* Public Pages */}
          <Route path="/" element={<Onboarding />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />

          {/* Protected / App Pages */}
          <Route path='/app' element={<Navbar />}>
            <Route path="home" element={<Home />} />
          </Route>

        </Routes>
    </BrowserRouter>
  )
}
