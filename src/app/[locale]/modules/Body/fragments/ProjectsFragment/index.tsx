import { useProjects } from "@/app/[locale]/hooks/useProjects";
import { useTranslations } from "next-intl";
import ProjectContainer from "./components/ProjectContainer";


export default function ProjectsFragment() {
    const t = useTranslations("Home.projects")
    const [
        projects,
    ] = useProjects();
    return (
        <div id="projects">
            <h1 className="text-3xl mb-5"><span className="text-tertiary mr-4">#</span>{t('title')}</h1>

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

            <p>{t('more_projects')} <a href="https://github.com/pedrohhope" target="_blank" rel="noreferrer" className="text-tertiary hover:underline">github</a></p>
        </div>
    )
}