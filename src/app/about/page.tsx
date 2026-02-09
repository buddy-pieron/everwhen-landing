export default function AboutPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">About Pieron Labs</h1>
        
        <div className="prose prose-lg dark:prose-invert">
          <p>
            Hi, I'm <strong>Jack Pieron</strong>, founder of Pieron Labs. I build modern web applications 
            using Next.js, Convex, and AI tools.
          </p>
          
          <p>
            Based in Grand Rapids, MI, I'm passionate about helping indie developers ship faster and 
            build better products. This blog is my way of sharing what I learn along the way.
          </p>
          
          <h2>What I Write About</h2>
          <ul>
            <li>Next.js 15 patterns and best practices</li>
            <li>Building real-time apps with Convex</li>
            <li>Integrating AI into development workflows</li>
            <li>Startup lessons and product development</li>
            <li>Practical code tutorials</li>
          </ul>
          
          <h2>Tech Stack</h2>
          <p>
            I primarily work with:
          </p>
          <ul>
            <li><strong>Frontend:</strong> Next.js 15, TypeScript, Tailwind CSS, shadcn/ui</li>
            <li><strong>Backend:</strong> Convex (real-time database)</li>
            <li><strong>AI:</strong> Claude, GPT-4, various coding agents</li>
            <li><strong>Deployment:</strong> Vercel, AWS</li>
          </ul>
          
          <h2>Get in Touch</h2>
          <p>
            Want to connect? Find me on social media or drop me an email. Always happy to chat 
            about tech, startups, or potential collaborations.
          </p>
        </div>
      </div>
    </div>
  )
}
