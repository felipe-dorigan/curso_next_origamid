import ServerFetch from "@/components/server-fetch"; // cliente
import Width from "@/components/width"; // cliente
import { Metadata } from "next";

export const metadata: Metadata = {
    title: 'Sobre',
    description: 'Página sobre',
};

export default function SobrePage() {
    return (
        <main>
            <h1>Sobre</h1>
            <Width />
            <ServerFetch />
        </main>
    )
}