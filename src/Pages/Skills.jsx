import React, { useEffect, memo } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const SKILLS_DATA = [
  { name: "Playwright", icon: "/playwright.svg" },
  { name: "Manual Testing", icon: "/html.svg" },
  { name: "JAVASCRIPT", icon: "/javascript.svg" },
  { name: "Selenium", icon: "/selenium.svg" },
  { name: "Cucumber", icon: "/cucumber.svg" },
  { name: "Cypress", icon: "/Cypress.svg" },
  { name: "API Testing", icon: "/api.svg" },
  { name: "Swagger", icon: "/swagger.svg" },
  { name: "Postman", icon: "/postman.svg" },
  { name: "Automation Testing", icon: "/automation.svg" },
  { name: "Jira", icon: "/jira.svg" },
  { name: "Allure Reports", icon: "/allure.svg" }
];

const SkillCard = memo(({ name, icon, index }) => {
  return (
    <div
      data-aos="zoom-in"
      data-aos-delay={index * 50}
      data-aos-duration="800"
      className="group relative"
    >
      {/* Card glow effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

      {/* Main card box */}
      <div className="relative bg-[#0c153a]/60 hover:bg-[#0c153a]/80 border border-white/5 rounded-xl p-5 flex flex-col items-center justify-between h-40 transition-all duration-300 hover:scale-[102%] hover:shadow-2xl">
        {/* Logo container */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={icon}
            alt={name}
            className="w-16 h-16 object-contain transform group-hover:scale-110 transition-transform duration-300"
            onError={(e) => {
              // Fallback image container if file is missing
              e.target.style.display = "none";
              e.target.nextSibling.style.display = "flex";
            }}
          />
          <div className="hidden items-center justify-center text-slate-500 font-bold text-3xl select-none">
            {name.charAt(0)}
          </div>
        </div>

        {/* Skill label */}
        <div className="w-full text-left text-xs uppercase tracking-wider text-slate-400 font-semibold mt-4">
          {name}
        </div>
      </div>
    </div>
  );
});

const Skills = () => {
  useEffect(() => {
    AOS.init({
      once: false,
    });
  }, []);

  return (
    <section
      id="Skills"
      className="h-auto py-20 sm:py-28 text-white overflow-hidden px-[5%] sm:px-[5%] lg:px-[10%]"
    >
      <div className="container mx-auto">
        {/* Centered Heading */}
        <div className="text-center mb-12" data-aos="fade-up" data-aos-duration="1000">
          <h2 className="inline-block text-3xl md:text-5xl font-bold text-center mx-auto text-transparent bg-clip-text bg-gradient-to-r from-[#6366f1] to-[#a855f7] mb-4">
            My Skills
          </h2>
          <p className="text-slate-300 text-sm sm:text-base md:text-lg max-w-3xl mx-auto font-light leading-relaxed">
            Proficient in QA Automation, Manual Testing, API Verification, and Test Management using Playwright, Cypress, Selenium, Cucumber, JavaScript, Postman, Swagger, Jira, and Allure Reports.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {SKILLS_DATA.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default memo(Skills);
