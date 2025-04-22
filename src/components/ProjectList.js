import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projectItems = projects.map((project) => (
    <ProjectItem
      key={project.id}
      name={project.name}
      about={project.about}
      technologies={project.technologies}
      image={project.image}
    />
  ));

  return (
    <section id="projects">
      <h2>My Projects</h2>
      <div>{projectItems}</div>
    </section>
  );
}

export default ProjectList;
