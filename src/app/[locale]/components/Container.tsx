import React from "react";

interface ContainerProps {
    children: React.ReactNode;
    customStyles?: string;

}

export default function Container({
    children,
    customStyles = ""
}: ContainerProps) {
    return (
        <div className={`${customStyles} container mx-auto px-4`}>
            {children}
        </div>
    )
}