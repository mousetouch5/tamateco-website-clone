// components/JapanExpansion.tsx
import Image from "next/image";
import React from "react";
import japanMap from "@/assets/jpn.jpg"; // Replace with your uploaded asset
import Box from "@/components/sections/Box";
import Logos from "@/components/sections/LogoFlag";

const storeData = [
  { prefecture: "Tokyo", stores: 20 },
  { prefecture: "Osaka", stores: 10 },
  { prefecture: "Fukuoka", stores: 5 },
  { prefecture: "Hokkaido", stores: 3 },
  { prefecture: "Aichi", stores: 2 },
  { prefecture: "Hiroshima", stores: 1 },
];

export default function JapanExpansion() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center gap-5 p-8">
      <div className="flex flex-wrap mx-auto mt-12 gap-8">
        <div className="max-w-sm text-center md:text-left">
          <h2 className="text-4xl font-bold">
            <span className="text-gray-300">Global</span>{" "}
            <span className="underline">JPN</span>
          </h2>
          <h3 className="text-3xl font-semibold mt-2">Expansion</h3>
          <ul className="mt-4 space-y-1 text-lg font-semibold">
            {storeData.map((s) => (
              <li key={s.prefecture}>
                {s.prefecture.toUpperCase()}:{" "}
                <span className="text-red-600">{s.stores}</span> STORES
              </li>
            ))}
          </ul>
        </div>

        <div className="w-full max-w-xs md:max-w-sm md:ml-16">
          <Image
            src={japanMap}
            alt="Japan Map"
            className="w-full h-auto object-contain rounded shadow"
            placeholder="blur"
          />
        </div>
      </div>
    </section>
  );
}
