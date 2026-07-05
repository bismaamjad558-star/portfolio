function Skills() {
  const skills = [
    { name: "HTML", level: "95%" },
    { name: "CSS", level: "90%" },
    { name: "JavaScript", level: "85%" },
    { name: "React.js", level: "75%" },
    { name:  "Express.js", level:"65%"},
    { name:  "Node.js",  level:"65%"},
    { name: "MongoDB",  level:"65%"},
    { name: "Tailwind CSS", level: "85%" },
    { name: "Git & GitHub", level: "75%" },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100">
      <div className="max-w-5xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10">
          My Skills
        </h2>

        {skills.map((skill, index) => (
          <div key={index} className="mb-6">
            <div className="flex justify-between mb-2">
              <span className="font-semibold">{skill.name}</span>
              <span>{skill.level}</span>
            </div>

            <div className="w-full bg-gray-300 rounded-full h-4">
              <div
                className="bg-blue-600 h-4 rounded-full"
                style={{ width: skill.level }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;