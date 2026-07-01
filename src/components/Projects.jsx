import ProjectCard from './ProjectCard';
import projectsData from '../data';

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      {projectsData.map((project) => (
        <ProjectCard
          key={project.id}
          image={project.image}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          link={project.link}
        />
      ))}
    </section>
  );
}

export default Projects;
