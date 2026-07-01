import Link from './Link';

function ProjectCard({ image, title, description, technologies, link }) {
  return (
    <article className="project-card">
      <img src={image.url} alt={image.alt} />

      <h3>{title}</h3>
      <p>{description}</p>
      <p>
        <strong>Technologies: </strong>
        {technologies}
      </p>

      <Link url={link.url} text={'Link to ' + link.text} isExternal={true} />
    </article>
  );
}

export default ProjectCard;
