"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { courses, quizQuestions } from "@/lib/dummyData";
import { BookOpen, Clock, Users, Award, CheckCircle2, PlayCircle } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

export default function LearnPage() {
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [selectedQuiz, setSelectedQuiz] = useState<number | null>(null);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});

  const levels = ["all", "Beginner", "Intermediate", "Advanced"];

  const filteredCourses = courses.filter((course) => 
    selectedLevel === "all" || course.level === selectedLevel
  );

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers({ ...selectedAnswers, [questionId]: answerIndex });
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-8"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-almond to-burgundy bg-clip-text text-transparent">
          Learn AI
        </h1>
        <p className="text-xl text-muted-foreground">
          Master AI with structured learning paths and hands-on projects
        </p>
      </motion.div>

      {/* Stats Cards */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8"
      >
        <Card className="glass">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-3 bg-burgundy/20 rounded-full">
              <BookOpen className="h-6 w-6 text-burgundy" />
            </div>
            <div>
              <p className="text-2xl font-bold">24</p>
              <p className="text-sm text-muted-foreground">Courses</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-3 bg-burgundy/20 rounded-full">
              <Clock className="h-6 w-6 text-burgundy" />
            </div>
            <div>
              <p className="text-2xl font-bold">120+</p>
              <p className="text-sm text-muted-foreground">Hours Content</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-3 bg-burgundy/20 rounded-full">
              <Users className="h-6 w-6 text-burgundy" />
            </div>
            <div>
              <p className="text-2xl font-bold">200K+</p>
              <p className="text-sm text-muted-foreground">Students</p>
            </div>
          </CardContent>
        </Card>

        <Card className="glass">
          <CardContent className="p-4 flex items-center gap-3">
            <div className="p-3 bg-burgundy/20 rounded-full">
              <Award className="h-6 w-6 text-burgundy" />
            </div>
            <div>
              <p className="text-2xl font-bold">50+</p>
              <p className="text-sm text-muted-foreground">Certificates</p>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Level Filter */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-8"
      >
        <Card className="glass-light">
          <CardContent className="p-4">
            <div className="flex flex-wrap gap-2">
              {levels.map((level) => (
                <Badge
                  key={level}
                  variant={selectedLevel === level ? "default" : "outline"}
                  className="cursor-pointer px-4 py-2"
                  onClick={() => setSelectedLevel(level)}
                >
                  {level.charAt(0).toUpperCase() + level.slice(1)}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </motion.div>

      {/* Courses Grid */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mb-12"
      >
        <h2 className="text-2xl font-bold mb-6">Learning Paths</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCourses.map((course, index) => (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5 }}
            >
              <Card className="glass h-full hover:border-burgundy/50 transition-all">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge variant={
                      course.level === "Beginner" ? "secondary" :
                      course.level === "Intermediate" ? "default" : "outline"
                    }>
                      {course.level}
                    </Badge>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <Users className="h-4 w-4" />
                      {course.students}
                    </div>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription>{course.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>{course.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <BookOpen className="h-4 w-4 text-muted-foreground" />
                        <span>{course.lessons} lessons</span>
                      </div>
                    </div>

                    <div>
                      <div className="flex items-center justify-between mb-2 text-sm">
                        <span>Progress</span>
                        <span className="font-semibold text-burgundy">{course.progress}%</span>
                      </div>
                      <Progress value={course.progress} className="h-2" />
                    </div>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4 text-yellow-500" />
                        <span className="text-sm font-semibold">{course.rating}</span>
                      </div>
                      <Button className="bg-burgundy hover:bg-burgundy/90">
                        {course.progress > 0 ? "Continue" : "Start Learning"}
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* Quiz Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-6">Quick Quiz</h2>
        <Card className="glass-light">
          <CardContent className="p-6">
            <div className="space-y-6">
              {quizQuestions.map((question, qIndex) => (
                <div key={question.id} className="space-y-3">
                  <h3 className="font-semibold">
                    {qIndex + 1}. {question.question}
                  </h3>
                  <div className="space-y-2">
                    {question.options.map((option, optIndex) => (
                      <div
                        key={optIndex}
                        className={`p-3 rounded-md border cursor-pointer transition-all ${
                          selectedAnswers[question.id] === optIndex
                            ? "border-burgundy bg-burgundy/10"
                            : "border-border hover:border-burgundy/50"
                        }`}
                        onClick={() => handleAnswerSelect(question.id, optIndex)}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${
                            selectedAnswers[question.id] === optIndex
                              ? "border-burgundy"
                              : "border-muted-foreground"
                          }`}>
                            {selectedAnswers[question.id] === optIndex && (
                              <div className="w-3 h-3 bg-burgundy rounded-full" />
                            )}
                          </div>
                          <span>{option}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}

              <Button className="w-full bg-burgundy hover:bg-burgundy/90 mt-6">
                <CheckCircle2 className="mr-2 h-5 w-5" />
                Submit Quiz
              </Button>
            </div>
          </CardContent>
        </Card>
      </motion.section>
    </div>
  );
}
