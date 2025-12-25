import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { ThemeProvider } from './context/ThemeContext'
import ServicesSection from './components/Services'
function App() {


  return (
    <>
    
     <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <ServicesSection/>
      </div>
    </ThemeProvider>
       
    </>
  )
}

export default App
