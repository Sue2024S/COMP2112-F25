'use client';

import { useEffect} from "react";
export default function PageTitle({ title }: { title: string }) {
    useEffect(() => {
        document.title = `${title} - COMP2112 Blog`;

    },[title]);

    //React component must have a return statement EVEN IF they don't render any JSX to browser
    return null;
}