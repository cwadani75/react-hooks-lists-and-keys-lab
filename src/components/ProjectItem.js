function ProjectItem({ name, about, technologies, image }) {
  const techSpans = technologies.map((tech) => (
    <span key={tech}>{tech}</span>
  ));

  return (
    <div className="project-item">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>{about}</p>
      <div className="technologies">{techSpans}</div>
    </div>
  );
}

export default ProjectItem;
