import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {
    Home,
    Profile,
    Analytics,
    Dashboard
}
from 'routes/module'
import React from 'react'

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<Home />} />
          <Route path="profile" element={<Profile />} />
          <Route path="analytics" element={<Analytics />} />
        </Route>
      </Routes>
    </Router>
  )
}

export default AppRoutes