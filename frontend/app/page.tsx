"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { aiTools, stats } from "@/lib/dummyData";
import { Search, Star, TrendingUp, Zap, Users, Target, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20 md:py-32"
      >
        <Badge className="mb-6 bg-burgundy/20 text-almond border-burgundy/30">
          🚀 New: AI Testing Environment Launched!
        </Badge>
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-almond via-burgundy to-almond bg-clip-text text-transparent">
          The LeetCode for AI
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto">
          Discover, compare, and master AI tools. Practice with real AI models, 
          learn cutting-edge skills, and get hired by top companies.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/ai-listings">
            <Button size="lg" className="bg-burgundy hover:bg-burgundy/90 text-white px-8">
              Explore AI Tools
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/learn">
            <Button size="lg" variant="outline" className="border-almond text-almond hover:bg-almond/10">
              Start Learning
            </Button>
          </Link>
        </div>
      </motion.section>

      {/* Search Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="max-w-4xl mx-auto mb-20"
      >
        <Card className="glass-light border-border/50">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Search AI tools..."
                  className="pl-10 h-12 bg-input border-border text-lg"
                />
              </div>
              <Button className="bg-burgundy hover:bg-burgundy/90 h-12 px-8">
                Search
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Free</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Paid</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Coding</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Aptitude</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Productivity</Badge>
            </div>
          </CardContent>
        </Card>
      </motion.section>

      {/* Stats Section */}
      <motion.section 
        variants={container}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-20"
      >
        {stats.map((stat, index) => (
          <motion.div key={index} variants={item}>
            <Card className="glass text-center">
              <CardContent className="p-6">
                <div className="text-3xl md:text-4xl font-bold text-burgundy mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.section>

      {/* Trending AI Tools */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mb-20"
      >
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <TrendingUp className="text-burgundy h-8 w-8" />
              Trending AI Tools
            </h2>
            <p className="text-muted-foreground">
              Most popular AI tools this week
            </p>
          </div>
          <Link href="/ai-listings">
            <Button variant="ghost" className="text-almond hover:text-almond/80">
              View All
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {aiTools.slice(0, 8).map((tool) => (
            <motion.div
              key={tool.id}
              whileHover={{ y: -5, scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Link href={`/ai-tool/${tool.id}`}>
                <Card className="glass h-full hover:border-burgundy/50 transition-all cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <div className="text-4xl">{tool.logo}</div>
                      <Badge variant={tool.price === "Free" ? "secondary" : "default"}>
                        {tool.price}
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{tool.name}</CardTitle>
                    <CardDescription className="line-clamp-2">
                      {tool.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-1 text-sm">
                        <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                        <span className="font-semibold">{tool.rating}</span>
                        <span className="text-muted-foreground">({tool.reviews})</span>
                      </div>
                      <div className="text-sm text-muted-foreground">
                        {tool.users} users
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-1">
                      {tool.tags.slice(0, 2).map((tag, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mb-20"
      >
        <h2 className="text-3xl font-bold text-center mb-12">
          Why Choose AIHubX?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="glass text-center">
            <CardContent className="p-8">
              <div className="mb-4 inline-block p-4 bg-burgundy/20 rounded-full">
                <Zap className="h-8 w-8 text-burgundy" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Test AI Tools Live</h3>
              <p className="text-muted-foreground">
                Practice with real AI models in our interactive testing environment. 
                Compare outputs side-by-side.
              </p>
            </CardContent>
          </Card>

          <Card className="glass text-center">
            <CardContent className="p-8">
              <div className="mb-4 inline-block p-4 bg-burgundy/20 rounded-full">
                <Users className="h-8 w-8 text-burgundy" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Learn & Compete</h3>
              <p className="text-muted-foreground">
                Master AI with structured courses, compete on leaderboards, 
                and earn badges to showcase your skills.
              </p>
            </CardContent>
          </Card>

          <Card className="glass text-center">
            <CardContent className="p-8">
              <div className="mb-4 inline-block p-4 bg-burgundy/20 rounded-full">
                <Target className="h-8 w-8 text-burgundy" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Get Hired</h3>
              <p className="text-muted-foreground">
                Top companies hire directly from our talent pool. 
                Build your profile and land your dream AI job.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.8 }}
        className="mb-20"
      >
        <Card className="glass-light border-burgundy/30">
          <CardContent className="p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Master AI?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of AI enthusiasts learning, competing, and building 
              their careers on AIHubX.
            </p>
            <Button size="lg" className="bg-burgundy hover:bg-burgundy/90 text-white px-12">
              Join Now - It&apos;s Free
            </Button>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}

