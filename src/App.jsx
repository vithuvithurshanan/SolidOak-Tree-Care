import { Routes, Route } from 'react-router-dom'
import { lazy, Suspense } from 'react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'

const Services      = lazy(() => import('./pages/Services'))
const About         = lazy(() => import('./pages/About'))
const Contact       = lazy(() => import('./pages/Contact'))
const Reviews       = lazy(() => import('./pages/Reviews'))
const Work          = lazy(() => import('./pages/Work'))
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'))
const Terms         = lazy(() => import('./pages/Terms'))
const NotFound      = lazy(() => import('./pages/NotFound'))

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Suspense fallback={null}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/work" element={<Work />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-and-conditions" element={<Terms />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  )
}

export default App
