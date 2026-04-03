"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section id="about" className="relative transition-all duration-1000 px-4 py-24 bg-foreground/[0.02]">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="text-sm font-bold tracking-[0.2em] text-accent uppercase mb-4">About Me</h2>
          <h3 className="text-4xl md:text-5xl font-black text-foreground">A glimpse into my world.</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-[200px]">
          {/* Main Bio Card */}
          <div className="md:col-span-8 md:row-span-2 bento-card flex flex-col justify-center">
            <h4 className="text-2xl font-bold mb-4">Backend, AI, and DevOps.</h4>
            <div className="space-y-4 text-foreground/70 text-lg leading-relaxed">
              <p>
                Computer Science @ SJSU (Data Science concentration). I build backends and services — 
                APIs, databases, and LLM pipelines — and automate them with Docker and CI/CD 
                when the deadline is stupid.
              </p>
              <p>
                My focus is on reliability and efficiency. I enjoy the challenge of architecting 
                distributed systems and ensuring data integrity across complex AI pipelines, 
                bridging the gap between raw research and production-ready applications.
              </p>
            </div>
          </div>



          {/* Profile Image Card */}
          <div className="md:col-span-4 md:row-span-2 bento-card overflow-hidden p-0 relative group">
            <Image 
              src="/assets/interests/Khoa.png" 
              alt="Khoa Nguyen" 
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent flex items-end p-8">
              <div>
                <p className="text-sm font-bold text-accent uppercase tracking-widest">Location</p>
                <p className="text-xl font-bold">San Jose, CA</p>
              </div>
            </div>
          </div>

          {/* Quick Facts Bento */}
          <div className="md:col-span-4 md:row-span-1 bento-card flex flex-col justify-center border-l-4 border-l-accent">
            <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-1">Education</p>
            <p className="text-xl font-bold">BS Data Science @ SJSU</p>
          </div>

          <div className="md:col-span-4 md:row-span-1 bento-card flex flex-col justify-center border-l-4 border-l-accent-secondary">
            <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-1">Focus</p>
            <p className="text-xl font-bold">Backend, AI & DevOps</p>
          </div>


          <div className="md:col-span-4 md:row-span-1 bento-card flex flex-col justify-center border-l-4 border-l-emerald-500">
            <p className="text-sm font-bold text-foreground/40 uppercase tracking-widest mb-1">Status</p>
            <p className="text-xl font-bold">Open for Internships</p>
          </div>
        </div>
      </div>
    </section>
  );
}

