import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { quicksand } from "../../fonts/fonts";
import ScrollToTopButton from "./components/ScrollToTopButton";




export const metadata: Metadata = {
  title: "Clavinest",
  description: "Con clavo de olor alivia el dolor",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${quicksand.className}  antialiased`}
      >
        <Navbar />
        {children}
        <ScrollToTopButton />
        <Footer />
      </body>
    </html>
  );
}
