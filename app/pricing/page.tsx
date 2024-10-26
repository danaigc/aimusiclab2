"use client";

import { PricingSection } from "../components/PricingSection";
import { MusicShowcase } from "../components/MusicShowcase";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-background">
      <div className="py-12 md:py-24">
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
          Choose Your Plan
        </h1>
        <p className="text-xl text-muted-foreground text-center mb-16">
          Start creating amazing music with our flexible pricing options
        </p>
        <PricingSection />
      </div>

      <div className="border-t">
        <div className="py-12 md:py-24">
          <h2 className="text-3xl font-bold text-center mb-4">
            Music Created by Our Users
          </h2>
          <p className="text-xl text-muted-foreground text-center mb-16">
            Listen to what others have created with their subscriptions
          </p>
          <MusicShowcase />
        </div>
      </div>
    </div>
  );
}