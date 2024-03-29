'use client';
import { usePathname, useRouter } from "next/navigation";
import { PropsWithChildren } from "react";
import AnchorLink from 'react-anchor-link-smooth-scroll';
import Container from "./Container";

export interface IOption {
    name: string;
    anchor: string;
}

interface NavbarProps {
    options: IOption[];
    customStyles?: string;
}

export default function Navbar({ options, customStyles = '' }: PropsWithChildren<NavbarProps>) {
    const router = useRouter();
    const pathname = usePathname();
    const language = pathname === '/pt' ? 'pt' : 'en';

    const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const locale = e.target.value;
        router.push(`/${locale}`);
    }

    return (
        <Container>
            <div className={`flex justify-between items-center ${customStyles}`}>
                <ul className='flex space-x-10'>
                    {options.map((option, index) => (
                        <AnchorLink
                            alt={option.name}
                            href={option.anchor}
                            key={index}
                            offset={100}
                            className='text-primary
                        transition 
                        duration-150 
                        ease-out 
                        hover:text-quaternary 
                        cursor-pointer'>
                            # {option.name}
                        </AnchorLink>
                    ))}
                </ul>

                <div>
                    <select
                        value={language}
                        onChange={handleLanguageChange}
                        className='text-primary 
                        bg-transparent 
                        border-none 
                        cursor-pointer 
                        focus:outline-none
                        transition
                        focus:bg-background
                        focus:border-none
                        duration-150
                        ease-out          
                        rounded-md
                        p-3
                        hover:shadow-md'>
                        <option value='pt'>pt-BR</option>
                        <option value='en'>en-US</option>
                    </select>

                </div>
            </div>
        </Container>
    )
}
