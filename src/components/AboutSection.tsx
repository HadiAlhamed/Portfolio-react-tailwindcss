import { Code, Puzzle, Smartphone, } from "lucide-react";

export default function AboutSection() {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* left part description of self */}
          {/* left part description of self */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight">
                Problem Solver & Frontend Developer
              </h3>
              <p className="text-muted-foreground mt-2">
                Mid-level Flutter developer and junior React.js specialist passionate about
                crafting elegant solutions to complex challenges. I thrive on transforming
                ideas into performant, user-centric applications across mobile and web platforms.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">
                Continuous Learner & Growth Mindset
              </h3>
              <p className="text-muted-foreground mt-2">
                Driven by an insatiable curiosity and commitment to lifelong learning.
                Constantly expanding my technical knowledge while exploring emerging technologies
                to stay at the forefront of modern development practices and deliver cutting-edge solutions.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>
              <a
                href="/Hadi_Alhamed_CV.pdf"
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/20 hover:text-foreground transition-colors duration-300"
                download="Hadi_Alhamed_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
            </div>
          </div>

          {/* skills */}
          <div className="grid grid-cols-1 gap-6">

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Web Development</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Creating responsive websites and web applications with modern frameworks.
                  </p>
                </div>
              </div>
            </div>



            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Smartphone className="h-6 w-6 text-primary" />

                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Mobile Development</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Building cross-platform mobile applications with Flutter,
                    focusing on performance , optimization and native-like user experiences.
                  </p>
                </div>
              </div>
            </div>

            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Puzzle className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="text-lg font-semibold">Problem Solving</h4>
                  <p className="text-muted-foreground">
                    {" "}
                    Analytical approach to breaking down complex challenges and
                    implementing efficient, scalable solutions across platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
