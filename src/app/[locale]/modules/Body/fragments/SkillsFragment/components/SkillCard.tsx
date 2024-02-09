
interface SkillCardProps {
    name: string;
    icon: string;
    category: string;
}

export default function SkillCard({
    name,
    icon,
    category
}: SkillCardProps) {
    return (
        <div className="flex flex-row gap-3 items-center bg-background-secondary p-10 rounded-lg shadow-lg cursor-pointer hover:text-tertiary transition hover:bg-background">
            <img src={icon} width={50} height={50} />
            <div>
                <h2 className="text-2xl font-bold">{name}</h2>
                <p>{category}</p>
            </div>
        </div>
    )
}