import { useTranslations } from "next-intl";
import Container from "../../components/Container";

export default function Header() {
    const t = useTranslations('Home');

    return (
        <Container>
            <div className="min-h-[500px] flex items-center">
                <div>
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-row">
                            <img src="./so-so-icon.png" alt="so-so-icon" className="w-20 h-20" />
                            <div className="flex gap-3 flex-col">
                                <h1 className="text-5xl font-bold text-primary">{t('header.title')}</h1>
                                <p className="text-xl text-quaternary font-bold">{t('header.subtitle')}</p>
                            </div>
                        </div>
                        <div className="max-w-4xl">
                            <p className="text-lg text-primary">{t('header.description')}</p>
                        </div>

                        <div className="flex flex-row items-center gap-3">
                            <a
                                href="mailto:pedro.contato.vitor@gmail.com"
                                className="bg-quaternary text-white py-2 px-4 rounded-md hover:bg-tertiary transition duration-150">
                                {t('header.button')}
                            </a>
                            <p>{t('header.or')}</p>
                            <div className="flex flex-row gap-3">
                                <a href="https://www.linkedin.com/in/pedro-vitor-1ba839243/" target="__blank" rel="noopener noreferrer">
                                    <img src="./linkedin.png" alt="whatsapp-icon" className="w-8 h-8" />
                                </a>
                                <a href="https://github.com/pedrohhope" target="__blank" rel="noopener noreferrer">
                                    <img src="./github.png" alt="whatsapp-icon" className="w-8 h-8" />
                                </a>
                                <a href="https://api.whatsapp.com/send?phone=5527992613577" target="_blank" rel="noopener noreferrer">
                                    <img src="./whatsapp.png" alt="whatsapp-icon" className="w-8 h-8" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>

    )
}