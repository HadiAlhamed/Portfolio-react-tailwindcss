import { ArrowRight, Github } from "lucide-react";

interface Project {
    id: number,
    title: string,
    description: string,
    image: string,
    tags: string[],
    githubUrl: string,
}

const projects: Project[] = [
    {
        id: 1,
        title: "Aqari – Real Estate Mobile Application",
        description: "A comprehensive real estate platform with advanced features including property listings, real-time chat, map integration, and user authentication. Built with Flutter frontend and Django backend, supporting both buyers and sellers with sophisticated property management capabilities.",
        image: "/projects/aqari-realestate.png",
        tags: ["Flutter", "Django", "GetX", "Docker", "WebSockets", "JWT", "OpenStreetMap", "REST API", "MVC", "Firebase"],
        githubUrl: "https://github.com/HadiAlhamed/flutter-django-realestate-maps"
    },
    {
        id: 2,
        title: "MasterChef Food Service",
        description: "A multi-user food service application with three distinct user roles, each with specialized use cases. Features include order management, user-specific dashboards, and seamless Flutter-Django integration.",
        image: "/projects/masterchef-food.jpg",
        tags: ["Flutter", "Django", "Multi-user", "Food Delivery", "REST API", "State Management"],
        githubUrl: "https://github.com/HadiAlhamed/Master-chef-flutter-django"
    },
    {
        id: 3,
        title: "Chat App",
        description: "Real-time messaging application enabling registered users to communicate instantly. Built with Flutter and Firebase for seamless real-time data synchronization and user authentication.",
        image: "/projects/chat-app.jpg",
        tags: ["Flutter", "Firebase", "Real-time", "Chat", "Authentication", "NoSQL"],
        githubUrl: "https://github.com/HadiAlhamed/flutter_firebase_chat"
    },
    {
        id: 4,
        title: "Notes App",
        description: "Feature-rich notes application allowing users to create, manage, and organize notes with media attachments. Supports image integration and cloud synchronization through Firebase.",
        image: "/projects/notes-app.jpg",
        tags: ["Flutter", "Firebase", "Notes", "Media Upload", "CRUD", "Cloud Storage"],
        githubUrl: "https://github.com/HadiAlhamed/notes-flutter-firebase"
    },
    {
        id: 5,
        title: "To-Do App",
        description: "Productivity application for task scheduling and management. Built with Flutter and GetX for efficient state management, featuring intuitive task organization and tracking.",
        image: "/projects/todo-app.png",
        tags: ["Flutter", "GetX", "Task Management", "Productivity", "State Management", "Mobile"],
        githubUrl: "https://github.com/HadiAlhamed/to-do-flutter"
    },
    {
        id: 6,
        title: "Media Player",
        description: "Desktop media player application supporting multiple formats including MP3, MP4, and MKV. Developed with Qt Creator and C++ for robust cross-platform media playback capabilities.",
        image: "/projects/media-player.jpg",
        tags: ["C++", "Qt Creator", "Desktop", "Media Player", "MP3", "MP4", "MKV", "Cross-platform"],
        githubUrl: "https://github.com/HadiAlhamed/Qt-media-player"
    }
];

export default function ProjectsSection() {
    return (
        <section id="projects" className="py-24 px-4 relative">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Featured <span className="text-primary"> Projects</span>
                </h2>
                <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
                    Here are some of my recent projects. Each project was carefully crafted with
                    attention to detail, performance, and use experience.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {
                        projects.map((project, key) => (
                            <div key={key} className=" relative group bg-card rounded-lg overflow-hidden shadow-lg card-hover">
                                <div className="h-48 overflow-hidden">
                                    <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                </div>

                                <div className="p-6">
                                    <div className="flex flex-wrap gap-2 mb-4 items-start">
                                        {project.tags.map((tag) => (
                                            <span className="px-2 py-1 text-xs font-medium rounded-full text-secondary-foreground bg-primary/20">{tag}</span>
                                        ))}
                                    </div>
                                    <h3 className="text-xl font-semibold mb-1">
                                        {project.title}
                                    </h3>
                                    <p className="text-muted-foreground text-sm mb-4">{project.description}</p>

                                    <div className=" flex justify-between items-center">

                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            className="text-foreground/80 hover:text-primary transition-colors duration-300">
                                            {" "}
                                            <Github size={20} className="absolute bottom-4 left-4"/>
                                          </a>

                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className="text-center mt-12">
                    <a href="https://github.com/HadiAlhamed" 
                    target="_blank"
                    className="cosmic-button w-fit flex items-center mx-auto gap-2">
                        Check My Github <ArrowRight size={16} />
                    </a>
                </div>
            </div>

        </section>
    )
}
