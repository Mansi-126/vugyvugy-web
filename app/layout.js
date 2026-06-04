import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "VugyVugy - Make Every Keypress A Vibe.",
  description: "Assign funny meme sounds to your keyboard. One press = instant laugh. Built for developers who need a serotonin boost between PRs.",
  keywords: ["VugyVugy", "Developer Serotonin", "Meme Soundboard", "Desktop App", "Windows", "Mac", "Electron"],
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full flex flex-col bg-vugy-bg text-vugy-text-primary antialiased font-sans select-none overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
