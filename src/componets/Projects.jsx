import React from 'react'
import { ArrowRight, ExternalLink} from "lucide-react";
import ecommerce from "@/assets/images/ecommmerce.png"
import texvia from "@/assets/images/texvia_shot.png"
import landingpage from "@/assets/images/landingPage.png"
const Projects = () => {
  
    const projects = [
     
  {
    id: 1,
    title: " startup company website",
    description:
      "website for company and dashboard for user with google analytics ",
    image : `${texvia}`,
    tags: ["TypeScript", "angular" , "bootstrap" , "google analytices" ],
    demoUrl: "https://www.texviatech.com/home",
  },
  {
    id: 2,
    title: "E-commerce Platform",
    description:
      "Full-featured e-commerce platform with user authentication and payment processing.",
     image: `${ecommerce}`,
    tags: ["Anguler", "Node.js", "Stripe"],
    demoUrl: "https://ecomearce-finalproject.vercel.app/#/login",
  },
   {
    id: 3,
    title: "Landing page",
    description:
      "Landing page with react , tailwind and framer motion ",
    image : `${landingpage}`,
    tags: ["react", "js" , "tailwind css" , "Framer motion" ],
    demoUrl: "https://landing-page-with-react-xzjq.vercel.app/",
  },
];
  return (
     <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/machadop1407"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div> */}
      </div>
    </section>
  )
}

export default Projects
