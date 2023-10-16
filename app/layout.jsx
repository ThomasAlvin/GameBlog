import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.css";
import "./globals.css";
import { Inter } from "next/font/google";
import BootStrapClient from "./components/bootStrapClient";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Thomson Game Blog",
  description: "Level up your life one game at a time",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ChakraProvider>
          {children}
          <BootStrapClient />
        </ChakraProvider>
      </body>
    </html>
  );
}
