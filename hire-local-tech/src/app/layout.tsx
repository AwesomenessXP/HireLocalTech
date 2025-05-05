import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { CategoryProvider } from "@/context/category-context";
import { FilterProvider } from "@/context/filter-context";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "HireLocalTech",
  description: "Find and hire local tech talent",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <CategoryProvider>
            <FilterProvider>
              <main className="flex-1">{children}</main>
            </FilterProvider>
          </CategoryProvider>
          <Footer />
        </div>
      </body>
    </html>
  );
}
