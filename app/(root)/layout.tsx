import { ChildProps } from "@/types";
import React from "react";
import Navbar from "./_components/navbar";
import Footer from "./_components/footer";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IT Blogs",
  description: "Blogs and information for work",
};

const Layout = ({ children }: ChildProps) => {
  return (
    <main>
      <Navbar />
      <div className="container">{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
