import "./globals.css";
import { Inter } from "next/font/google";
import { Providers } from "./redux/provider";
// import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Todo App",
  description: "A todo app with next and redux.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <SessionProvider session={session}> */}
        <Providers>{children}</Providers>
        {/* </SessionProvider> */}
      </body>
    </html>
  );
}
