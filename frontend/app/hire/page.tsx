"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { jobPostings } from "@/lib/dummyData";
import { Briefcase, MapPin, Clock, Users, Search, Building2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function HirePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-almond to-burgundy bg-clip-text text-transparent">
          Hire Top AI Talent
        </h1>
        <p className="text-xl text-muted-foreground">
          Connect with skilled professionals from our talent pool
        </p>
      </motion.div>

      {/* Stats Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
      >
        <Card className="glass">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-3 bg-burgundy/20 rounded-full">
              <Users className="h-6 w-6 text-burgundy" />
            </div>
            <div>
              <p className="text-2xl font-bold">50K+</p>
              <p className="text-sm text-muted-foreground">Candidates</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-3 bg-burgundy/20 rounded-full">
              <Briefcase className="h-6 w-6 text-burgundy" />
            </div>
            <div>
              <p className="text-2xl font-bold">1.2K+</p>
              <p className="text-sm text-muted-foreground">Open Positions</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-3 bg-burgundy/20 rounded-full">
              <Building2 className="h-6 w-6 text-burgundy" />
            </div>
            <div>
              <p className="text-2xl font-bold">500+</p>
              <p className="text-sm text-muted-foreground">Companies</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-3 bg-burgundy/20 rounded-full">
              <TrendingUp className="h-6 w-6 text-burgundy" />
            </div>
            <div>
              <p className="text-2xl font-bold">95%</p>
              <p className="text-sm text-muted-foreground">Success Rate</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Search Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <Card className="glass-light">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Search jobs by title, skills, or company..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="pl-10 h-12 bg-input border-border"
                />
              </div>
              <Button className="bg-burgundy hover:bg-burgundy/90 h-12 px-8">
                Search
              </Button>
            </div>
            <div className="flex flex-wrap gap-2 mt-4">
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Remote</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Full-time</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">ML Engineer</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">Senior</Badge>
              <Badge variant="outline" className="cursor-pointer hover:bg-accent">$150K+</Badge>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* For Companies Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <Card className="glass-light border-burgundy/30">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="flex-1">
                <h2 className="text-3xl font-bold mb-3">
                  Hire from AIHubX Talent Pool
                </h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Access pre-vetted AI professionals with proven skills. All candidates have completed
                  rigorous assessments and real-world projects.
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-burgundy rounded-full" />
                    <span>Verified skills through practical testing</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-burgundy rounded-full" />
                    <span>Performance rankings and badges</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-burgundy rounded-full" />
                    <span>Direct communication with candidates</span>
                  </li>
                </ul>
                <Button size="lg" className="bg-burgundy hover:bg-burgundy/90">
                  Post a Job
                </Button>
              </div>
              <div className="flex-shrink-0">
                <div className="text-8xl">💼</div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Job Listings */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
          <Briefcase className="h-6 w-6 text-burgundy" />
          Latest Job Postings
        </h2>

        <div className="space-y-4">
          {jobPostings.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 + index * 0.05 }}
              whileHover={{ x: 5 }}
            >
              <Card className="glass hover:border-burgundy/50 transition-all cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row gap-6">
                    {/* Company Logo */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-burgundy/20 rounded-lg flex items-center justify-center text-3xl">
                        {job.logo}
                      </div>
                    </div>

                    {/* Job Details */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h3 className="text-xl font-bold mb-1">{job.position}</h3>
                          <p className="text-muted-foreground">{job.company}</p>
                        </div>
                        <Badge className="bg-burgundy text-white">{job.type}</Badge>
                      </div>

                      <div className="flex flex-wrap gap-4 mb-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="h-4 w-4" />
                          Posted {job.posted}
                        </div>
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          {job.applicants} applicants
                        </div>
                      </div>

                      <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
                        <div>
                          <div className="text-lg font-bold text-burgundy mb-1">
                            {job.salary}
                          </div>
                          <Badge variant="outline" className="text-xs">
                            Required Score: {job.requiredScore}+
                          </Badge>
                        </div>
                        <Button className="bg-burgundy hover:bg-burgundy/90">
                          Apply Now
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Load More */}
        <div className="flex justify-center mt-8">
          <Button variant="outline" size="lg">
            Load More Jobs
          </Button>
        </div>
      </motion.div>
    </div>
  );
}
