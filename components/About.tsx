import Image from "next/image"

export default function About() {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">About Me</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              I'm a Computer Science student at North Carolina A&T State University, graduating in December 2026.
              Currently working as a Software Engineer Intern at ReplyQuickAI, where I integrate AI-powered communication
              solutions and develop dashboard features that enhance user experience.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              My passion lies in full-stack development, AI integration, and creating innovative solutions that solve
              real-world problems. I have experience with modern web technologies including React, Next.js, TypeScript,
              and various AI APIs.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              When I'm not coding, you'll find me playing chess (I'm a member of USCF and Greensboro Chess Club),
              creating content for my YouTube channel SewerShorts, or exploring the latest in AI and blockchain
              technology.
            </p>
          </div>
          <div className="flex justify-center">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/untitiled-design-chess-f4uXUnFjCIppAcwyGOVxK0ehonftHj.png"
              alt="Maxwell playing chess in the park"
              width={500}
              height={500}
              className="w-[750px] h-[750px] object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
