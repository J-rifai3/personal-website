import { Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import MainLayout from './components/MainLayout.jsx'
import CsAboutPage from './pages/cs/AboutPage.jsx'
import CsContactPage from './pages/cs/ContactPage.jsx'
import CsHomePage from './pages/cs/HomePage.jsx'
import CsWorkPage from './pages/cs/WorkPage.jsx'
import EngineeringAboutPage from './pages/engineering/AboutPage.jsx'
import EngineeringContactPage from './pages/engineering/ContactPage.jsx'
import EngineeringHomePage from './pages/engineering/HomePage.jsx'
import EngineeringWorkPage from './pages/engineering/WorkPage.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/cs/home" replace />} />

      <Route path="/engineering" element={<MainLayout basePath="/engineering" />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<EngineeringHomePage />} />
        <Route path="about" element={<EngineeringAboutPage />} />
        <Route path="work" element={<EngineeringWorkPage />} />
        <Route path="contact" element={<EngineeringContactPage />} />
      </Route>

      <Route path="/cs" element={<MainLayout basePath="/cs" />}>
        <Route index element={<Navigate to="home" replace />} />
        <Route path="home" element={<CsHomePage />} />
        <Route path="about" element={<CsAboutPage />} />
        <Route path="work" element={<CsWorkPage />} />
        <Route path="contact" element={<CsContactPage />} />
      </Route>

      <Route path="/about" element={<Navigate to="/cs/about" replace />} />
      <Route path="/work" element={<Navigate to="/cs/work" replace />} />
      <Route path="/contact" element={<Navigate to="/cs/contact" replace />} />
      <Route path="*" element={<Navigate to="/cs/home" replace />} />
    </Routes>
  )
}

export default App
