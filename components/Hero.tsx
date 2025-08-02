"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Download } from "lucide-react"

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-4 py-20 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="text-center lg:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white">Maxwell Jackson</h1>
          <h2 className="text-xl md:text-2xl text-purple-700 dark:text-purple-400 font-semibold">
            Software Engineer & Full-Stack Developer
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            Computer Science student at NC A&T with expertise in React, Next.js, and AI integration. Passionate about
            creating innovative solutions and building engaging user experiences.
          </p>
          <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
            <Button asChild className="bg-purple-700 hover:bg-purple-800 text-white">
              <a href="#contact">
                <Mail className="w-4 h-4 mr-2" />
                Get In Touch
              </a>
            </Button>
            <Button 
              variant="outline" 
              className="border-gray-300 dark:border-gray-600 bg-transparent"
              onClick={() => {
                // Download the file
                const link = document.createElement('a');
                link.href = '/resume.pdf';
                link.download = 'Maxwell_Jackson_Resume.pdf';
                document.body.appendChild(link);
                link.click();
                document.body.removeChild(link);
                
                // Open in new tab
                window.open('/resume.pdf', '_blank');
              }}
            >
              <Download className="w-4 h-4 mr-2" />
              View Resume
            </Button>
          </div>
          <div className="flex gap-4 justify-center lg:justify-start">
            <Button variant="ghost" size="icon" asChild className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <a href="https://github.com/FootballManagerFan" target="_blank" rel="noopener noreferrer">
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <a href="https://www.linkedin.com/in/maxwell-p-jackson/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button variant="ghost" size="icon" asChild className="hover:bg-gray-100 dark:hover:bg-gray-800">
              <a href="mailto:maxpjax@gmail.com">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative">
            <div className="w-450 h-450 overflow-hidden shadow-xl rounded-lg">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/1751400927828.jpg-0UhnoG5WgWpxNYmzPEpWw0NHaw0aZa.jpeg"
                alt="Maxwell Jackson"
                width={384}
                height={384}
                className="w-full h-full object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
