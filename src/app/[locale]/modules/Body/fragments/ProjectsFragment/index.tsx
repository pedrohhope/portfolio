import ProjectContainer from "./components/ProjectContainer";
import projects from "./projects";


export default function ProjectsFragment() {
    return (
        <div>
            <h1 className="text-3xl mb-5"><span className="text-tertiary mr-4">#</span>Projetos</h1>

            {projects.map((project) => (
                <ProjectContainer
                    key={project.id}
                    name={project.name}
                    description={project.description}
                    image={project.image}
                    technologies={project.technologies || []}
                    link={project.link}
                />
            ))}
        </div>
    )
}