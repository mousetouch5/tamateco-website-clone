"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";

import ip4Image from "@/assets/ip4.png";
import unpImage from "@/assets/u-np.jpg";
import yellImage from "@/assets/yell.jpg";
import kitanImage from "@/assets/ogimage_kitan.png";
import qualiImage from "@/assets/quali.jpg";
import sotaImage from "@/assets/sota.png";
import tcImage from "@/assets/tc-c.png";
import peanuts from "@/assets/S__9224232_0.jpg";
import bushiroad from "@/assets/S__9224233_0.jpg";
import bright from "@/assets/S__9224234_0.jpg";
import ken from "@/assets/S__9224235_0.jpg";
import jdreams from "@/assets/S__9224236_0.jpg";
import tarlin from "@/assets/S__9224237_0.jpg";
import bluemountain from "@/assets/S__9224238_0.jpg";
import rimei from "@/assets/S__9224240_0.jpg";
import parade from "@/assets/S__9224241_0.jpg";
import skjapan from "@/assets/S__9224242_0.jpg";

// Split logos into two halves
const firstHalf = [
  ip4Image,
  unpImage,
  yellImage,
  kitanImage,
  qualiImage,
  sotaImage,
  tcImage,
  peanuts,
  bushiroad,
  bright,
];

const secondHalf = [ken, jdreams, tarlin, bluemountain, rimei, parade, skjapan];

export default function Logo() {
  return (
    <div className="banner">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        direction="left"
        className="marquee-track"
      >
        <div className="marquee-row">
          {firstHalf.map((src, index) => (
            <div key={index} className="logo-item">
              <Image
                src={src}
                alt={`Logo ${index + 1}`}
                className="logo"
                width={80}
                height={80}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Marquee>

      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={true}
        direction="left"
        className="marquee-track"
      >
        <div className="marquee-row">
          {secondHalf.map((src, index) => (
            <div key={index} className="logo-item">
              <Image
                src={src}
                alt={`Logo ${index + 1}`}
                className="logo"
                width={80}
                height={80}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </div>
  );
}
