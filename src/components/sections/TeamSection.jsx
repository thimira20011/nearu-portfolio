import React from 'react';
import { Github, Linkedin, Award } from 'lucide-react';
import ScrollReveal from '../ScrollReveal';

// ============================================================
// TEAM PHOTO PLACEHOLDERS — Replace these URL strings with real photos
// ============================================================
const IMG_THIMIRA_PHOTO  = ""; // e.g. "https://your-cdn.com/thimira.jpg"
const IMG_MANJARI_PHOTO  = ""; // e.g. "https://your-cdn.com/manjari.jpg"
const IMG_PAMAL_PHOTO    = ""; // e.g. "https://your-cdn.com/pamal.jpg"
const IMG_UVINDU_PHOTO   = ""; // e.g. "https://your-cdn.com/uvindu.jpg"
// ============================================================

const TEAM = [
  {
    name: 'K.W.T.N. Keerthiwansha',
    displayName: 'Thimira Niranjaya',
    role: 'Full Stack Developer & System Architect',
    shortRole: 'System Architect',
    photo: IMG_THIMIRA_PHOTO,
    initials: 'TN',
    color: '#ff785a', // brand-coral
    gradient: 'from-brand-coral to-brand-coral-dark',
    github: 'https://github.com/thimira20011',
    linkedin: '#', 
    tags: ['ASP.NET Core', 'PostgreSQL', 'React', 'Expo'],
  },
  {
    name: 'W.T.M.B. Wijesuriya',
    displayName: 'Manjari Bhagya',
    role: 'Frontend Developer & UI/UX Designer',
    shortRole: 'Frontend Lead',
    photo: IMG_MANJARI_PHOTO,
    initials: 'MB',
    color: '#1d76ca', // brand-blue
    gradient: 'from-brand-blue to-brand-blue-dark',
    github: '#', 
    linkedin: '#', 
    tags: ['React', 'TypeScript', 'Figma', 'Tailwind'],
  },
  {
    name: 'K.V.P. Pahasara',
    displayName: 'Pamal Pahasara',
    role: 'Cloud & DevOps Engineer',
    shortRole: 'Cloud & DevOps',
    photo: IMG_PAMAL_PHOTO,
    initials: 'PP',
    color: '#10b981', // emerald
    gradient: 'from-green-500 to-emerald-700',
    github: 'https://github.com/pamal29',
    linkedin: '#', 
    tags: ['Azure', 'Docker', 'CI/CD', 'GitHub Actions'],
  },
  {
    name: 'M.U. Heshan',
    displayName: 'Uvindu Heshan',
    role: 'Full Stack Developer & QA Engineer',
    shortRole: 'QA & Full Stack',
    photo: IMG_UVINDU_PHOTO,
    initials: 'UH',
    color: '#fbbf24', // amber
    gradient: 'from-amber-500 to-orange-700',
    github: '#', 
    linkedin: '#', 
    tags: ['Testing', 'Playwright', 'xUnit', 'Postman'],
  },
];

const SUPERVISORS = [
  { name: 'Mr. S. Nishankar', title: 'Project Supervisor', dept: 'Faculty of Computing, SUSL' },
  { name: 'Mr. Ravindu Dharmadasa', title: 'Project Mentor', dept: 'Faculty of Computing, SUSL' },
];

const TeamSection = () => (
  <section id="team" className="section-border-top py-24 px-4 bg-gradient-to-b from-[#030508]/40 to-transparent">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-brand-coral/10 border border-brand-coral/25 text-brand-coral-light text-sm font-semibold mb-4">
            The Team
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Meet the <span className="gradient-text-coral text-glow-coral">Builders</span>
          </h2>
          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto">
            Group 11 — Faculty of Computing, Sabaragamuwa University of Sri Lanka
          </p>
        </div>
      </ScrollReveal>

      {/* Team Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {TEAM.map((member, i) => (
          <ScrollReveal key={i} delay={i + 1}>
            <div
              className="glass-card p-6 flex flex-col items-center text-center group hover:scale-105 transition-all duration-300 border border-white/5"
              style={{ '--member-color': member.color }}
            >
              {/* Avatar */}
              <div className="relative mb-5">
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 shadow-xl flex-shrink-0 transition-all duration-300 group-hover:shadow-2xl"
                  style={{ borderColor: `${member.color}50`, boxShadow: `0 0 20px ${member.color}20` }}
                >
                  {member.photo ? (
                    <img
                      src={member.photo}
                      alt={member.displayName}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${member.gradient} flex items-center justify-center`}>
                      <span className="text-2xl font-black text-white">{member.initials}</span>
                    </div>
                  )}
                </div>
                {/* Glow ring on hover */}
                <div className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  style={{ boxShadow: `0 0 30px ${member.color}40` }} />
              </div>

              {/* Name & Role */}
              <p className="font-black text-white text-lg leading-tight mb-1">{member.displayName}</p>
              <p className="text-xs font-semibold mb-1" style={{ color: member.color }}>{member.shortRole}</p>
              <p className="text-slate-600 text-xs mb-4">{member.name}</p>

              {/* Tech Tags */}
              <div className="flex flex-wrap justify-center gap-1.5 mb-5">
                {member.tags.map((tag, ti) => (
                  <span key={ti} className="text-[10px] px-2 py-0.5 rounded-full border font-semibold"
                    style={{ borderColor: `${member.color}25`, color: member.color, background: `${member.color}08` }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Social Links */}
              <div className="flex items-center gap-3 mt-auto">
                {member.github !== '#' && (
                  <a href={member.github} target="_blank" rel="noopener noreferrer"
                    className="p-2 rounded-lg border border-white/10 text-slate-500 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-200"
                    aria-label={`${member.displayName} GitHub`}>
                    <Github className="w-4 h-4" />
                  </a>
                )}
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-white/10 text-slate-500 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-200"
                  aria-label={`${member.displayName} LinkedIn`}>
                  <Linkedin className="w-4 h-4" />
                </a>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      {/* Supervisors */}
      <ScrollReveal>
        <div className="text-center mb-8">
          <h3 className="text-2xl font-black text-white mb-2">Project Supervision</h3>
          <p className="text-slate-600 text-sm">Academic oversight from the Faculty of Computing</p>
        </div>
        <div className="grid sm:grid-cols-2 gap-4 max-w-2xl mx-auto">
          {SUPERVISORS.map((sup, i) => (
            <div key={i} className="glass-card p-6 flex items-center gap-4 border border-white/5 hover:border-brand-coral/20 hover:scale-[1.01] transition-all">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-brand-coral to-brand-coral-dark flex items-center justify-center flex-shrink-0 shadow-lg shadow-brand-coral/20">
                <Award className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-black text-white text-sm sm:text-base">{sup.name}</p>
                <p className="text-brand-coral-light text-xs sm:text-sm font-semibold">{sup.title}</p>
                <p className="text-slate-500 text-xs mt-0.5">{sup.dept}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TeamSection;
