"use client";

import Header from "@/components/site-header";
import Footer from "./site-footer";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <header className="bg-black sticky top-0 z-50">
        <Header />
      </header>
      <main>{children}</main>
      <Footer />
    </>
  );
}
