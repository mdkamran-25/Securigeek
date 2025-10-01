"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { aiTools } from "@/lib/dummyData";
import { Star, ExternalLink, Play, Code, MessageSquare, GitCompare } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";

export default function AIToolDetailPage() {
  const params = useParams();
  const toolId = parseInt(params.id as string);
  const tool = aiTools.find((t) => t.id === toolId) || aiTools[0];
  const [activeTab, setActiveTab] = useState("overview");

  // Dummy chart data
  const performanceData = [
    { name: "Speed", value: tool.codingScore },
    { name: "Accuracy", value: tool.aptitudeScore },
    { name: "Reliability", value: 90 },
    { name: "Cost Efficiency", value: 85 },
  ];

  const trendData = [
    { month: "Jan", score: 85 },
    { month: "Feb", score: 87 },
    { month: "Mar", score: 89 },
    { month: "Apr", score: 92 },
    { month: "May", score: 94 },
    { month: "Jun", score: tool.codingScore },
  ];

  const reviews = [
    {
      id: 1,
      author: "Alice Johnson",
      avatar: "👩‍💼",
      rating: 5,
      date: "2 days ago",
      comment: "Excellent tool! Really helped me improve my coding skills.",
    },
    {
      id: 2,
      author: "Bob Smith",
      avatar: "👨‍💻",
      rating: 4,
      date: "1 week ago",
      comment: "Great functionality, but could use better documentation.",
    },
    {
      id: 3,
      author: "Carol White",
      avatar: "👩‍🔬",
      rating: 5,
      date: "2 weeks ago",
      comment: "Best AI tool I've used so far. Highly recommended!",
    },
  ];

  const alternatives = aiTools.filter((t) => t.category === tool.category && t.id !== tool.id).slice(0, 3);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <Link href="/ai-listings" className="text-almond hover:text-almond/80 mb-4 inline-block">
          ← Back to Listings
        </Link>
        
        <Card className="glass-light">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="text-7xl">{tool.logo}</div>
              <div className="flex-1">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-4xl font-bold mb-2">{tool.name}</h1>
                    <p className="text-xl text-muted-foreground">{tool.description}</p>
                  </div>
                  <Badge variant={tool.price === "Free" ? "secondary" : "default"} className="text-lg px-4 py-1">
                    {tool.price}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                    <span className="text-lg font-semibold">{tool.rating}</span>
                    <span className="text-muted-foreground">({tool.reviews} reviews)</span>
                  </div>
                  <div className="text-muted-foreground">
                    {tool.users} active users
                  </div>
                  <Badge variant="outline">{tool.category}</Badge>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {tool.tags.map((tag, idx) => (
                    <Badge key={idx} variant="outline" className="text-sm">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Link href={`/test-environment?tool=${tool.id}`}>
                    <Button className="bg-burgundy hover:bg-burgundy/90 px-8">
                      <Play className="mr-2 h-5 w-5" />
                      Test This AI
                    </Button>
                  </Link>
                  <Button variant="outline">
                    <ExternalLink className="mr-2 h-4 w-4" />
                    Visit Website
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Tabs Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        <Tabs className="mb-8">
          <TabsList className="w-full justify-start mb-6">
            <TabsTrigger
              active={activeTab === "overview"}
              onClick={() => setActiveTab("overview")}
            >
              Overview
            </TabsTrigger>
            <TabsTrigger
              active={activeTab === "test"}
              onClick={() => setActiveTab("test")}
            >
              <Code className="mr-2 h-4 w-4" />
              Live Test
            </TabsTrigger>
            <TabsTrigger
              active={activeTab === "reviews"}
              onClick={() => setActiveTab("reviews")}
            >
              <MessageSquare className="mr-2 h-4 w-4" />
              Reviews
            </TabsTrigger>
            <TabsTrigger
              active={activeTab === "alternatives"}
              onClick={() => setActiveTab("alternatives")}
            >
              <GitCompare className="mr-2 h-4 w-4" />
              Alternatives
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          {activeTab === "overview" && (
            <TabsContent>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="glass">
                  <CardHeader>
                    <CardTitle>Performance Metrics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <BarChart data={performanceData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="name" stroke="#a3a3a3" />
                        <YAxis stroke="#a3a3a3" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1a1a1a",
                            border: "1px solid #333",
                            borderRadius: "8px",
                          }}
                        />
                        <Bar dataKey="value" fill="#800020" />
                      </BarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card className="glass">
                  <CardHeader>
                    <CardTitle>Performance Trend</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={250}>
                      <LineChart data={trendData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                        <XAxis dataKey="month" stroke="#a3a3a3" />
                        <YAxis stroke="#a3a3a3" />
                        <Tooltip
                          contentStyle={{
                            backgroundColor: "#1a1a1a",
                            border: "1px solid #333",
                            borderRadius: "8px",
                          }}
                        />
                        <Line type="monotone" dataKey="score" stroke="#800020" strokeWidth={2} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <Card className="glass mt-6">
                <CardHeader>
                  <CardTitle>Detailed Scores</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Coding Score</span>
                        <span className="font-semibold text-burgundy">{tool.codingScore}/100</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-burgundy h-2 rounded-full transition-all"
                          style={{ width: `${tool.codingScore}%` }}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="flex justify-between mb-2">
                        <span>Aptitude Score</span>
                        <span className="font-semibold text-burgundy">{tool.aptitudeScore}/100</span>
                      </div>
                      <div className="w-full bg-muted rounded-full h-2">
                        <div
                          className="bg-burgundy h-2 rounded-full transition-all"
                          style={{ width: `${tool.aptitudeScore}%` }}
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {/* Live Test Tab */}
          {activeTab === "test" && (
            <TabsContent>
              <Card className="glass">
                <CardContent className="p-8 text-center">
                  <div className="mb-6">
                    <Code className="h-16 w-16 mx-auto text-burgundy mb-4" />
                    <h3 className="text-2xl font-bold mb-2">Interactive Testing Environment</h3>
                    <p className="text-muted-foreground mb-6">
                      Test {tool.name} in our dedicated testing environment with real-time feedback
                    </p>
                  </div>
                  <Link href={`/test-environment?tool=${tool.id}`}>
                    <Button size="lg" className="bg-burgundy hover:bg-burgundy/90">
                      <Play className="mr-2 h-5 w-5" />
                      Launch Testing Environment
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </TabsContent>
          )}

          {/* Reviews Tab */}
          {activeTab === "reviews" && (
            <TabsContent>
              <div className="space-y-4">
                {reviews.map((review) => (
                  <Card key={review.id} className="glass">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="text-4xl">{review.avatar}</div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <div>
                              <h4 className="font-semibold">{review.author}</h4>
                              <div className="flex items-center gap-2">
                                <div className="flex">
                                  {Array.from({ length: review.rating }).map((_, i) => (
                                    <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                                  ))}
                                </div>
                                <span className="text-sm text-muted-foreground">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          )}

          {/* Alternatives Tab */}
          {activeTab === "alternatives" && (
            <TabsContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {alternatives.map((alt) => (
                  <Link key={alt.id} href={`/ai-tool/${alt.id}`}>
                    <Card className="glass h-full hover:border-burgundy/50 transition-all cursor-pointer">
                      <CardHeader>
                        <div className="flex items-start justify-between mb-2">
                          <div className="text-4xl">{alt.logo}</div>
                          <Badge variant={alt.price === "Free" ? "secondary" : "default"}>
                            {alt.price}
                          </Badge>
                        </div>
                        <CardTitle className="text-lg">{alt.name}</CardTitle>
                        <CardDescription className="line-clamp-2">
                          {alt.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-1 mb-3">
                          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          <span className="font-semibold">{alt.rating}</span>
                          <span className="text-muted-foreground text-sm">({alt.reviews})</span>
                        </div>
                        <Button className="w-full bg-burgundy hover:bg-burgundy/90">
                          View Details
                        </Button>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            </TabsContent>
          )}
        </Tabs>
      </motion.div>
    </div>
  );
}
