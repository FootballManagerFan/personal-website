import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react"

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Get In Touch</h2>
        <Card className="shadow-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800">
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-purple-700 dark:text-purple-400">Let's Connect</CardTitle>
            <p className="text-gray-600 dark:text-gray-300 mt-4 leading-relaxed">
              I'm always interested in new opportunities and collaborations. Whether you have a project in mind or just
              want to chat about technology, feel free to reach out!
            </p>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-purple-700 dark:text-purple-400" />
                  <a
                    href="mailto:maxpjax@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400"
                  >
                    maxpjax@gmail.com
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-700 dark:text-purple-400" />
                  <a
                    href="tel:612-900-9176"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-700 dark:hover:text-purple-400"
                  >
                    612-900-9176
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-purple-700 dark:text-purple-400" />
                  <span className="text-gray-600 dark:text-gray-300">Greensboro, NC</span>
                </div>
              </div>
              <div className="space-y-4">
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent border-gray-300 dark:border-gray-600"
                  asChild
                >
                  <a href="https://github.com/FootballManagerFan" target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub Profile
                  </a>
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start bg-transparent border-gray-300 dark:border-gray-600"
                  asChild
                >
                  <a href="https://www.linkedin.com/in/maxwell-p-jackson/" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-4 h-4 mr-2" />
                    LinkedIn Profile
                  </a>
                </Button>
              </div>
            </div>
            <div className="text-center pt-6">
              <Button size="lg" asChild className="bg-purple-700 hover:bg-purple-800 text-white">
                <a href="mailto:maxpjax@gmail.com">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
