import ProjectCard from './ProjectCard';
import { projectsData } from '../data';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('all');
  const options = ['all', 'frontend', 'backend', 'full-stack'];

  const visibleProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((project) => project.category === filter);

  function handleFilterProjects(e) {
    setFilter(e.target.value);
  }

  return (
    <section id="projects">
      <h2>Projects</h2>

      <div id="projects-filter">
        {options.map((option) => (
          <label key={option}>
            <input
              type="radio"
              name="category"
              value={option}
              checked={filter === option}
              onChange={handleFilterProjects}
            />
            {option} projects
          </label>
        ))}
      </div>
      <div className="container">
        {visibleProjects.length === 0 ? (
          <p>No projects in this category yet.</p>
        ) : (
          visibleProjects.map((project) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              technologies={project.technologies}
              link={project.link}
            />
          ))
        )}
      </div>
    </section>
  );
}
