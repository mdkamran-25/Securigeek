import Link from "next/link";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="glass border-t border-border/50 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-almond to-burgundy bg-clip-text text-transparent">
              AIHubX
            </div>
            <p className="text-sm text-muted-foreground">
              The LeetCode for AI. Discover, learn, and master AI tools.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-almond transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-almond transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-almond transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-almond transition-colors">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h3 className="font-semibold mb-4 text-almond">Platform</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/ai-listings" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  AI Listings
                </Link>
              </li>
              <li>
                <Link href="/learn" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Learn AI
                </Link>
              </li>
              <li>
                <Link href="/leaderboard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Leaderboard
                </Link>
              </li>
              <li>
                <Link href="/hire" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Hire Talent
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="font-semibold mb-4 text-almond">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  API Reference
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Tutorials
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4 text-almond">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border/50 text-center text-sm text-muted-foreground">
          <p>&copy; 2024 AIHubX. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
