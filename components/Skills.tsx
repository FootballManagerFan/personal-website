import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "Tailwind CSS", "HTML/CSS"],
    },
    {
      title: "Backend Development",
      skills: ["Node.js", "Express.js", "Python", "Java", "REST API", "Flask"],
    },
    {
      title: "AI & Machine Learning",
      skills: ["OpenAI API", "Google AI Studio", "Stable Diffusion", "LoRA", "Twilio", "Bland.AI", "Retell.AI"],
    },
    {
      title: "Tools & Technologies",
      skills: ["GitHub", "Figma", "Supabase", "Cursor", "LaTeX", "Excel"],
    },
    {
      title: "Organizations & Achievements",
      skills: ["Wells Fargo Forage", "ACM", "ColorStack", "CodePath", "USCF", "NCAT Crypto Club"],
    },
  ]

  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Skills & Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <Card key={index} className="project-card h-full bg-card border-border cursor-pointer">
              <CardHeader className="project-card-content">
                <CardTitle className="project-title text-xl text-purple-700 dark:text-purple-400">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="project-card-content">
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      variant="secondary"
                      className="project-tech-badge bg-secondary text-secondary-foreground"
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
