import React from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "My NextJS App Homepage",
    template: "%s | Next.js",
  },
  description: "Next.js project",
}; //FOR IMPROVING SEO, WE CAN COPY THIS SECTION AND PASTE IT IN ALL PARENT PAGE WITH DISTINCT PAGE TITLE AND DESCRIPTION: THIS IS THE STATIC SEO APPROACH

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="container">
          {" "}
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
