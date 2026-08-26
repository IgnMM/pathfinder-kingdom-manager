import type {Metadata} from "next";import "./globals.css";import "./redesign.css";
export const metadata:Metadata={title:"Pathfinder Kingdom Manager",description:"Gestor de reinos, ciudades y ejércitos para Pathfinder 1e"};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="es"><body>{children}</body></html>}
