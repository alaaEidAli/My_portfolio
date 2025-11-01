import { Mail, Phone, MapPin, Send } from "lucide-react";
import React, { useEffect} from "react";
import {cn} from "@/libs/utlis"
import { useToast } from "@/hooks/use-toast";
import { useForm } from '@formspree/react';

const ContactSection = () => {
  const { toast } = useToast() ;
    const [state, isHandleSubmit] = useForm("mqaggwyl");

    useEffect(() =>{
      if(state.succeeded) {
        toast({
        title: "Message sent !" ,
        description : "Thank you for your message , i'll get back to you soon"
      })
      }
    } , [state.succeeded , toast])
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary"> Touch</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have a project in mind or want to collaborate? Feel free to reach out.
          I'm always open to discussing new opportunities.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold mb-6">
              {" "}
              Contact Information
            </h3>

            <div className="space-y-6 justify-center">
              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Mail className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Email</h4>
                  <a
                    href="mailto:hello@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    alaa.elsharkawy.dev@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Phone className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Phone</h4>
                  <a
                    href="tel:+11234567890"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    + (20) 1283996909
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <MapPin className="h-6 w-6 text-primary" />{" "}
                </div>
                <div>
                  <h4 className="font-medium"> Location</h4>
                  <a className="text-muted-foreground hover:text-primary transition-colors">
                    Cairo , Egypt
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-card p-8 rounded-lg shadow-xs">
            <h3 className="text-2xl font-semibold mb-6">Send a Massage </h3>
            <form className="space-y-6"   onSubmit={isHandleSubmit}
           >
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">Your Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2  "
                  placeholder="Alaa Eid.."
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">Your Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2  "
                  placeholder="AlaaEid@gmail.com"
                />
              </div>
              <div>
                <label htmlFor="massage" className="block text-sm font-medium mb-2">Your Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 resize-none "
                  placeholder="Hello , i'd like to talk about"
                />
              </div>
              <button type="submit" className={cn("cosmic-button w-full  flex items-center justify-center gap-2",
              
              )} disabled = {state.isSubmitting} >
               {state.isSubmitting ? "Sending" : "Send Message"} <Send size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
