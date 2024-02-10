import { useTranslations } from "next-intl";


export const useProjects = (): [
    {
        id: number;
        name: string;
        description: string;
        image: string;
        technologies: string[];
        link: string;
    }[]
] => {
    const t = useTranslations('Home.projects.projects_list')

    const projects = [
        {
            id: 1,
            name: t('project_1.title'),
            description: t('project_1.description'),
            image: './ultranimes.png',
            technologies: [
                'JavaScript',
                'TypeScript',
                'React',
                'React Native',
                'Next.js',
                'Node.js',
                'Express',
                'MongoDB',
                'Docker',
                'Git',
                'Bootstrap',
            ],
            link: 'https://www.ultranimes.com/'
        },

        {
            id: 2,
            name: t('project_2.title'),
            description: t('project_2.description'),
            image: './solar-system.png',
            technologies: [
                'JavaScript',
                'TypeScript',
                'HTML',
                'CSS',
                'Bootstrap',
                'Git',
            ],
            link: 'https://www.solarsystemsp.com.br/'
        }

    ]


    return [
        projects
    ];
}