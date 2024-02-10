import Container from "../../components/Container";


export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <div className="bg-background-secondary py-10">
            <Container>
                <div className="flex justify-between items-center">
                    <div>
                        <p>{year} - Pedro Vitor</p>
                    </div>
                    <ul className="flex flex-row gap-3">
                        <li>
                            <a href="https://www.linkedin.com/in/pedro-vitor-1ba839243/"
                                target="_blank"
                                className="underline"
                                rel="noreferrer"
                            >LinkedIn</a>
                        </li>
                        <li>
                            <a href="https://github.com/pedrohhope"
                                target="_blank"
                                className="underline"
                                rel="noreferrer"
                            >Github</a>
                        </li>
                    </ul>
                </div>
            </Container>
        </div>
    )
}