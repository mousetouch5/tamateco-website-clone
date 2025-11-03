"use client";

import { useState } from "react";
import Image, { StaticImageData } from "next/image";
import { Button } from "@/components/ui/button";
import knob from "@/assets/knob.png";
import surprise from "@/assets/tamateco.png";

// If you later add more prizes, just push them here (no knob!).
const prizes: { id: number; image: StaticImageData; label: string }[] = [
  { id: 1, image: surprise, label: "Gacha Surprise" },
];

export default function Box() {
  const [display, setDisplay] = useState<{
    image: StaticImageData;
    label: string;
  }>({
    image: knob,
    label: "Knob",
  });
  const [spinning, setSpinning] = useState(false);

  const handleSpin = () => {
    if (spinning) return;

    // Always reset to the knob and start spinning
    setDisplay({ image: knob, label: "Knob" });
    setSpinning(true);

    // After the spin, reveal a prize (currently just one)
    setTimeout(() => {
      const prize = prizes[Math.floor(Math.random() * prizes.length)];
      setDisplay(prize);
      setSpinning(false);
    }, 1200); // spin duration
  };

  const isKnob = display.image === knob;

  return (
    <div className="bg-white py-16 mt-12 rounded-2xl max-w-3xl mx-auto shadow-xl px-6 text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
      {/* Display area: only apply spin when it's the knob AND spinning */}
      <div
        className={`w-48 h-48 mx-auto mb-6 relative transition-transform duration-700 ${
          spinning && isKnob ? "animate-spin" : ""
        }`}
      >
        <Image
          src={display.image}
          alt={display.label}
          fill
          className="object-cover rounded-full border-4 border-yellow-400 shadow-md"
        />
      </div>

      <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
        What’s inside the capsule?
      </h3>
      <p className="text-gray-600 mb-6 text-lg">
        Just like Gacha, every spin reveals a new story a new wonders.
      </p>

      <Button
        className="bg-yellow-400 text-black hover:bg-yellow-300 font-semibold px-6 py-3 rounded-full"
        onClick={handleSpin}
        disabled={spinning}
      >
        {spinning ? "Spinning..." : isKnob ? "Spin" : "Spin Again"}
      </Button>

      {/* Decorative Element */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-30 group-hover:scale-110 transition-transform" />
    </div>
  );
}
