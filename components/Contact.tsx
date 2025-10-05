import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Get In Touch</h2>
        
        <div className="max-w-2xl mx-auto">
          {/* Contact Info Card */}
          <Card className="project-card shadow-xl bg-card border-border">
            <CardHeader className="project-card-content">
              <CardTitle className="project-title text-2xl text-purple-700 dark:text-purple-400">Let's Connect</CardTitle>
              <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
                I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just
                want to chat about technology, feel free to reach out!
              </p>
            </CardHeader>
            <CardContent className="project-card-content space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-700 dark:text-purple-400" />
                  <a
                    href="mailto:maxpjax@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
                  >
                    maxpjax@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-700 dark:text-purple-400" />
                  <a
                    href="tel:612-900-9176"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400 transition-colors"
                  >
                    612-900-9176
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-700 dark:text-purple-400" />
                  <span className="text-gray-600 dark:text-gray-300">Greensboro, NC</span>
                </div>
              </div>
              
              <div className="space-y-3 pt-4">
                <Button
                  variant="outline"
                  className="project-button w-full justify-start bg-transparent border-border"
                  asChild
                >
                  <a href="https://github.com/FootballManagerFan" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Profile
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="project-button w-full justify-start bg-transparent border-border"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/maxwell-p-jackson/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
