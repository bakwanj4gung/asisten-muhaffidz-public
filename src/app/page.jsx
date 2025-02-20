'use client';

import React from "react";
import NavbarLanding from "@/components/landing/NavbarLanding";
import HeroLanding from "@/components/landing/HeroLanding";
import { motion, useScroll } from "framer-motion";
import AboutLanding from "@/components/landing/AboutLanding";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <main>
      <motion.div className="fixed bottom-0 left-0 right-0 h-2 bg-primary origin-0" style={{ scaleX: scrollYProgress }} />
      {/* Navbar */}
      <NavbarLanding />
      {/* Hero */}
      <HeroLanding />
      {/* About */}
      <AboutLanding />

      {/* Dilanjut nanti lagi */}
    </main>
  );
}
