import { useEffect, useState } from "react";
import { cn } from "../utils";
import { Menu, X } from "lucide-react";

interface NavItem {
    name: string,
    href: string,
}

const navItems: NavItem[] = [
    {
        name: "Home", href: "#hero"
    },

    {
        name: "About", href: "#about"
    },

    {
        name: "Skills", href: "#skills"
    },
    {
        name: "Projects", href: "#projects"
    },
    {
        name: "Contact", href: "#contact"
    },
];
export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    useEffect(() => {
        const handleScroll = () => {
            const hasScrolled = window.scrollY > 10;
            setIsScrolled(hasScrolled);
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300",
            isScrolled ? "py-3 bg-background/80 backgdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a href="#hero" className="text-xl font-bold text-primary flex items-center">
                    <span className="relative z-10">
                        <span className="text-glow text-foreground">Hadi Alhamed</span> Portfolio
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8">
                    {
                        navItems.map((item, key) => (
                            <a key={key} href={item.href} className="text-foreground/80 hover:text-primary transition-colors duration-300">{item.name}</a>
                        ))
                    }
                </div>
                {/* mobile nav */}
                <button aria-label={isMenuOpen ? "Close Navbar Menu" : "Open Navbar Menu"}
                    className={cn("md:hidden p-2 text-foreground",
                        isMenuOpen && "z-50")} onClick={() => setIsMenuOpen((state) => !state)}>
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"

                )}>
                    <div className="flex flex-col space-y-8 text-xl">
                        {
                            navItems.map((item, key) => (
                                <a key={key}
                                    href={item.href}
                                    className="text-foreground/80 hover:text-primary transition-colors duration-300 active:text-primary"
                                    onClick={() => setIsMenuOpen(false)}
                                >
                                    {item.name}
                                </a>
                            ))
                        }
                    </div>
                </div>

            </div>
        </nav>
    )
}
