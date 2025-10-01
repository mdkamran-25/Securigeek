"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { leaderboard } from "@/lib/dummyData";
import { Trophy, Medal, Award, TrendingUp, Flame, Target } from "lucide-react";
import { motion } from "framer-motion";

export default function LeaderboardPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8 text-center"
      >
        <div className="inline-block p-4 bg-burgundy/20 rounded-full mb-4">
          <Trophy className="h-12 w-12 text-burgundy" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-almond to-burgundy bg-clip-text text-transparent">
          Leaderboard
        </h1>
        <p className="text-xl text-muted-foreground">
          Top performers competing for glory and opportunities
        </p>
      </motion.div>

      {/* Top 3 Spotlight */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
      >
        {leaderboard.slice(0, 3).map((user, index) => (
          <motion.div
            key={user.rank}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3 + index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <Card className={`glass h-full text-center ${
              index === 0 ? "border-yellow-500/50" :
              index === 1 ? "border-gray-400/50" :
              "border-orange-500/50"
            }`}>
              <CardContent className="p-6">
                <div className="text-6xl mb-4">{user.avatar}</div>
                <div className="mb-4">
                  {index === 0 && <Trophy className="h-12 w-12 mx-auto text-yellow-500" />}
                  {index === 1 && <Medal className="h-12 w-12 mx-auto text-gray-400" />}
                  {index === 2 && <Medal className="h-12 w-12 mx-auto text-orange-500" />}
                </div>
                <h3 className="text-2xl font-bold mb-2">{user.name}</h3>
                <div className="text-3xl font-bold text-burgundy mb-4">
                  {user.score.toLocaleString()}
                </div>
                <div className="flex justify-center gap-4 mb-4 text-sm">
                  <div>
                    <p className="text-muted-foreground">Problems</p>
                    <p className="font-semibold">{user.problemsSolved}</p>
                  </div>
                  <div>
                    <p className="text-muted-foreground">Streak</p>
                    <p className="font-semibold flex items-center gap-1">
                      <Flame className="h-4 w-4 text-orange-500" />
                      {user.streak}
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-1 justify-center">
                  {user.badges.slice(0, 2).map((badge, idx) => (
                    <Badge key={idx} variant="outline" className="text-xs">
                      {badge}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Full Leaderboard */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="glass">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <TrendingUp className="h-6 w-6 text-burgundy" />
              Global Rankings
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {leaderboard.map((user, index) => (
                <motion.div
                  key={user.rank}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.6 + index * 0.05 }}
                  whileHover={{ x: 5 }}
                  className="flex items-center gap-4 p-4 rounded-lg bg-input border border-border hover:border-burgundy/50 transition-all"
                >
                  {/* Rank */}
                  <div className="flex items-center justify-center w-12 h-12 rounded-full bg-burgundy/20 font-bold text-xl">
                    {user.rank}
                  </div>

                  {/* Avatar & Name */}
                  <div className="flex items-center gap-3 flex-1">
                    <div className="text-4xl">{user.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-lg">{user.name}</h4>
                      <div className="flex flex-wrap gap-1">
                        {user.badges.map((badge, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {badge}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Stats */}
                  <div className="hidden md:flex items-center gap-6 text-sm">
                    <div className="text-center">
                      <p className="text-muted-foreground mb-1">Score</p>
                      <p className="font-bold text-burgundy text-lg">
                        {user.score.toLocaleString()}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground mb-1">Problems</p>
                      <p className="font-semibold flex items-center gap-1">
                        <Target className="h-4 w-4" />
                        {user.problemsSolved}
                      </p>
                    </div>
                    <div className="text-center">
                      <p className="text-muted-foreground mb-1">Streak</p>
                      <p className="font-semibold flex items-center gap-1">
                        <Flame className="h-4 w-4 text-orange-500" />
                        {user.streak}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Achievement Stats */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8"
      >
        <Card className="glass text-center">
          <CardContent className="p-6">
            <Award className="h-12 w-12 mx-auto text-burgundy mb-3" />
            <h3 className="text-xl font-semibold mb-2">Coding Master</h3>
            <p className="text-muted-foreground text-sm">
              Solve 1000+ problems to unlock
            </p>
          </CardContent>
        </Card>

        <Card className="glass text-center">
          <CardContent className="p-6">
            <Flame className="h-12 w-12 mx-auto text-orange-500 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Marathon Runner</h3>
            <p className="text-muted-foreground text-sm">
              Maintain 100-day streak
            </p>
          </CardContent>
        </Card>

        <Card className="glass text-center">
          <CardContent className="p-6">
            <TrendingUp className="h-12 w-12 mx-auto text-green-500 mb-3" />
            <h3 className="text-xl font-semibold mb-2">Top Contributor</h3>
            <p className="text-muted-foreground text-sm">
              Help 100+ community members
            </p>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  );
}
