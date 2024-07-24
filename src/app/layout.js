import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Sam Campbell",
  description: "Web developer, programmer, builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <NavBar />
                <main className="bg-sky-200 min-h-screen">
                    {children}
                </main>   
      </body>
    </html>
  );
}
