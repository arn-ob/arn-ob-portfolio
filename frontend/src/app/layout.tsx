import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import ThemeContextProvider from './context/ThemeContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://shajidurrahman.com"),
  alternates: {
    canonical: "https://shajidurrahman.com/",
  },
  title: "Shajidur Rahman - Portfolio",
  description:
    "Shajidur Rahman is a Software Developer, Content Creator, and Technical Writer. Proficient in JavaScript, React, and modern infrastructure, Shajidur excels at building reliable systems and user-friendly applications.",
  keywords: [
    "Software Developer",
    "Software Engineer",
    "Software",
    "Full Stack Developer",
    "Full Stack",
    "Full-Stack Developer",
    "Full-Stack",
    "Front-End Developer",
    "FrontEnd Developer",
    "Front-End Web Developer",
    "Web Developer",
    "Website Development",
    "Website Design",
    "Freelancer",
    "Freelancer London",
    "Shajidur Rahman",
    "ShajidurRahman",
    "Shajidur",
    "Rahman",
    "Rahman Shajidur",
    "RahmanShajidur",
    "Developer",
    "Designer",
    "Front-End",
    "Back-End",
    "Frontend",
    "Backend",
    "Shajidur Rahman Developer",
    "Shajidur Rahman Frontend Developer",
    "Shajidur Rahman Full Stack",
    "Shajidur Rahman Full-Stack",
    "Developer London",
    "Web Developer London",
    "React Developer",
    "React",
    "ReactJS",
    "React Developer London",
    "JavaScript",
    "JavaScript Developer",
    "Developer JavaScript",
    "MERN Stack",
    "MERN",
    "SQL Developer",
    "Express Developer",
    "Node Developer",
    "Nodejs Developer",
    "Blogging",
    "Writing",
    "Technical Writing",
    "Python",
    "TypeScript",
    "React Native",
    "Django",
    "Content Creator",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        suppressHydrationWarning
      >
        <ThemeContextProvider>{children}</ThemeContextProvider>
      </body>
    </html>
  );
}
