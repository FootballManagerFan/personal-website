import Hero from "@/components/Hero"
import About from "@/components/About"
import Skills from "@/components/Skills"
import Experience from "@/components/Experience"
import Projects from "@/components/Projects"
import Contact from "@/components/Contact"
import DarkModeToggle from "@/components/DarkModeToggle"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <DarkModeToggle />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    </main>
  )
}
