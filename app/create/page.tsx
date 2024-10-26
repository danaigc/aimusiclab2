"use client";

import { useState } from "react";
import { MusicGenerationForm } from "../components/create/MusicGenerationForm";
import { GenerationHistory } from "../components/create/GenerationHistory";
import { Button } from "@/components/ui/button";
import { History, X } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function CreatePage() {
  const [isGenerating, setIsGenerating] = useState(false);
  const [selectedStyle, setSelectedStyle] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [prompt, setPrompt] = useState("");

  const handleGenerate = () => {
    setIsGenerating(true);
    // Simulate generation process
    setTimeout(() => {
      setIsGenerating(false);
    }, 3000);
  };

  return (
    <div className="flex flex-col lg:flex-row h-[calc(100vh-4rem)] bg-muted/30">
      {/* Main Content */}
      <div className="flex-1 p-4 lg:p-6 overflow-auto">
        <div className="max-w-4xl mx-auto bg-background rounded-2xl shadow-lg p-6 lg:p-8">
          <h1 className="text-3xl font-bold mb-8 bg-gradient-to-r from-primary to-purple-500 bg-clip-text text-transparent">
            Create Your Music
          </h1>

          <MusicGenerationForm
            isGenerating={isGenerating}
            selectedStyle={selectedStyle}
            lyrics={lyrics}
            prompt={prompt}
            onStyleChange={setSelectedStyle}
            onLyricsChange={(e) => setLyrics(e.target.value)}
            onPromptChange={(e) => setPrompt(e.target.value)}
            onGenerate={handleGenerate}
          />
        </div>
      </div>

       {/*History Panel - Desktop*/}
      <div className="hidden lg:block w-[400px] bg-background border-l p-6 mr-24 my-6 rounded-2xl">
        <GenerationHistory />
      </div>

     {/*  History Panel - Mobile
      <div className="lg:hidden fixed bottom-4 right-4 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="lg" className="rounded-full shadow-lg">
              <History className="w-5 h-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="bottom" className="h-[80vh] p-6">
            <div className="absolute right-4 top-4">
              <Button variant="ghost" size="icon">
                <X className="h-4 w-4" />
              </Button>
            </div>
            <GenerationHistory />
          </SheetContent>
        </Sheet>
      </div>*/}
    </div>
  );
}