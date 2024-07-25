import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";


const poppins = Poppins({ 
  subsets: ["latin"],
  weight: ['200']
});

export const metadata = {
  title: "Sam Campbell",
  description: "Web developer, programmer, builder",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <NavBar />
        <main className="bg-zinc-950 text-zinc-50 min-h-screen">
            {children}
        </main>   
      </body>
    </html>
  );
}
