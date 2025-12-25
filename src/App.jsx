import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { ThemeProvider } from './context/ThemeContext'
import ServicesSection from './components/Services'
import MachinerySection from './components/MachinerySection'
import TrustedBy from './components/TrustedBy'
function App() {


  return (
    <>
    
     <ThemeProvider>
      <div className="min-h-screen">
        <Navbar />
        <Hero />
        <ServicesSection/>
        <MachinerySection/>
        <TrustedBy/>
      </div>
    </ThemeProvider>
       
    </>
  )
}

export default App
