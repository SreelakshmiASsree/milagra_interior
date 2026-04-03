"use client";
import React, { useState } from "react";
import { Poppins,  } from "next/font/google";
import AdminNavbar from "./adminnavbar/page";
import Sidebar from "./sideBar/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const closeSidebar = () => setIsSidebarOpen(false);

  return (
    <html lang="en">
      <body className={`${poppins.variable} antialiased`}>
        <AdminNavbar  />

        <div className="flex min-h-screen ">
           <Sidebar />
          <main
            className={`flex-1   overflow-y-auto transition-all duration-300`}
          >
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
