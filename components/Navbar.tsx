"use client";
import * as React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import {
  Home,
  GraduationCap,
  FileText,
  Video,
  Gamepad2,
  Sun,
  Moon,
  Menu,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const navItems = [
  { href: "/", label: "Home", icon: Home },
  { href: "/academic", label: "Academic", icon: GraduationCap },
  { href: "/survey", label: "Survey", icon: FileText },
  { href: "/videos", label: "Videos", icon: Video },
  { href: "/game", label: "Game", icon: Gamepad2 },
];

export default function Navbar() {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [hoveredPath, setHoveredPath] = React.useState<string | null>(null);

  React.useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500 flex justify-center",
        isScrolled ? "pt-3" : "pt-6",
      )}
    >
      <nav
        className={cn(
          "relative flex items-center justify-between transition-all duration-700 px-8 py-3 rounded-3xl border",
          // Premium Light Mode Glass
          "bg-white/80 backdrop-blur-2xl border-gray-200/50 shadow-[0_8px_32px_0_rgba(0,0,0,0.06)] ring-1 ring-gray-200/30",
          // Premium Dark Mode Glass - FIXED
          "dark:bg-zinc-900/60 dark:backdrop-blur-2xl dark:border-white/10 dark:shadow-[0_20px_60px_0_rgba(0,0,0,0.5)] dark:ring-1 dark:ring-white/10",
          isScrolled ? "w-[92%] max-w-4xl" : "w-[96%] max-w-6xl",
        )}
      >
        {/* --- BRANDING --- */}
        <Link href="/" className="flex items-center gap-3 z-[100] group">
          <motion.div
            whileHover={{ scale: 1.15, rotate: 8 }}
            whileTap={{ scale: 0.85 }}
            className="flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 dark:bg-white backdrop-blur-sm shadow-2xl text-white dark:text-slate-900 ring-2 ring-white/20 dark:ring-slate-900/20"
          >
            <span className="text-xl font-black tracking-wider">S</span>
          </motion.div>
          <span className="text-xl font-black tracking-tight hidden sm:block text-gray-900 dark:text-white">
            STAT
          </span>
        </Link>

        {/* --- DESKTOP NAVIGATION --- */}
        <div
          className="hidden md:flex items-center gap-1"
          onMouseLeave={() => setHoveredPath(null)}
        >
          {navItems.map(({ href, label, icon: Icon }) => {
            const isActive = pathname === href;
            return (
              <Link
                key={href}
                href={href}
                onMouseEnter={() => setHoveredPath(href)}
                className={cn(
                  "relative flex items-center gap-3 px-5 py-2.5 text-sm font-semibold transition-all duration-300 rounded-2xl",
                  isActive
                    ? "text-gray-900 dark:text-white"
                    : "text-gray-600 dark:text-slate-300 hover:text-gray-800 dark:hover:text-white",
                )}
              >
                {/* Glass Active Pill */}
                {isActive && (
                  <motion.div
                    layoutId="glass-pill"
                    className="absolute inset-0 bg-gray-100/80 dark:bg-white/10 border border-gray-200/60 dark:border-white/20 shadow-lg rounded-2xl -z-10 ring-1 ring-gray-200/40 dark:ring-white/20"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.8 }}
                  />
                )}
                {/* Glass Hover Pill */}
                {hoveredPath === href && !isActive && (
                  <motion.div
                    layoutId="hover-glass"
                    className="absolute inset-0 bg-black/5 dark:bg-white/5 rounded-xl -z-10"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
                <Icon
                  className={cn(
                    "h-4 w-4 relative z-10",
                    isActive && "text-primary",
                  )}
                />
                <span className="relative z-10">{label}</span>
              </Link>
            );
          })}
        </div>

        {/* --- ACTIONS --- */}
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="rounded-full cursor-pointer w-11 h-11 bg-gray-100/60 dark:bg-white/10 hover:bg-gray-200/80 dark:hover:bg-white/20 border border-gray-200/60 dark:border-white/20 shadow-lg transition-all duration-300 backdrop-blur-xl ring-1 ring-gray-200/30 dark:ring-white/10"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-amber-500" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-indigo-400" />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden rounded-full w-10 h-10"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="text-foreground" />
            ) : (
              <Menu className="text-foreground" />
            )}
          </Button>
        </div>
      </nav>

      {/* --- MOBILE GLASS OVERLAY --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(24px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            className="fixed inset-0 bg-white/20 dark:bg-black/40 z-[40] flex items-center justify-center p-6 md:hidden"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="w-full max-w-sm bg-white/40 dark:bg-zinc-900/40 border border-white/20 dark:border-white/10 p-4 rounded-[2.5rem] shadow-2xl overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-3">
                {navItems.map(({ href, label, icon: Icon }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={cn(
                      "flex flex-col items-center gap-3 p-6 rounded-3xl transition-all active:scale-95 border",
                      pathname === href
                        ? "bg-white/80 dark:bg-white/10 border-white/40 dark:border-white/20 shadow-lg text-primary"
                        : "bg-transparent border-transparent text-muted-foreground",
                    )}
                  >
                    <Icon size={24} />
                    <span className="text-xs font-bold uppercase tracking-widest">
                      {label}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
