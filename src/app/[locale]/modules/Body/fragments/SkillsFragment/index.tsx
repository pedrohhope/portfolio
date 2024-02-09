import SkillCard from "./components/SkillCard";
import skills from "./skills";



export default function SkillsFragment() {
    return (
        <div className="mb-48">
            <h1 className="text-3xl mb-5"><span className="text-tertiary mr-4">#</span>Habilidades</h1>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-4">
                {skills.map((skill, index) => (
                    <SkillCard key={index} name={skill.name} icon={skill.icon} category={skill.category} />
                ))}
            </div>
        </div >
    )
}