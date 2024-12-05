import React from "react";
import Navbar from "./Navigation/Navbar";
import Footer from "./Footer";

export default function Canvas({ children }: { children?: React.ReactNode }) {
  return (
    <section>
      <Navbar />
      <main className="max-w-2xl mx-4 sm:mx-auto py-20">{children}</main>
      <Footer />
    </section>
  );
}
