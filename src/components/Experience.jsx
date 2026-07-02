import { experienceData } from '../data';
import ExperienceCard from './ExperienceCard';

function Experience() {
  return (
    <section id="experience">
      <h2>Experience</h2>

      {experienceData.map((experience) => (
        <ExperienceCard
          key={experience.id}
          type={experience.type}
          title={experience.title}
          years={experience.years}
          duties={experience.duties}
        />
      ))}
    </section>
  );
}

export default Experience;
