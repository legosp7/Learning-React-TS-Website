import { navItems } from "@/lib/constants";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";

export default function Navigation() {
    return <nav className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-10xl mx-auto px-4 sm:px-6 lg:px-8">
            
            <div className="flex justify-between items-center h-20">
                {/* Logo and Title */}
                <div className="flex-shrink-0">
                    <h1 className="text-xl font-serif font-bold text-foreground">The Bookshelf</h1>
                </div>

                {/* Navigation Links */}
                <div className="hidden md:flex space-x-8">
                    {navItems.map((item) => (
                        <Link key={item.name} href={item.href} className="text-sm font-medium text-muted-foreground hover:text-foreground
                        transition-colors duration-200">
                            {item.name}</Link>))}
                    <ThemeToggle />
                </div>
            </div>
        </div>

    </nav>;
}