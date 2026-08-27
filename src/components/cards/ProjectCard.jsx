export default function ProjectCard({ project }) {
  return (
    <article>
      <h3>{project.title}</h3>
       <p>{project.description}</p>

      <p>{project.techStack.join(" • ")}</p>
    </article>
  );
}