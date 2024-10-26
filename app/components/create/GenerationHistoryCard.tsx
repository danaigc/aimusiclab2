"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { 
  Music2, 
  Clock, 
  Download, 
  Share2,
  MoreHorizontal,
  Heart,
  Play,
} from "lucide-react";

interface GenerationHistoryCardProps {
  index: number;
}

export function GenerationHistoryCard({ index }: GenerationHistoryCardProps) {
  return (
    <Card className="group hover:shadow-lg transition-all duration-300 bg-background/50 backdrop-blur-sm border-muted">
      <div className="relative h-24 mb-4 bg-muted rounded-t-lg overflow-hidden">
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity bg-black/50">
          <Button variant="secondary" size="sm" className="gap-2">
            <Play className="w-4 h-4" />
            Play Preview
          </Button>
        </div>
        <div className="absolute inset-0 flex items-center px-4">
          <svg
            className="w-full h-12 text-primary/20"
            viewBox="0 0 100 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 10 Q 25 0, 50 10 T 100 10"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Music2 className="h-4 w-4 text-primary" />
              <span className="font-medium">
                {index % 2 === 0 ? "Pop Track" : "Jazz Instrumental"} #{index + 1}
              </span>
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Badge variant="secondary" className="text-xs">
                {index % 2 === 0 ? "Pop" : "Jazz"}
              </Badge>
              <span className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                {index * 2 + 1}m ago
              </span>
            </div>
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Share2 className="w-4 h-4 mr-2" />
                Share
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Heart className="w-4 h-4 mr-2" />
                Add to Favorites
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        {index === 0 && (
          <div className="mb-4">
            <div className="flex justify-between text-sm mb-2">
              <span className="text-muted-foreground">Generating...</span>
              <span className="text-primary">78%</span>
            </div>
            <Progress value={78} className="h-2" />
          </div>
        )}

        <div className="flex items-center gap-2">
          <Button variant="secondary" size="sm" className="w-full gap-2">
            <Play className="w-4 h-4" />
            Play Full Track
          </Button>
          <Button variant="outline" size="icon" className="shrink-0 h-8 w-8">
            <Download className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}