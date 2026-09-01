import './App.css'
import { Routes, Route } from 'react-router-dom'

import Header from './components/Header'
import Footer from './components/Footer'

import Home from './components/Home'
import About from './components/About'
import Projects from './components/Projects'
import Services from './components/Services'
import Contact from './components/Contact'
import { LanguageProvider } from './context/LanguageContext'

function App() {
  return (
    <div className="min-h-screen bg-void text-ink selection:bg-signal">
<LanguageProvider>
   <Header />

   
   <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main> 
     <Footer />
    

      
</LanguageProvider>
     

     

    </div>
  )
}

export default App