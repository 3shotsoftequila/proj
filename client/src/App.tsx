import React from 'react'
import Navigation from './components/Navigation'

import "./App.css";


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard"
import Settings from "./pages/Settings"
import Notifications from "./pages/Notifications"

const App = () => {
  return (
    <>
      <Router>
        <Navigation />

        <div className="pages">
          <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/settings" element={<Settings/>} />
            <Route path="/notifications" element={<Notifications/>} />

          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App


