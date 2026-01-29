"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white dark:bg-[#050505] text-center px-4 transition-colors duration-500">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-2xl"
      >
        <motion.h1
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8, ease: "easeOut" }}
          className="text-[clamp(4rem,15vw,12rem)] font-extrabold text-zinc-900 dark:text-zinc-100 leading-none"
        >
          404
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: "easeOut" }}
          className="text-2xl md:text-3xl font-semibold text-zinc-700 dark:text-zinc-300 mt-4"
        >
          Page Not Found
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7, ease: "easeOut" }}
          className="text-lg text-zinc-500 dark:text-zinc-400 mt-4 leading-relaxed"
        >
          Oops! It seems the page you were looking for doesn't exist. It might
          have been moved or deleted.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.8, duration: 0.6, ease: "easeOut" }}
          className="mt-10"
        >
          <Button asChild className="h-12 px-8 rounded-full text-lg font-bold">
            <Link href="/">
              <ArrowLeft className="mr-2 h-5 w-5" /> Back to Homepage
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </div>
  );
}
