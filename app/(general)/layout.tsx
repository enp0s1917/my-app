import { Navbar } from "@/components/navbar/Navbar";

export default function GeneralLayout({ children }: { children: React.ReactNode; }) {
    return (
        <>
            <Navbar />
            <main className="flex flex-col items-center p-8">
                <h1 className="text-lg pb-4">General Layout</h1>
                {children}
            </main>
        </>
    )
}
