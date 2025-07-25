import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Calendar, ExternalLink } from "lucide-react"

export default function Experience() {
  const experiences = [
    {
      title: "Software Engineer Intern",
      company: "ReplyQuickAI",
      location: "Sarasota, FL",
      period: "June 2025 – August 2025",
      technologies: ["Next.js", "Figma", "GitHub", "REST API", "Supabase"],
      achievements: [
        "Integrated AI-powered SMS, phone, and email agents (Twilio, Bland.AI, Retell.AI) to streamline client lead engagement and response workflows for local businesses",
        "Designed and delivered 4+ key dashboard features, including multi-language support, light/dark mode toggle, and Excel-to-JSON contact upload functionality",
        "Led Front-End/Design efforts by translating complex Figma prototypes into responsive, interactive code",
      ],
    },
    {
      title: "Freelance Front-End Developer",
      company: "Odessa",
      location: "Greensboro, NC",
      period: "May 2024 - Present",
      technologies: ["React", "Tailwind", "Express", "REST API"],
      achievements: [
        "Built 3+ fully responsive personal and business websites using React, TypeScript, and Tailwind, applying modern UI/UX best practices to maximize user engagemen",
        "Integrated SendMail API to enable real-time contact forms, allowing users to directly reach clients through the site.",
        "Handled end-to-end client services including deployment, hosting, payment system setup, lead acquisition, and maintenance (3 free updates per client).",
      ],
      demoLink: "https://bitsnibblesbytes.com",
    },
    {
      title: "Jr. Lab Engineer",
      company: "Tremont Engineering",
      location: "Greensboro, NC",
      period: "May 2023 – August 2023",
      technologies: ["eField", "Excel"],
      achievements: [
        "Ran over 10 laboratory tests per week including Proctor Compaction Tests and Concrete Compressive Strength Tests",
        "Performed over 10 on-site tests per week such as Slump tests and Asphalt Coring",
        "Spearheaded quality control and testing for projects by Aldi's, Sterigenics, and LaQuinta",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="shadow-lg hover:shadow-xl transition-shadow border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800"
            >
              <CardHeader>
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="text-xl text-gray-900 dark:text-white">{exp.title}</CardTitle>
                    <p className="text-lg font-semibold text-purple-700 dark:text-purple-400">{exp.company}</p>
                  </div>
                  <div className="flex flex-col md:items-end gap-2">
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.location}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="outline" className="border-gray-300 dark:border-gray-600">
                      {tech}
                    </Badge>
                  ))}
                </div>
                {exp.demoLink && (
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      asChild
                      className="border-gray-300 dark:border-gray-600 bg-transparent"
                    >
                      <a href={exp.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <span className="text-purple-700 dark:text-purple-400 mt-1">•</span>
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
