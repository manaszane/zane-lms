"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, GraduationCap, Zap, Orbit, ChevronRight } from "lucide-react";

const PORTALS = [
  {
    title: "PRO TRAINING + JOBS",
    subtitle: "The Academy",
    desc: "Master industry-ready skills with guaranteed workplace simulation and placement support.",
    href: "/courses",
    icon: GraduationCap,
    aura: "from-red-600/20 to-orange-600/5",
    accent: "text-red-500",
    border: "group-hover:border-red-500/50",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
  },
  {
    title: "ZANE SPARC",
    subtitle: "The Intelligence",
    desc: "The professional continuity layer. Transition from learner to industry collaborator.",
    href: "https://sparc.zaneproed.com",
    icon: Zap,
    aura: "from-blue-600/20 to-cyan-500/5",
    accent: "text-blue-500",
    border: "group-hover:border-blue-500/50",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    title: "OMEGA",
    subtitle: "The Engine",
    desc: "Real-world execution and elite networking platform for healthcare leaders.",
    href: "https://omega.zaneproed.com",
    icon: Orbit,
    aura: "from-red-600/20 to-orange-600/5",
    accent: "text-red-500",
    border: "group-hover:border-red-500/50",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
  },
];

export function WhatAreYouLookingForSection() {
  return (
    <section className="relative py-24 lg:py-32 bg-[#050505] overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="container relative z-10 mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.p 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 mb-4"
          >
            Ecosystem Navigation
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-bold tracking-tighter text-white"
          >
            What’re you <span className="text-zinc-500 italic">looking for</span> today?
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PORTALS.map((portal, index) => (
            <motion.div
              key={portal.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="group relative"
            >
              <Link href={portal.href} className="block h-full">
                <div className={`relative h-full min-h-[400px] overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-950/50 backdrop-blur-md transition-all duration-500 ${portal.border}`}>
                  
                  {/* Background Image with Reveal Effect */}
                  <div className="absolute inset-0 z-0">
                    <Image
                      src={portal.image}
                      alt={portal.title}
                      fill
                      className="object-cover opacity-20 grayscale transition-all duration-700 group-hover:scale-110 group-hover:opacity-40 group-hover:grayscale-0"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-b ${portal.aura} via-zinc-950/90 to-zinc-950`} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10 p-10 h-full flex flex-col">
                    <div className="flex justify-between items-start mb-auto">
                      <div className={`p-3 rounded-2xl bg-zinc-900 border border-zinc-800 ${portal.accent}`}>
                        <portal.icon className="w-6 h-6" />
                      </div>
                      <ArrowUpRight className="w-6 h-6 text-zinc-700 transition-all group-hover:text-white group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>

                    <div className="mt-20">
                      <p className={`text-[10px] uppercase tracking-[0.2em] font-bold mb-2 ${portal.accent}`}>
                        {portal.subtitle}
                      </p>
                      <h3 className="text-2xl font-bold text-white mb-4">
                        {portal.title}
                      </h3>
                      <p className="text-sm text-zinc-400 leading-relaxed mb-8 opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                        {portal.desc}
                      </p>

                      <div className="flex items-center gap-2 text-xs font-bold text-white uppercase tracking-wider group-hover:gap-4 transition-all">
                        <span>Enter Portal</span>
                        <ChevronRight className={`w-4 h-4 ${portal.accent}`} />
                      </div>
                    </div>
                  </div>

                  {/* Bottom Glow Line */}
                  <div className={`absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-transparent via-current to-transparent transition-all duration-700 group-hover:w-full ${portal.accent.replace('text', 'text')}`} />
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
