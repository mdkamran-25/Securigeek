"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { aiTools } from "@/lib/dummyData";
import { Search, Star, Filter, Grid, List, SlidersHorizontal } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function AIListingsPage() {
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCategory, setSelectedCategory] = useState<string>("all");
  const [selectedPrice, setSelectedPrice] = useState<string>("all");
  const [sortBy, setSortBy] = useState<string>("rating");

  const categories = ["all", "Coding", "Productivity", "Aptitude"];
  const priceOptions = ["all", "Free", "Paid"];
  const sortOptions = [
    { value: "rating", label: "Top Rated" },
    { value: "users", label: "Most Used" },
    { value: "newest", label: "Newest" },
  ];

  const filteredTools = aiTools.filter((tool) => {
    if (selectedCategory !== "all" && tool.category !== selectedCategory) return false;
    if (selectedPrice !== "all" && tool.price !== selectedPrice) return false;
    return true;
  });

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-almond to-burgundy bg-clip-text text-transparent">
          AI Tools Directory
        </h1>
        <p className="text-xl text-muted-foreground">
          Discover and compare {aiTools.length}+ AI tools across different categories
        </p>
      </motion.div>

      {/* Search and Filters */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="mb-8"
      >
        <Card className="glass-light">
          <CardContent className="p-6">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
                <Input
                  type="search"
                  placeholder="Search AI tools..."
                  className="pl-10 h-12 bg-input border-border"
                />
              </div>
              <Button className="bg-burgundy hover:bg-burgundy/90 h-12 px-8">
                Search
              </Button>
            </div>

            <div className="flex flex-wrap gap-4 items-center justify-between">
              {/* Category Filter */}
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <Badge
                    key={category}
                    variant={selectedCategory === category ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedCategory(category)}
                  >
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </Badge>
                ))}
              </div>

              {/* Price Filter */}
              <div className="flex gap-2">
                {priceOptions.map((price) => (
                  <Badge
                    key={price}
                    variant={selectedPrice === price ? "default" : "outline"}
                    className="cursor-pointer"
                    onClick={() => setSelectedPrice(price)}
                  >
                    {price.charAt(0).toUpperCase() + price.slice(1)}
                  </Badge>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Toolbar */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-4">
          <span className="text-muted-foreground">
            {filteredTools.length} results
          </span>
          <div className="flex items-center gap-2">
            <SlidersHorizontal className="h-4 w-4 text-muted-foreground" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-input border border-border rounded-md px-3 py-1 text-sm"
            >
              {sortOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            variant={viewMode === "grid" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("grid")}
          >
            <Grid className="h-4 w-4" />
          </Button>
          <Button
            variant={viewMode === "list" ? "default" : "outline"}
            size="icon"
            onClick={() => setViewMode("list")}
          >
            <List className="h-4 w-4" />
          </Button>
        </div>
      </div>

      {/* AI Tools Grid/List */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className={
          viewMode === "grid"
            ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
            : "space-y-4"
        }
      >
        {filteredTools.map((tool, index) => (
          <motion.div
            key={tool.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            whileHover={{ y: -5 }}
          >
            <Link href={`/ai-tool/${tool.id}`}>
              <Card
                className={`glass h-full hover:border-burgundy/50 transition-all cursor-pointer ${
                  viewMode === "list" ? "flex flex-row" : ""
                }`}
              >
                {viewMode === "grid" ? (
                  <>
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
                      <div className="flex flex-wrap gap-1 mb-4">
                        {tool.tags.slice(0, 2).map((tag, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                      <Button className="w-full bg-burgundy hover:bg-burgundy/90">
                        Try Now
                      </Button>
                    </CardContent>
                  </>
                ) : (
                  <>
                    <div className="p-6 flex items-center gap-4 flex-1">
                      <div className="text-5xl">{tool.logo}</div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between mb-2">
                          <CardTitle className="text-xl">{tool.name}</CardTitle>
                          <Badge variant={tool.price === "Free" ? "secondary" : "default"}>
                            {tool.price}
                          </Badge>
                        </div>
                        <CardDescription className="mb-3">
                          {tool.description}
                        </CardDescription>
                        <div className="flex items-center gap-4 mb-3">
                          <div className="flex items-center gap-1 text-sm">
                            <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                            <span className="font-semibold">{tool.rating}</span>
                            <span className="text-muted-foreground">({tool.reviews} reviews)</span>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {tool.users} users
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-1">
                          {tool.tags.map((tag, idx) => (
                            <Badge key={idx} variant="outline" className="text-xs">
                              {tag}
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <Button className="bg-burgundy hover:bg-burgundy/90">
                        Try Now
                      </Button>
                    </div>
                  </>
                )}
              </Card>
            </Link>
          </motion.div>
        ))}
      </motion.div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-12">
        <Button variant="outline" disabled>
          Previous
        </Button>
        <Button variant="default" className="bg-burgundy hover:bg-burgundy/90">
          1
        </Button>
        <Button variant="outline">2</Button>
        <Button variant="outline">3</Button>
        <Button variant="outline">Next</Button>
      </div>
    </div>
  );
}
