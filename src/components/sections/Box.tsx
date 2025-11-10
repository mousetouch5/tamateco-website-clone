"use client";

import { useState, KeyboardEvent } from "react";
import Image, { StaticImageData } from "next/image";
// import { Button } from "@/components/ui/button"; // ⛔️ not needed anymore
import knob from "@/assets/gacha_knob_preview.png";
import surprise from "@/assets/tamateco.png";

// If you later add more prizes, just push them here (no knob!)
const prizes: { id: number; image: StaticImageData; label: string }[] = [
  { id: 1, image: surprise, label: "Gacha Surprise" },
];

export default function Box() {
  const [display, setDisplay] = useState<{
    image: StaticImageData;
    label: string;
  }>({ image: knob, label: "Knob" });
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

  const onKeySpin = (e: KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" || e.key === " ") {
      e.preventDefault();
      handleSpin();
    }
  };

  const isKnob = display.image === knob;

  return (
    <div className="bg-white py-16 mt-12 rounded-2xl max-w-3xl mx-auto shadow-xl px-6 text-center relative overflow-hidden group hover:shadow-2xl transition-all duration-300">
      {/* Image-as-button: click/tap/keyboard to spin */}
      <div
        role="button"
        tabIndex={0}
        aria-label={
          spinning ? "Spinning" : isKnob ? "Spin the knob" : "Spin again"
        }
        aria-disabled={spinning}
        onClick={handleSpin}
        onKeyDown={onKeySpin}
        className={[
          "w-48 h-48 mx-auto mb-6 relative",
          "rounded-full border-4 border-yellow-400 shadow-md",
          "focus:outline-none focus:ring-4 focus:ring-yellow-300/60",
          "transition-transform duration-700",
          "cursor-pointer select-none",
          spinning && isKnob ? "animate-spin" : "",
          spinning
            ? "pointer-events-none"
            : "hover:scale-[1.03] active:scale-[0.98]",
        ].join(" ")}
      >
        <Image
          src={display.image}
          alt={display.label}
          fill
          sizes="192px"
          className="object-cover rounded-full"
          priority
        />
      </div>

      <p className="sr-only">
        {spinning
          ? "Spinning."
          : isKnob
          ? "Activate to spin."
          : "Activate to spin again."}
      </p>

      <h3 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
        What’s inside the capsule?
      </h3>
      <p className="text-gray-600 mb-4 text-lg">
        Just like Gacha, every spin reveals a new story and new wonders.
      </p>

      {/* Decorative Element */}
      <div className="absolute -top-10 -right-10 w-32 h-32 bg-yellow-100 rounded-full blur-2xl opacity-30 group-hover:scale-110 transition-transform" />
    </div>
  );
}
