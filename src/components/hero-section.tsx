"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// I will define Button inline if I don't want to create the file yet, but better to create the file.
// I will create button.tsx in the next step.
// For now, I will use a simple HTML button with classes to keep this atomic, 
// OR I can assume Button will exist. I will assume Button will exist and create it immediately after.

export function HeroSection() {
    return (
        <section className="relative h-screen w-full overflow-hidden flex items-center justify-center">
            {/* Background Image / Art */}
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-black/30 z-10" />
                <img
                    src="https://images.unsplash.com/photo-1578321272176-b7bbc06b9bde?q=80&w=2673&auto=format&fit=crop"
                    alt="Oil Painting Background"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Content */}
            <div className="relative z-20 text-center text-white space-y-6 max-w-4xl px-4">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="text-5xl md:text-7xl font-bold tracking-tighter"
                >
                    Into The Canvas
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
                    className="text-xl md:text-2xl font-light text-white/90 max-w-2xl mx-auto"
                >
                    A whimsical world where animals take center stage.
                    Discover the unique oil paintings of Alison Friend.
                </motion.p>

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
                    className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
                >
                    <Link
                        href="/shop"
                        className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-md bg-white px-8 font-medium text-black transition-all duration-300 hover:bg-white/90 hover:scale-105"
                    >
                        <span className="mr-2">View Collection</span>
                        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </Link>

                    <Link
                        href="/about"
                        className="group inline-flex h-12 items-center justify-center rounded-md border border-white/30 bg-white/10 px-8 font-medium text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
                    >
                        Meet Alison
                    </Link>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce text-white/70"
            >
                <span className="text-xs tracking-widest uppercase">Scroll</span>
            </motion.div>
        </section>
    );
}
