import { featuredPosts } from "@/lib/data";
import * as motion from 'motion/react-client'
import { Card, CardHeader } from "./ui/card";

export default function FeaturedSection() {
    const posts = featuredPosts;
    console.log("posts: ", posts);
    return <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
            <motion.div initial={{opacity: 0,y:20}} 
            animate={{opacity: 1, y: 0}} 
            transition={{duration: 0.6}} 
            className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl font-serif font-bold 
                text-foreground mb-4">Featured Insights</h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                    Curated thoughts and discoveries from the intersection of technology, design, 
                    and human experience. Dive into our latest explorations and reflections.
                </p>
            </motion.div>
            <div className="grid md:grid-cols-2 gap-8">
                {posts.map((post, index) => (
                    <motion.div key={index}>
                        <Card className="group cursor-pointer overflow-hidden 
                        hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-xs py-0">
                            <CardHeader>
                                <div>
                                    <img 
                                    src={post.image} 
                                    alt={post.title} 
                                    className="w-full h-48 object-cover transition-transform duration-300 
                                    group-hover:scale-105" />
                                </div>
                            </CardHeader>
                        </Card>
                    </motion.div>
                ))}
            </div>
        </div>

    </section>
}