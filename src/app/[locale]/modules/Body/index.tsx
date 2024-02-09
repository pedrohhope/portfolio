import Container from "../../components/Container"
import ProjectsFragment from "./fragments/ProjectsFragment"
import SkillsFragment from "./fragments/SkillsFragment"


export default function Body() {
    return (
        <div className=" bg-background-secondary pt-32 pb-32">
            <Container>
                <SkillsFragment />
                <ProjectsFragment />
            </Container>
        </div>
    )
}