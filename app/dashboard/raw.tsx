import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import "../globals.css";
import { AuthProvider } from "@/lib/Providers";
import { DashboardNavigation } from "../../components/ui/DashboardNavigation";
const inter = Inter({ subsets: ["latin"] });



export default function DashboardLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <html lang="en">
        <body className={`${inter.className}`}>
        <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
              >
              <AuthProvider>
                <DashboardNavigation />
                {children}  
              </AuthProvider>
          </ThemeProvider>
          </body>
      </html>
    );
  }