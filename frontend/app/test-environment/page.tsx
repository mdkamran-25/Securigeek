"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Code, Play, Send, GitCompare, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";

export default function TestEnvironmentPage() {
  const [code, setCode] = useState(`def fibonacci(n):
    if n <= 1:
        return n
    return fibonacci(n-1) + fibonacci(n-2)

# Test the function
result = fibonacci(10)
print(f"Fibonacci(10) = {result}")`);

  const [chatMessage, setChatMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    { role: "assistant", message: "Hello! I'm here to help you test AI tools. What would you like to try?" },
  ]);

  const [output, setOutput] = useState("");
  const [compareMode, setCompareMode] = useState(false);

  const handleRunCode = () => {
    setOutput("Fibonacci(10) = 55\n\nExecution completed successfully in 0.003s");
  };

  const handleSendMessage = () => {
    if (!chatMessage.trim()) return;
    
    setChatHistory([
      ...chatHistory,
      { role: "user", message: chatMessage },
      { role: "assistant", message: "I can help you with that! This is a simulated AI response." },
    ]);
    setChatMessage("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="mb-6"
      >
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-2 flex items-center gap-2">
              <Code className="h-8 w-8 text-burgundy" />
              AI Testing Environment
            </h1>
            <p className="text-muted-foreground">
              Test and compare AI tools in real-time
            </p>
          </div>
          <div className="flex gap-2">
            <Button
              variant={compareMode ? "default" : "outline"}
              onClick={() => setCompareMode(!compareMode)}
            >
              <GitCompare className="mr-2 h-4 w-4" />
              Compare Mode
            </Button>
            <Button variant="outline">
              <RefreshCw className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Code Editor Section */}
        <div className="lg:col-span-2 space-y-6">
          {/* Code Editor */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="glass">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Code Editor
                  </CardTitle>
                  <div className="flex gap-2">
                    <Badge variant="outline">Python</Badge>
                    <Button size="sm" className="bg-burgundy hover:bg-burgundy/90" onClick={handleRunCode}>
                      <Play className="mr-2 h-4 w-4" />
                      Run
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <textarea
                  value={code}
                  onChange={(e) => setCode(e.target.value)}
                  className="w-full h-64 bg-input border border-border rounded-md p-4 font-mono text-sm resize-none focus:outline-none focus:ring-2 focus:ring-ring"
                  spellCheck={false}
                />
              </CardContent>
            </Card>
          </motion.div>

          {/* Output Section */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Card className="glass">
              <CardHeader>
                <CardTitle>Output</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-full h-32 bg-input border border-border rounded-md p-4 font-mono text-sm overflow-auto">
                  {output || "Click 'Run' to see the output..."}
                </div>
              </CardContent>
            </Card>
          </motion.div>

          {/* Side-by-Side Comparison (if compare mode) */}
          {compareMode && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
            >
              <Card className="glass">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <GitCompare className="h-5 w-5" />
                    Comparison Results
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <Badge className="mb-2">AI Tool A</Badge>
                      <div className="bg-input border border-border rounded-md p-4 text-sm">
                        <p className="text-muted-foreground">Response from AI Tool A...</p>
                        <p className="mt-2">Execution time: 0.003s</p>
                        <p>Accuracy: 98%</p>
                      </div>
                    </div>
                    <div>
                      <Badge className="mb-2">AI Tool B</Badge>
                      <div className="bg-input border border-border rounded-md p-4 text-sm">
                        <p className="text-muted-foreground">Response from AI Tool B...</p>
                        <p className="mt-2">Execution time: 0.005s</p>
                        <p>Accuracy: 95%</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          )}
        </div>

        {/* Chat Interface */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="lg:col-span-1"
        >
          <Card className="glass h-full flex flex-col">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Send className="h-5 w-5" />
                AI Chat Assistant
              </CardTitle>
            </CardHeader>
            <CardContent className="flex-1 flex flex-col">
              {/* Chat History */}
              <div className="flex-1 overflow-auto mb-4 space-y-4 max-h-96">
                {chatHistory.map((chat, idx) => (
                  <div
                    key={idx}
                    className={`flex ${chat.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        chat.role === "user"
                          ? "bg-burgundy text-white"
                          : "bg-input border border-border"
                      }`}
                    >
                      <p className="text-sm">{chat.message}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Chat Input */}
              <div className="flex gap-2">
                <Input
                  value={chatMessage}
                  onChange={(e) => setChatMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Ask the AI anything..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} className="bg-burgundy hover:bg-burgundy/90">
                  <Send className="h-4 w-4" />
                </Button>
              </div>

              {/* Suggested Prompts */}
              <div className="mt-4">
                <p className="text-xs text-muted-foreground mb-2">Suggested prompts:</p>
                <div className="flex flex-wrap gap-2">
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-accent"
                    onClick={() => setChatMessage("Explain this code")}
                  >
                    Explain code
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-accent"
                    onClick={() => setChatMessage("Optimize this function")}
                  >
                    Optimize
                  </Badge>
                  <Badge
                    variant="outline"
                    className="cursor-pointer hover:bg-accent"
                    onClick={() => setChatMessage("Find bugs")}
                  >
                    Debug
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
