"use client";

import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    title: "Rocathon",
    subtitle: "Hybrid Creator Search Engine",
    desc: "A TikTok Shop search engine utilizing OpenAI text-embeddings and pgvector. Implements a custom hybrid re-ranking algorithm (semantic, commerce, demographic) for optimized creator discovery.",
    link: "https://github.com/KhoaNguyen706/Rocathon",
    tags: ["TypeScript", "OpenAI", "Supabase", "pgvector"],
    color: "accent"
  },
  {
    title: "Leasify",
    subtitle: "AI Lease Agreement Analyzer",
    desc: "AI-powered legal document analyzer for renters. Features PDF extraction, LLM-based risk scoring, ElevenLabs voice synthesis, and Twilio SMS notifications for accessible housing rights.",
    link: "https://github.com/KhoaNguyen706/HackHumanity2026",
    tags: ["Python", "FastAPI", "Gemini", "ElevenLabs"],
    color: "accent-secondary"
  },
  {
    title: "Incident Pulse",
    subtitle: "Enterprise Java Backend",
    desc: "Professional incident management system with auto on-call routing. Implements JWT auth, RBAC, async Spring Mail notifications, and full Docker orchestration for enterprise reliability.",
    link: "https://github.com/KhoaNguyen706/IncidentPulse",
    tags: ["Java", "Spring Boot", "Docker", "MySQL"],
    color: "emerald-500"
  },
  {
    title: "FluxCare.AI",
    subtitle: "AI Medical Pipeline",
    desc: "Cloud-native clinical analysis pipeline. Orchestrates Gemini Vision and Perplexity APIs via async webhooks. Utilizes AWS S3 for artifact storage and MongoDB for metadata persistence.",
    link: "https://github.com/rubenyh/fusion-cruzhacks2.0",
    tags: ["Python", "FastAPI", "AWS S3", "MongoDB"],
    color: "indigo-400"
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative px-4 py-16 sm:py-24 pb-28 sm:pb-40">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-3 sm:mb-4">My Portfolio</h2>
          <h3 className="text-2xl sm:text-4xl md:text-5xl font-black text-foreground">Featured Projects</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
          {projects.map((proj, idx) => (
            <div 
              key={idx} 
              className="bento-card group flex flex-col h-full"
            >
              <div className="flex items-start justify-between mb-4 sm:mb-6">
                <div className={`p-2.5 sm:p-3 rounded-xl sm:rounded-2xl bg-foreground/5 text-xl sm:text-2xl mb-3 sm:mb-4 transition-colors group-hover:bg-accent/10 group-hover:text-accent`}>
                  <FaGithub />
                </div>
                <a 
                  href={proj.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2.5 sm:p-3 rounded-full hover:bg-foreground/5 transition-colors"
                >
                  <FaExternalLinkAlt className="text-foreground/40 hover:text-foreground text-sm sm:text-base" />
                </a>
              </div>

              <div className="flex-grow">
                <h4 className="text-xl sm:text-2xl font-bold mb-1 group-hover:text-accent transition-colors">{proj.title}</h4>
                <p className="text-xs sm:text-sm font-bold text-foreground/40 uppercase tracking-widest mb-3 sm:mb-4">{proj.subtitle}</p>
                <p className="text-sm sm:text-base text-foreground/60 leading-relaxed mb-4 sm:mb-6">
                  {proj.desc}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 sm:gap-2 mt-auto">
                {proj.tags.map((tag, i) => (
                  <span 
                    key={i} 
                    className="px-2.5 sm:px-3 py-0.5 sm:py-1 rounded-full bg-foreground/[0.03] text-[10px] sm:text-xs font-bold text-foreground/60 border border-foreground/[0.05]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
