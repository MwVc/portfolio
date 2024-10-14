export default function ProjectCard({ src, link, title, description }) {
  return (
    <a href={link}>
      <img src={src} alt={`${title} logo`} className="hover" />
      <h3>{title}</h3>
      <p>{description}</p>
    </a>
  );
}
