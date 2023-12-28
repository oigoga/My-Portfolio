import { Inter, Urbanist } from "next/font/google";
import "./globals.css";
import Container from "./container";
const inter = Inter({ subsets: ["latin"] });
const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata = {
  title: "Oigoga",
  description: "Software developer porfollio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} bg-black py-[1%] mx-[12%] text-white`}
      >
        <Container/>
        {children}
      </body>
    </html>
  );
}
