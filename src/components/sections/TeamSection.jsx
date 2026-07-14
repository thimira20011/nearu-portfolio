import React from 'react';
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
    color: '#a855f7',
    gradient: 'from-violet-500 to-purple-700',
    github: 'https://github.com/thimira20011',
    linkedin: '#', // Replace with real LinkedIn URL
    tags: ['ASP.NET Core', 'PostgreSQL', 'React', 'Expo'],
  },
  {
    name: 'W.T.M.B. Wijesuriya',
    displayName: 'Manjari Bhagya',
    role: 'Frontend Developer & UI/UX Designer',
    shortRole: 'Frontend Lead',
    photo: IMG_MANJARI_PHOTO,
    initials: 'MB',
    color: '#06b6d4',
    gradient: 'from-cyan-500 to-teal-700',
    github: '#', // Replace with real GitHub URL
    linkedin: '#', // Replace with real LinkedIn URL
    tags: ['React', 'TypeScript', 'Figma', 'Tailwind'],
  },
  {
    name: 'K.V.P. Pahasara',
    displayName: 'Pamal Pahasara',
    role: 'Cloud & DevOps Engineer',
    shortRole: 'Cloud & DevOps',
    photo: IMG_PAMAL_PHOTO,
    initials: 'PP',
    color: '#22c55e',
    gradient: 'from-green-500 to-emerald-700',
    github: 'https://github.com/pamal29',
    linkedin: '#', // Replace with real LinkedIn URL
    tags: ['Azure', 'Docker', 'CI/CD', 'GitHub Actions'],
  },
  {
    name: 'M.U. Heshan',
    displayName: 'Uvindu Heshan',
    role: 'Full Stack Developer & QA Engineer',
    shortRole: 'QA & Full Stack',
    photo: IMG_UVINDU_PHOTO,
    initials: 'UH',
    color: '#f59e0b',
    gradient: 'from-amber-500 to-orange-700',
    github: '#', // Replace with real GitHub URL
    linkedin: '#', // Replace with real LinkedIn URL
    tags: ['Testing', 'Playwright', 'xUnit', 'Postman'],
  },
];

const SUPERVISORS = [
  { name: 'Mr. S. Nishankar', title: 'Project Supervisor', dept: 'Faculty of Computing, SUSL' },
  { name: 'Mr. Ravindu Dharmadasa', title: 'Project Mentor', dept: 'Faculty of Computing, SUSL' },
];

const TeamSection = () => (
  <section id="team" className="section-border-top py-24 px-4">
    <div className="max-w-6xl mx-auto">
      <ScrollReveal>
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-violet-500/10 border border-violet-500/25 text-violet-400 text-sm font-semibold mb-4">
            The Team
          </span>
          <h2 className="text-4xl sm:text-5xl font-black text-white mb-4">
            Meet the <span className="gradient-text">Builders</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Group 11 — Faculty of Computing, Sabaragamuwa University of Sri Lanka
          </p>
        </div>
      </ScrollReveal>

      {/* Team Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
        {TEAM.map((member, i) => (
          <ScrollReveal key={i} delay={i + 1}>
            <div
              className="glass-card p-6 flex flex-col items-center text-center group hover:scale-105 transition-all duration-300"
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
                  <span key={ti} className="text-xs px-2 py-0.5 rounded-full border font-medium"
                    style={{ borderColor: `${member.color}30`, color: member.color, background: `${member.color}0d` }}>
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
                    <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z" />
                    </svg>
                  </a>
                )}
                <a href={member.linkedin} target="_blank" rel="noopener noreferrer"
                  className="p-2 rounded-lg border border-white/10 text-slate-500 hover:text-white hover:border-white/25 hover:bg-white/5 transition-all duration-200"
                  aria-label={`${member.displayName} LinkedIn`}>
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
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
            <div key={i} className="glass-card p-6 flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-violet-600 to-violet-800 flex items-center justify-center flex-shrink-0">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <div>
                <p className="font-black text-white">{sup.name}</p>
                <p className="text-violet-400 text-sm font-semibold">{sup.title}</p>
                <p className="text-slate-600 text-xs mt-0.5">{sup.dept}</p>
              </div>
            </div>
          ))}
        </div>
      </ScrollReveal>
    </div>
  </section>
);

export default TeamSection;
