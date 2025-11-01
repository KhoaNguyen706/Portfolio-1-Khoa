import Image from "next/image";
import { FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt, FaFacebook, FaInstagram, FaLinkedin, FaGithub, FaTrophy, FaAward } from "react-icons/fa";
import { SiJavascript, SiTypescript, SiPostgresql, SiNextdotjs, SiExpress, SiTailwindcss, SiFastapi, SiPrisma, SiSupabase, SiMongodb, SiVite, SiVercel } from "react-icons/si";
import { IoMdMail, IoMdDownload } from "react-icons/io";
import { GiArtificialIntelligence, GiCook } from "react-icons/gi";
import { MdDeveloperMode, MdTravelExplore } from "react-icons/md";
import { BiCodeAlt } from "react-icons/bi";
import { HiSparkles, HiExternalLink } from "react-icons/hi";
import { FaBlog, FaBrain } from "react-icons/fa6";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800 p-4 md:p-6 flex items-center justify-center relative overflow-hidden scroll-smooth">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 md:w-96 md:h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 md:w-96 md:h-96 bg-purple-500/30 rounded-full blur-3xl animate-pulse"></div>
      </div>
      
      <div className="max-w-4xl w-full mx-auto relative z-10">
        <div className="backdrop-blur-xl bg-white/10 rounded-3xl md:rounded-[2.5rem] p-6 md:p-12 shadow-2xl border border-white/20 hover:border-white/30 transition-all duration-300">
          
          <div className="mb-6 md:mb-8">
            <div className="backdrop-blur-sm bg-gradient-to-r from-white/20 to-white/10 rounded-2xl md:rounded-3xl p-4 md:p-6 border border-white/20 shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 flex items-center justify-between gap-4 md:gap-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                 Hi! I'm <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">Khoa Nguyen</span>
              </h1>
              
              <div className="relative shrink-0">
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 rounded-full backdrop-blur-md bg-white/20 border-4 border-white/30 p-1 shadow-2xl hover:scale-105 transition-all duration-300 relative group">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm"></div>
                  <div className="relative w-full h-full rounded-full overflow-hidden ring-2 ring-white/40">
                    <Image
                      src="/face.jpg"
                      alt="Khoa Nguyen"
                      fill
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
         
          <div className="space-y-4">
           
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-white/10 px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-white/20 text-white/90 text-sm md:text-base font-medium hover:bg-white/20 transition-all duration-200">
                <span className="text-lg">🎓</span>
                <span>Data Science @ SJSU</span>
              </div>
              <div className="inline-flex items-center gap-2 backdrop-blur-sm bg-gradient-to-r from-yellow-500/20 to-amber-500/20 px-4 md:px-5 py-2 md:py-2.5 rounded-full border border-yellow-400/40 text-yellow-200 text-sm md:text-base font-semibold hover:from-yellow-500/30 hover:to-amber-500/30 transition-all duration-200">
                <span className="text-lg">⭐</span>
                <span>GPA: 4.0</span>
              </div>
            </div>
            
            
            <div className="backdrop-blur-sm bg-white/10 px-4 md:px-6 py-4 md:py-5 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-200">
              <p className="text-white/90 text-sm md:text-base leading-relaxed mb-3">
                I'm a Computer Science (Data Science) undergraduate with a passion for innovation and problem-solving.
              </p>
              <p className="text-white font-semibold mb-2">I'm interested in:</p>
              <ul className="space-y-2 text-white/80">
                <li className="flex items-center gap-2">
                  <GiArtificialIntelligence className="text-blue-400 text-xl" /> Artificial Intelligence
                </li>
                <li className="flex items-center gap-2">
                  <MdDeveloperMode className="text-purple-400 text-xl" /> Backend Development
                </li>
                <li className="flex items-center gap-2">
                  <BiCodeAlt className="text-pink-400 text-xl" /> Full-stack Development
                </li>
              </ul>
            </div>

            <div className="backdrop-blur-sm bg-white/10 px-4 md:px-6 py-4 md:py-5 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-200">
              <p className="text-white font-semibold mb-4 flex items-center gap-2">
                <HiSparkles className="text-xl text-yellow-400" /> Featured Projects
              </p>
              
              <div className="space-y-3">
                <div className="backdrop-blur-sm bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 group">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-semibold text-sm md:text-base flex items-center gap-2">
                      <GiCook className="text-orange-400 text-lg" /> Hungry Flow
                      <span className="px-2 py-0.5 bg-purple-500/20 border border-purple-400/30 rounded text-xs text-purple-300">CalHacks 12.0</span>
                    </h3>
                    <a 
                      href="https://github.com/KhoaNguyen706/CalHack12.0"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors flex items-center gap-1"
                      title="View on GitHub"
                    >
                      <FaGithub className="text-lg" />
                      <HiExternalLink className="text-xs" />
                    </a>
                  </div>
                  <p className="text-white/70 text-xs md:text-sm mb-2 leading-relaxed">
                    AI-powered recipe assistant with multi-agent orchestration. Detects ingredients from images, generates recipes, and provides iterative feedback until quality score ≥ 85/100.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-blue-500/20 border border-blue-400/20 rounded text-white/80 text-xs">Python</span>
                    <span className="px-2 py-0.5 bg-emerald-500/20 border border-emerald-400/20 rounded text-white/80 text-xs">FastAPI</span>
                    <span className="px-2 py-0.5 bg-cyan-400/20 border border-cyan-300/20 rounded text-white/80 text-xs">React</span>
                    <span className="px-2 py-0.5 bg-purple-500/20 border border-purple-400/20 rounded text-white/80 text-xs">Groq/Gemini</span>
                  </div>
                </div>

                <div className="backdrop-blur-sm bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 group">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-semibold text-sm md:text-base flex items-center gap-2">
                      <MdTravelExplore className="text-blue-400 text-lg" /> SmartTrip.AI
                    </h3>
                    <a 
                      href="https://github.com/KhoaNguyen706/Smart-Trip-.Ai-app"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors flex items-center gap-1"
                      title="View on GitHub"
                    >
                      <FaGithub className="text-lg" />
                      <HiExternalLink className="text-xs" />
                    </a>
                  </div>
                  <p className="text-white/70 text-xs md:text-sm mb-2 leading-relaxed">
                    Full-stack trip planner with secure authentication, Places API integration, and AI-powered budget optimization suggesting 3 cost-saving alternatives.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-cyan-400/20 border border-cyan-300/20 rounded text-white/80 text-xs">React</span>
                    <span className="px-2 py-0.5 bg-green-500/20 border border-green-400/20 rounded text-white/80 text-xs">Node.js</span>
                    <span className="px-2 py-0.5 bg-green-600/20 border border-green-500/20 rounded text-white/80 text-xs">Supabase</span>
                    <span className="px-2 py-0.5 bg-indigo-500/20 border border-indigo-400/20 rounded text-white/80 text-xs">Prisma</span>
                  </div>
                </div>

                <div className="backdrop-blur-sm bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 group">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-semibold text-sm md:text-base flex items-center gap-2">
                      <FaBlog className="text-green-400 text-lg" /> Personal Blog Platform
                    </h3>
                    <a 
                      href="https://github.com/KhoaNguyen706/BlogApp"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors flex items-center gap-1"
                      title="View on GitHub"
                    >
                      <FaGithub className="text-lg" />
                      <HiExternalLink className="text-xs" />
                    </a>
                  </div>
                  <p className="text-white/70 text-xs md:text-sm mb-2 leading-relaxed">
                    Backend-focused markdown blog with JWT authentication, tags, search functionality, rate limiting, and optimistic UI updates for seamless user experience.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-green-500/20 border border-green-400/20 rounded text-white/80 text-xs">Node.js</span>
                    <span className="px-2 py-0.5 bg-gray-600/20 border border-gray-500/20 rounded text-white/80 text-xs">Express</span>
                    <span className="px-2 py-0.5 bg-indigo-500/20 border border-indigo-400/20 rounded text-white/80 text-xs">Prisma</span>
                    <span className="px-2 py-0.5 bg-green-600/20 border border-green-500/20 rounded text-white/80 text-xs">Supabase</span>
                  </div>
                </div>

                <div className="backdrop-blur-sm bg-white/5 hover:bg-white/10 p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-200 group">
                  <div className="flex items-start justify-between gap-3 mb-2">
                    <h3 className="text-white font-semibold text-sm md:text-base flex items-center gap-2">
                      <FaBrain className="text-purple-400 text-lg" /> AI Therapist
                      <span className="px-2 py-0.5 bg-blue-500/20 border border-blue-400/30 rounded text-xs text-blue-300">SCE Hacks</span>
                    </h3>
                    <a 
                      href="https://github.com/KhoaNguyen706/ai-therapist"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white/60 hover:text-white transition-colors flex items-center gap-1"
                      title="View on GitHub"
                    >
                      <FaGithub className="text-lg" />
                      <HiExternalLink className="text-xs" />
                    </a>
                  </div>
                  <p className="text-white/70 text-xs md:text-sm mb-2 leading-relaxed">
                    Built in 5 hours at hackathon. Four therapist personas with prompt routing, strict JSON schema validation, streaming responses, and telemetry for monitoring.
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2 py-0.5 bg-cyan-400/20 border border-cyan-300/20 rounded text-white/80 text-xs">React</span>
                    <span className="px-2 py-0.5 bg-green-500/20 border border-green-400/20 rounded text-white/80 text-xs">Node.js</span>
                    <span className="px-2 py-0.5 bg-purple-500/20 border border-purple-400/20 rounded text-white/80 text-xs">OpenAI API</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-white/10 px-4 md:px-6 py-4 md:py-5 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-200">
              <p className="text-white font-semibold mb-4 flex items-center gap-2">
                <span className="text-xl">⚡</span> Technical Skills
              </p>
              
              <div className="space-y-4">
                <div>
                  <p className="text-white/70 text-xs font-medium mb-2">Languages</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-500/20 border border-blue-400/30 rounded-lg text-white/90 text-xs font-medium hover:bg-blue-500/30 transition-all">
                      <FaPython className="text-sm" /> Python
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-500/20 border border-orange-400/30 rounded-lg text-white/90 text-xs font-medium hover:bg-orange-500/30 transition-all">
                      <FaJava className="text-sm" /> Java
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-yellow-500/20 border border-yellow-400/30 rounded-lg text-white/90 text-xs font-medium hover:bg-yellow-500/30 transition-all">
                      <SiJavascript className="text-sm" /> JavaScript
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-blue-600/20 border border-blue-500/30 rounded-lg text-white/90 text-xs font-medium hover:bg-blue-600/30 transition-all">
                      <SiTypescript className="text-sm" /> TypeScript
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-500/20 border border-cyan-400/30 rounded-lg text-white/90 text-xs font-medium hover:bg-cyan-500/30 transition-all">
                      <SiPostgresql className="text-sm" /> SQL
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-white/70 text-xs font-medium mb-2">Frameworks & Libraries</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-cyan-400/20 border border-cyan-300/30 rounded-lg text-white/90 text-xs font-medium hover:bg-cyan-400/30 transition-all">
                      <FaReact className="text-sm" /> React
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-700/20 border border-slate-600/30 rounded-lg text-white/90 text-xs font-medium hover:bg-slate-700/30 transition-all">
                      <SiNextdotjs className="text-sm" /> Next.js
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-500/20 border border-green-400/30 rounded-lg text-white/90 text-xs font-medium hover:bg-green-500/30 transition-all">
                      <FaNodeJs className="text-sm" /> Node.js
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-gray-600/20 border border-gray-500/30 rounded-lg text-white/90 text-xs font-medium hover:bg-gray-600/30 transition-all">
                      <SiExpress className="text-sm" /> Express
                    </span>
                    
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-emerald-500/20 border border-emerald-400/30 rounded-lg text-white/90 text-xs font-medium hover:bg-emerald-500/30 transition-all">
                      <SiFastapi className="text-sm" /> FastAPI
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-indigo-500/20 border border-indigo-400/30 rounded-lg text-white/90 text-xs font-medium hover:bg-indigo-500/30 transition-all">
                      <SiPrisma className="text-sm" /> Prisma
                    </span>
                  </div>
                </div>

                <div>
                  <p className="text-white/70 text-xs font-medium mb-2">Tools & Platforms</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-orange-600/20 border border-orange-500/30 rounded-lg text-white/90 text-xs font-medium hover:bg-orange-600/30 transition-all">
                      <FaGitAlt className="text-sm" /> Git
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-600/20 border border-green-500/30 rounded-lg text-white/90 text-xs font-medium hover:bg-green-600/30 transition-all">
                      <SiSupabase className="text-sm" /> Supabase
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-green-700/20 border border-green-600/30 rounded-lg text-white/90 text-xs font-medium hover:bg-green-700/30 transition-all">
                      <SiMongodb className="text-sm" /> MongoDB
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-purple-500/20 border border-purple-400/30 rounded-lg text-white/90 text-xs font-medium hover:bg-purple-500/30 transition-all">
                      <SiVite className="text-sm" /> Vite
                    </span>
                    <span className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-800/20 border border-slate-700/30 rounded-lg text-white/90 text-xs font-medium hover:bg-slate-800/30 transition-all">
                      <SiVercel className="text-sm" /> Vercel
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-white/10 px-4 md:px-6 py-4 md:py-5 rounded-2xl border border-white/20 hover:border-white/30 transition-all duration-200">
              <p className="text-white font-semibold mb-4 flex items-center gap-2">
                <FaTrophy className="text-xl text-yellow-400" /> Awards & Achievements
              </p>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3 p-3 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <FaAward className="text-yellow-400 text-xl shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">ICPC North Central Region - Honorable Mention</h4>
                    <p className="text-white/60 text-xs mt-0.5">International Collegiate Programming Contest, 2024</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 p-3 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <FaAward className="text-blue-400 text-xl shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Dean's List & Honors Programs</h4>
                    <p className="text-white/60 text-xs mt-0.5">University of South Dakota, 2023-2024</p>
                  </div>
                </div>

                <div className="flex items-start gap-3 p-3 backdrop-blur-sm bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <FaAward className="text-green-400 text-xl shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-white font-semibold text-sm">Certificate: Effective Teamwork</h4>
                    <p className="text-white/60 text-xs mt-0.5">ICPC, 2024</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="backdrop-blur-sm bg-white/10 px-4 md:px-6 py-4 md:py-5 rounded-2xl border border-white/20">
              <div className="flex items-center justify-between mb-4">
                <p className="text-white font-semibold">Connect with me:</p>
                <a 
                  href="/KhoaNguyenResume.pdf"
                  download
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-green-500/30 to-emerald-500/30 hover:from-green-500/50 hover:to-emerald-500/50 border border-green-400/40 rounded-lg text-white text-sm font-medium transition-all duration-200 hover:scale-105 shadow-lg"
                >
                  <IoMdDownload className="text-lg" /> Download Resume
                </a>
              </div>
              <div className="flex flex-wrap gap-3">
                <a 
                  href="https://www.facebook.com/profile.php?id=100050962801333"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600/20 hover:bg-blue-600/40 border border-blue-400/30 rounded-lg text-white text-sm transition-all duration-200 hover:scale-105"
                >
                  <FaFacebook className="text-lg" /> Facebook
                </a>
                <a 
                  href="https://www.instagram.com/khoa_ng.06_/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-pink-600/20 hover:bg-pink-600/40 border border-pink-400/30 rounded-lg text-white text-sm transition-all duration-200 hover:scale-105"
                >
                  <FaInstagram className="text-lg" /> Instagram
                </a>
                <a 
                  href="https://www.linkedin.com/in/khoa-nguyen-558732335/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-blue-700/20 hover:bg-blue-700/40 border border-blue-400/30 rounded-lg text-white text-sm transition-all duration-200 hover:scale-105"
                >
                  <FaLinkedin className="text-lg" /> LinkedIn
                </a>
                <a 
                  href="https://github.com/KhoaNguyen706"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gray-700/20 hover:bg-gray-700/40 border border-gray-400/30 rounded-lg text-white text-sm transition-all duration-200 hover:scale-105"
                >
                  <FaGithub className="text-lg" /> GitHub
                </a>
                <a 
                  href="mailto:anhkhoa17092006@gmail.com"
                  className="inline-flex items-center gap-2 px-4 py-2 bg-red-600/20 hover:bg-red-600/40 border border-red-400/30 rounded-lg text-white text-sm transition-all duration-200 hover:scale-105"
                >
                  <IoMdMail className="text-lg" /> Email
                </a>
              </div>
            </div>

            <div className="text-center pt-4 pb-2">
              <p className="text-white/40 text-xs">
                © 2025 Khoa Nguyen. Built with Next.js & Tailwind CSS
              </p>
              <p className="text-white/30 text-xs mt-1">
                Made with 💙 in San Jose, CA
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
