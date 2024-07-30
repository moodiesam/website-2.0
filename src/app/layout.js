import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer"


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
        <NavBar className />
        <main className="bg-zinc-950 text-zinc-50 flex-1 h-full">
            {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
