import { useTranslations } from "next-intl";

interface ProjectContainerProps {
    name: string;
    description: string;
    image: string;
    technologies: string[];
    link?: string;
}

export default function ProjectContainer({
    name,
    description,
    image,
    technologies,
    link
}: ProjectContainerProps) {
    const t = useTranslations("Home.projects.projects_list");
    return (
        <div className="flex flex-col gap-5 justify-center mb-10">
            <div className="flex flex-col gap-5 xl:flex-row">
                <div className="object-cover object-center w-full xl:max-w-2xl">
                    <img src={image} className="rounded w-full h-full" />
                </div>
                <div className="xl:w-2/5 flex justify-between flex-col">
                    <div>
                        <h2 className="text-4xl font-bold mb-2">{name}</h2>
                        <p className="mb-5">{description}</p>
                        <div className="grid grid-cols-2 gap-4 mb-5 md:grid-cols-5">
                            {technologies.map((tech, index) => (
                                <div key={index} className="bg-quaternary p-1 rounded-lg text-center">
                                    <p>{tech}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        {link && <a href={link} target="_blank" rel="noreferrer" className="text-tertiary hover:underline">{t('show_project')}</a>}
                    </div>
                </div>
            </div>
        </div>
    )
}