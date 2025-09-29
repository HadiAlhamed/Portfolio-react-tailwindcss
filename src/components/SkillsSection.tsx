import { useMemo, useState } from "react"
import { cn } from "../utils";
interface Skill {
    name: string,
    level: number,
    category: string,
}

const skills: Skill[] = [
    // Problem Solving & Algorithms (95+)
    { name: "Problem Solving", level: 96, category: "Core Competencies" },
    { name: "Algorithms", level: 95, category: "Computer Science" },
    { name: "Data Structures", level: 95, category: "Computer Science" },
    { name: "Binary Search", level: 96, category: "Algorithms" },
    { name: "Dynamic Programming", level: 95, category: "Algorithms" },
    { name: "Algorithm Complexity Analysis", level: 95, category: "Computer Science" },

    // State Management (95+)
    { name: "State Management", level: 95, category: "Mobile Development" },
    { name: "GetX", level: 95, category: "Mobile Development" },

    // Flutter & Mobile Development
    { name: "Flutter", level: 90, category: "Mobile Development" },
    { name: "Dart", level: 90, category: "Mobile Development" },
    { name: "Bloc", level: 88, category: "Mobile Development" },
    { name: "REST API Integration", level: 88, category: "Mobile Development" },

    // Frontend & Web Development
    { name: "React", level: 86, category: "Frontend Development" },
    { name: "JavaScript", level: 87, category: "Frontend Development" },
    { name: "TypeScript", level: 86, category: "Frontend Development" },
    { name: "HTML/CSS", level: 88, category: "Frontend Development" },
    { name: "Zustand", level: 90, category: "Frontend Development" },
    { name: "Redux", level: 88, category: "Frontend Development" },
    { name: "Tailwindcss", level: 87, category: "Frontend Development" },

    // Backend & Databases
    { name: "Django", level: 86, category: "Backend Development" },
    { name: "Python", level: 85, category: "Backend Development" },
    { name: "MySQL", level: 88, category: "Database" },
    { name: "Oracle", level: 87, category: "Database" },
    { name: "Firebase", level: 87, category: "Backend Development" },

    // Programming Languages & Core Skills
    { name: "C++", level: 94, category: "Programming Languages" },
    { name: "Java", level: 88, category: "Programming Languages" },
    { name: "OOP", level: 91, category: "Software Engineering" },

    // Tools & Technologies
    { name: "Git", level: 88, category: "Tools & DevOps" },
    { name: "Docker", level: 86, category: "Tools & DevOps" },
    { name: "Qt Creator", level: 87, category: "Tools & Development" },

    // Advanced CS Concepts
    { name: "Graph Theory", level: 92, category: "Computer Science" },
    { name: "DFS/BFS", level: 93, category: "Algorithms" },
    { name: "Dijkstra Algorithm", level: 91, category: "Algorithms" },

    // Software Engineering
    { name: "UML", level: 86, category: "Software Engineering" },
    { name: "Design Patterns", level: 85, category: "Software Engineering" },
    { name: "MVC Architecture", level: 87, category: "Software Engineering" },
    { name: "Clean Architecture", level: 86, category: "Software Engineering" },

    // Real-time & Advanced Features
    { name: "WebSockets", level: 86, category: "Advanced Technologies" },
    { name: "JWT Authentication", level: 88, category: "Security" },
    { name: "Real-time Chat", level: 86, category: "Advanced Technologies" },
    { name: "Push Notifications", level: 86, category: "Mobile Development" },
    { name: "OpenStreetMap Integration", level: 87, category: "Mobile Development" },
];

const categories: string[] = [
    "all",
    "Core Competencies",
    "Computer Science",
    "Algorithms",
    "Mobile Development",
    "Frontend Development",
    "Backend Development",
    "Database",
    "Programming Languages",
    "Software Engineering",
    "Tools & DevOps",
    "Tools & Development",
    "Advanced Technologies",
    "Security"
];

export default function SkillsSection() {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills: Skill[] = useMemo(() => {
        return skills.filter((skill) =>
            activeCategory === "all" || activeCategory === skill.category
        );
    }, [activeCategory]);
    return (
        <section id="skills" className="py-24 px-4 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl" >
                <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
                    My <span className="text-primary"> Skills</span>
                </h2>


                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {
                        categories.map((category, key) => (
                            <button key={key} className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground hover:bg-primary/70" : "bg-secondary/70 text-foreground hover:bg-primary/30"
                            )}
                                onClick={() => {
                                    if (activeCategory === category) {
                                        setActiveCategory("all");
                                    } else {
                                        setActiveCategory(category);
                                    }
                                }}
                            >
                                {category}
                            </button>
                        ))
                    }
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {
                        filteredSkills.map((skill, key) => (
                            <div key={key} className="bg-card p-6 rounded-lg shadow-xs card-hover">
                                <div className="text-left mb-4">
                                    <h3 className="font-semibold text-lg">
                                        {skill.name}
                                    </h3>
                                    <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                                        <div className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out]"
                                            style={
                                                {
                                                    width: skill.level + '%',
                                                }
                                            }
                                        />
                                    </div>
                                    <div className="text-right mt-1">
                                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
