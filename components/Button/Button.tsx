"use client"
import {useState} from "react";
import Link from "next/link";

type Props = {
    id: number
};
const Button = ({id}: Props) => {
    const [URL, setURL] = useState(null)
    return (
        <Link href={`http://localhost:3000/characters/${id}`}>Details</Link>
    );
};
export default Button;
