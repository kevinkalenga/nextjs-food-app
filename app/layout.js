import { Geist, Geist_Mono } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v16-appRouter";
import "./globals.css";
import Nav from "@/components/nav/Nav"
import TopNav from "@/components/nav/topnav/TopNav"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Food Delivery App",
  description: "Food delivery application",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <AppRouterCacheProvider>
          <TopNav />
          <Nav />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
