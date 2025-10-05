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
      period: "June 2025 – Sept 2025",
      technologies: ["TypeScript", "Next.js", "Supabase", "Twilio", "Docker", "React", "Tailwind", "i18n"],
      achievements: [
        "Integrated AI powered Agents via APIs and webhooks to enable automatic outbound SMS/WhatsApp missed call recovery, reducing client salary expenses by over 80% and increasing conversion rate",
        "Architected Supabase schema and API endpoints for SMS intent analysis based on user conversations, allowing for AI-powered conversations and bookings based on the conversation",
        "Shipped features for dark/light mode and multilingual support with persistent local storage settings",
        "Refactored UI/dashboard and middleware, modularizing dashboard components for reusability, and updating URL routing based on page and language",
      ],
    },
    {
      title: "Freelance Front-End Developer",
      company: "Odessa",
      location: "Greensboro, NC",
      period: "May 2024 - Present",
      technologies: ["React", "TypeScript", "Tailwind", "Figma"],
      achievements: [
        "Developed 3+ responsive client websites using React and Tailwind, applying modern UI/UX best practices",
        "Integrated SendMail API for live contact forms and managed deployment, hosting, payments, and client support",
        "Handled end-to-end client services including deployment, hosting, payment system setup, lead acquisition, and maintenance (3 free updates per client)",
      ],
      demoLink: "https://bitsnibblesbytes.com",
    },
    {
      title: "Jr. Lab Engineer",
      company: "Tremont Engineering",
      location: "Greensboro, NC",
      period: "Jun 2023 – Aug 2023",
      technologies: ["eField", "Excel"],
      achievements: [
        "Conducted 10+ weekly lab tests (Proctor Compaction, Concrete Strength) and on-site tests (Slump, Asphalt Coring)",
        "Delivered quality control for projects with Aldi's, Sterigenics, and LaQuinta",
        "Tracked data in Excel and eField, which was forwarded and used by project engineers",
      ],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={index}
              className="project-card shadow-lg bg-card border-border cursor-pointer"
            >
              <CardHeader className="project-card-content">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div>
                    <CardTitle className="project-title text-xl text-gray-900 dark:text-white">{exp.title}</CardTitle>
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
                    <Badge key={techIndex} variant="outline" className="project-tech-badge border-border">
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
                      className="project-button border-border bg-transparent"
                    >
                      <a href={exp.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardContent className="project-card-content">
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, achIndex) => (
                    <li key={achIndex} className="project-feature-item flex items-start gap-2 text-gray-600 dark:text-gray-300">
                      <span className="project-feature-bullet text-purple-700 dark:text-purple-400 mt-1 transition-all duration-200">•</span>
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
