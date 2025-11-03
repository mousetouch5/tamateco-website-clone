"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section
      id="top"
      className="relative h-screen flex items-center justify-center bg-black text-white"
    >
      {/* Background Image + overlay */}
      <div className="absolute inset-0">
        <Image
          src="https://ext.same-assets.com/3014677206/3326430854.png"
          alt="Hero background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 to-black/30" />
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl">
        <div className="mb-6">
          <Image
            src="https://ext.same-assets.com/3014677206/3409248070.svg"
            alt="tamateco logo"
            width={180}
            height={60}
            className="mx-auto mb-4"
          />
          <h1 className="text-4xl md:text-6xl font-bold leading-tight tracking-wide uppercase">
            Gacha<sup className="text-2xl md:text-4xl">²</sup> Culture
          </h1>
          <p className="text-lg md:text-xl font-medium mt-4 tracking-wide text-gray-200">
            Japan’s proud contribution to the world of surprise and delight.
          </p>
        </div>
        <div className="mt-8">
          <Button
            className="bg-yellow-400 text-black hover:bg-yellow-300 font-bold px-6 py-3 text-lg rounded-full shadow-lg"
            size="lg"
            onClick={() => {
              const element = document.getElementById("About");
              const headerOffset = 90; // height of your fixed header
              const elementPosition = element?.getBoundingClientRect().top ?? 0;
              const offsetPosition =
                elementPosition + window.scrollY - headerOffset;

              window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
              });

              // Optional: mini “adjust up” effect after initial scroll
              setTimeout(() => {
                window.scrollBy({ top: -20, behavior: "smooth" });
              }, 600);
            }}
          >
            Explore Opportunities
          </Button>
        </div>
      </div>
    </section>
  );
}
