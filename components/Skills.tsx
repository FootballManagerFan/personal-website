import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Skills() {
  const skillCategories = [
    {
      title: "Languages & Frameworks",
      skills: ["Python", "Java", "TypeScript", "JavaScript", "React", "Next.js", "Node.js", "Flask"],
    },
    {
      title: "AI & Automation",
      skills: ["OpenAI API", "LangChain", "ChromaDB", "Google Speech API", "Twilio", "RAG Systems", "Vector Databases"],
    },
    {
      title: "Backend & Databases",
      skills: ["RESTful API", "Supabase", "SQL", "Express", "FastAPI", "Docker"],
    },
    {
      title: "Tools & Design",
      skills: ["Git", "Vercel", "Figma", "Stable Diffusion", "LaTeX", "Tailwind CSS"],
    },
    {
      title: "Organizations & Achievements",
      skills: ["ACM", "ColorStack", "CodePath", "USCF", "Greensboro Chess Club", "NCAT Crypto Club", "Wells Fargo SWE Simulation"],
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
