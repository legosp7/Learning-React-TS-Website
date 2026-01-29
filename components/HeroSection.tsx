import * as motion from "motion/react-client";
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
    return <section className="min-h-[90vh] flex items-center px-4 sm:px-6 lg:px-8 
    overflow-hidden">
        <div className="max-w-7xl mx-auto"> {/* Container to limit width, change to mx-auto if awful on lower res */}
            <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/*Left Content*/}
                <motion.div 
                initial={{ opacity: 0, y: 20 }} 
                animate={{ opacity: 1, y: 0 }}  
                transition={{ duration: 0.8 }}
                className="text-center lg:text-left"> {/* Fade in from bottom, initial state, animate is final state */}
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground
                    leading-tight mb-6">
                        Writing That{" "}
                        <span className="text-primary italic">Resonates</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-8">
                        Welcome to my personal blog where I share insights, stories, 
                        and ideas that inspire and inform. Dive into a world of engaging content crafted to 
                        resonate with readers from all walks of life.
                    </p>

                    <motion.div initial={{ opacity: 0, y: 20 }} 
                    animate={{ opacity: 1, y: 0 }}  
                    transition={{ duration: 0.8, delay: 0.2 }}>
                        <Button size="lg" className="group">
                            Read my Latest Post! {" "}
                            <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                        </Button>
                    </motion.div>
                </motion.div>

                {/*Right Content*/}
                <motion.div initial={{ opacity: 0, scale: 0.8}} 
                animate={{ opacity: 1, scale: 1}}  
                transition={{ duration: 0.8, delay: 0.4 }} 
                className="hidden lg:block">
                    
                    <div className="relative">
                        <div className="w-80 h-80 bg-linear-to-br from-primary/20 to-secondary/20 
                        rounded-full blur-3xl absolute -top-10 -right-10"></div>
                        <div className="w-96 h-96 bg-linear-to-tl from-secondary/30 to-primary/30
                        rounded-2xl transform rotate-6 shadow-2xl"></div>
                    </div>
                </motion.div>
            </div>
        </div>
    </section>;
}