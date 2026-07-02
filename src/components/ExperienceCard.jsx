function ExperienceCard({ type, title, years, duties }) {
  return (
    <article className="experience-card">
      <p>{type}</p>
      <h3>{title}</h3>
      <p>{years}</p>
      <ul>
        {duties.map((duty) => (
          <li key={duty}>{duty}</li>
        ))}
      </ul>
    </article>
  );
}

export default ExperienceCard;
