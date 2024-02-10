import { useTranslations } from "next-intl";


const useSkills = (): [
    {
        name: string;
        icon: string;
        category: string;
    }[]
] => {
    const t = useTranslations('Home.skills');
    const skills = [
        {
            name: "JavaScript",
            icon: "https://cdn.worldvectorlogo.com/logos/javascript-1.svg",
            category: t('frontend_and_backend')
        },
        {
            name: "TypeScript",
            icon: "https://cdn.worldvectorlogo.com/logos/typescript.svg",
            category: t('frontend_and_backend')
        },
        {
            name: "React",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
            category: t('frontend')
        },
        {
            name: "Next.js",
            icon: "https://cdn.worldvectorlogo.com/logos/next-js.svg",
            category: t('frontend')
        },
        {
            name: "TailwindCSS",
            icon: "https://cdn.worldvectorlogo.com/logos/tailwind-css-2.svg",
            category: t('frontend')
        },
        {
            name: "Node.js",
            icon: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
            category: t('backend_only')
        },
        {
            name: "Express",
            icon: "https://cdn.worldvectorlogo.com/logos/express-109.svg",
            category: t('backend')
        },
        {
            name: "MongoDB",
            icon: "https://cdn.worldvectorlogo.com/logos/mongodb-icon-1.svg",
            category: t('databases')
        },
        {
            name: "PostgreSQL",
            icon: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
            category: t('databases')
        },
        {
            name: "Docker",
            icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
            category: t('devops')
        },
        {
            name: "Git",
            icon: "https://cdn.worldvectorlogo.com/logos/git-icon.svg",
            category: t('git')
        }
    ]

    return [
        skills
    ]
}


export default useSkills;