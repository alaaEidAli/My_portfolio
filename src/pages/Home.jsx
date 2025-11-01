import React from 'react'
import ThemeToggle from '@/componets/ThemeToggle'
import StarBackground from '@/componets/StarBackground'
import Navbar from '@/componets/Navbar'
import HeroSection from '@/componets/HeroSection'
import Aboutme from '@/componets/Aboutme'
import SkillSection from '@/componets/SkillSection'
import Projects from '@/componets/Projects'
import ContactSection from '../componets/ContactSection'
import { Footer } from '../componets/Footer'
const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden  '>
      {/* Theme Toggle  */}
       <ThemeToggle />

      {/* Background Effects */}
       <StarBackground />






      {/* navbar */}
       <Navbar />


       
       {/* Main Content */}
        <main>
          <HeroSection />
          <Aboutme />
          <SkillSection />
          <Projects />
          <ContactSection />
        </main>




       {/* Footer */}
       <Footer />
    </div>
  )
}

export default Home
