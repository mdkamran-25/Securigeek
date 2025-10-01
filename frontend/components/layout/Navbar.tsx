"use client";

import Link from "next/link";
import { Search, Menu, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 glass border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <div className="text-2xl font-bold bg-gradient-to-r from-almond to-burgundy bg-clip-text text-transparent">
              AIHubX
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-foreground hover:text-almond transition-colors">
              Home
            </Link>
            <Link href="/ai-listings" className="text-foreground hover:text-almond transition-colors">
              AI Listings
            </Link>
            <Link href="/learn" className="text-foreground hover:text-almond transition-colors">
              Learn
            </Link>
            <Link href="/leaderboard" className="text-foreground hover:text-almond transition-colors">
              Leaderboard
            </Link>
            <Link href="/hire" className="text-foreground hover:text-almond transition-colors">
              Hire
            </Link>
          </div>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
              <Input
                type="search"
                placeholder="Search AI tools..."
                className="pl-10 bg-input border-border"
              />
            </div>
          </div>

          {/* User Menu */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden md:flex">
              <User className="h-5 w-5" />
            </Button>
            <Button className="hidden md:inline-flex bg-burgundy hover:bg-burgundy/90">
              Get Started
            </Button>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-4 border-t border-border/50">
            <Link href="/" className="block text-foreground hover:text-almond transition-colors">
              Home
            </Link>
            <Link href="/ai-listings" className="block text-foreground hover:text-almond transition-colors">
              AI Listings
            </Link>
            <Link href="/learn" className="block text-foreground hover:text-almond transition-colors">
              Learn
            </Link>
            <Link href="/leaderboard" className="block text-foreground hover:text-almond transition-colors">
              Leaderboard
            </Link>
            <Link href="/hire" className="block text-foreground hover:text-almond transition-colors">
              Hire
            </Link>
            <div className="pt-4">
              <Input
                type="search"
                placeholder="Search AI tools..."
                className="mb-4 bg-input border-border"
              />
              <Button className="w-full bg-burgundy hover:bg-burgundy/90">
                Get Started
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
