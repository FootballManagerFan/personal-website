import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Github } from "lucide-react"

export default function Projects() {
  const projects = [
    {
      title: "Prep.AI",
      description:
        "Real-time AI interview simulator supporting natural voice conversations with contextual follow-ups and IDE integration for live code compilation.",
      technologies: ["Node.js", "Express", "Google Speech API", "OpenAI API", "FastAPI", "Docker"],
      features: [
        "Built real-time AI interview simulator supporting natural voice conversations with contextual follow-ups",
        "Implemented Voice Activity Detection and PDF parsing to add resume upload and microphone features",
        "Added custom questions and topics with IDE integration, hosted on Docker to compile code live. Languages include Python, Java, JavaScript, and C++",
        "Combined Google Speech-to-Text with GPT-3.5 for accurate, low-cost interview prompts",
      ],
      links: {},
    },
    {
      title: "MotivateAI",
      description:
        "Entrepreneur Biography RAG System using semantic search to process entrepreneur biographies with intelligent retrieval and synthesis.",
      technologies: ["Python", "LangChain", "ChromaDB", "OpenAI API", "Vector Embeddings"],
      features: [
        "Engineered semantic search system processing 6+ entrepreneur biographies using OpenAI embeddings and ChromaDB vector database",
        "Added custom metadata, post-retrieval prompts, and auto-chunking to support better filtered queries",
        "Used LangChain to calculate embedding distance between vectors, focusing on cosine similarity",
        "Built interface to configure retrieval parameters and request prompts for multi-source synthesis, deployed with query logging and source attribution",
      ],
      links: {},
    },
    {
      title: "SewerShorts",
      description:
        "YouTube channel that grew to over 18,000 views in one month by leveraging trending topics and short-form video strategies.",
      technologies: ["Content Strategy", "CapCut", "Market Analysis"],
      features: [
        "Analyzed TikTok algorithm behavior and utilized TTCC, CTR optimization",
        "Implemented audience retention techniques including the 3 Second Rule",
        "Optimized thumbnail selection and captivating hooks",
        "Achieved high-quality profile images and branding consistency",
      ],
      links: {},
    },
    {
      title: "DreamHomeAI",
      description:
        "A full-stack AI-powered application that generates custom-designed dream homes based on user input.",
      technologies: ["Flask", "Replicate API", "Stable Diffusion", "VSCode", "LoRA Training"],
      features: [
        "Developed full-stack AI-powered application for custom dream home generation",
        "Utilized Flask for back-end development with Replicate API integration",
        "Designed responsive front-end using HTML, CSS, and JavaScript",
        "Implemented dynamic API interactions for high-quality AI image generation",
      ],
      links: {},
    },
  ]

  return (
    <section id="projects" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">Featured Projects</h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="project-card h-full shadow-lg bg-card border-border cursor-pointer"
            >
              <CardHeader className="project-card-content">
                <CardTitle className="project-title text-2xl text-purple-700 dark:text-purple-400 mb-3">
                  {project.title}
                </CardTitle>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge
                      key={techIndex}
                      variant="secondary"
                      className="project-tech-badge bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="project-card-content space-y-6">
                <ul className="space-y-3">
                  {project.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="project-feature-item flex items-start gap-3 text-gray-600 dark:text-gray-300"
                    >
                      <span className="project-feature-bullet text-purple-700 dark:text-purple-400 mt-1 transition-all duration-200">
                        •
                      </span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <div className="flex gap-3 pt-4">
                  {project.links.github && (
                    <Button
                      variant="outline"
                      size="sm"
                      className="project-button bg-transparent border-border"
                      asChild
                    >
                      <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
