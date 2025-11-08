import React, { useEffect, useState } from 'react'
import {cn} from "@/libs/utlis"
import {X , Menu } from "lucide-react"
const Navbar = () => {
  const navItems = [
    {name: "Home" , href: "#hero"},
    {name: "About" , href: "#about"} ,
    {name: "Skills" , href: "#skills"},
    {name: "Projects" , href: "#projects"},
    {name: "Contact" , href: "#contact"}
  ]
 const [isScrolled  ,setIsScrolled] = useState(false)
 const [isMenuOpen , setIsMenuOpen] = useState(false)
  useEffect( () =>{
    const HandleScroll = () =>{
        setIsScrolled(window.scrollY > 10)
    }

    // for mobile navbar
     isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true)     

window.addEventListener('scroll' , HandleScroll)     
return () =>window.removeEventListener('scroll' , HandleScroll)


  } , []) 
 return (
    <nav className= {cn("fixed w-full z-40 transition-all duration-300" ,
                       isScrolled ? 'py-3 bg-background/80 backdrop-blur-md shadow-xs ' : "py-5"

     )} >
      
      <div className='container flex items-center justify-between'> 
        <div>
            <a href = "#hero"
              className='text-xl font-bold text-primary flex items-center'>
            <span  className='relative z-10 '>
            <span className='text-glow text-foreground'>AlaaTech</span> Portfolio</span>
          </a>
        </div>
          



          {/* desktop */}
            <div className='hidden md:flex space-x-8'>
              {
                navItems.map((item , index) =>{
                    return (
                       <a key= {index} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300 ' >
                         {item.name}
                       </a> 
                    )
                })
              }  
            </div>

            {/* mobile */}
              <button   onClick={() => setIsMenuOpen(!isMenuOpen)}
                className={cn('md:hidden py-3 relative right-2 z-50 ')}
                aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                > 
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>

             <div  className= {cn( 
                'fixed inset-0  bg-background/80 backdrop-blur-md z-40 flex flex-col items-center justify-center ',
                'transition-all duration-300 md:hidden',
                 isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
             )}>
                 
        
            <div className ="flex flex-col  space-y-3 text-lg">
              {
                navItems.map((item , index) =>{
                    return (
                       <a 
                       onClick={ () => setIsMenuOpen(false)}
                       key= {index} href={item.href} className='text-foreground/80 hover:text-primary transition-colors duration-300 ' >
                         {item.name}
                       </a> 
                    )
                })
              }  
            </div>
             </div>
      </div>
    </nav>
  )
}

export default Navbar
