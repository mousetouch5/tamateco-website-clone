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

const firstHalf = [
  { image: ip4Image, name: "IP4", url: "https://www.ip4.co.jp" },
  { image: unpImage, name: "U-NP", url: "https://www.u-np.jp" },
  { image: yellImage, name: "Yell", url: "https://yell-world.jp" },
  { image: kitanImage, name: "Kitan Club", url: "https://kitan.jp" },
  { image: qualiImage, name: "Qualia", url: "https://qualia-45.jp/products/" },
  { image: sotaImage, name: "SO-TA", url: "https://www.so-ta.com" },
  {
    image: tcImage,
    name: "Toy's Cabin",
    url: "https://toyscabin.com/product/",
  },
  {
    image: peanuts,
    name: "Peanuts Club",
    url: "https://www.peanuts-club.co.jp",
  },
  { image: bushiroad, name: "Bushiroad", url: "https://bushiroad.com" },
  {
    image: bright,
    name: "Bright Link",
    url: "https://brightlink.co.jp/capsultoy/",
  },
];

const secondHalf = [
  { image: ken, name: "Ken Elephant", url: "https://kenelephant.co.jp" },
  { image: jdreams, name: "J-Dream", url: "https://e-jdream.co.jp" },
  { image: tarlin, name: "Tarlin", url: "https://www.tarlin.jp" },
  {
    image: bluemountain,
    name: "Blue Mountain",
    url: "https://bluemountains.co.jp",
  },
  { image: rimei, name: "Rimei", url: "http://rimeiue.co.jp" },
  { image: parade, name: "Parade", url: "https://www.parade-inc.net" },
  { image: skjapan, name: "SK Japan", url: "https://www.sk-japan.co.jp" },
];

export default function Logo() {
  const firstRowLogos = [...firstHalf, ...firstHalf];
  const secondRowLogos = [...secondHalf, ...secondHalf];

  return (
    <div className="banner">
      {/* FIRST ROW */}
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={false}
        className="marquee-track"
      >
        {firstRowLogos.map((item, index) => (
          <a
            key={`first-${index}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="logo-item"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="logo-image"
            />
          </a>
        ))}
      </Marquee>

      {/* SECOND ROW */}
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover={false}
        direction="right"
        className="marquee-track"
      >
        {secondRowLogos.map((item, index) => (
          <a
            key={`second-${index}`}
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="logo-item"
          >
            <Image
              src={item.image}
              alt={item.name}
              width={100}
              height={100}
              className="logo-image"
            />
          </a>
        ))}
      </Marquee>

      <style jsx>{`
        .banner {
          display: flex;
          flex-direction: column;
          gap: 2rem;
          padding: 2rem 1rem;
          border-radius: 24px;
          overflow: hidden;
        }

        .marquee-track {
          display: flex;
          align-items: center;
        }

        :global(.logo-item) {
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 2rem;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        /* Remove floating box + enhance the image only */
        :global(.logo-image) {
          object-fit: contain;
          max-width: 100px;
          max-height: 100px;
          width: auto;
          height: auto;
          border-radius: 10px;
          transition: all 0.3s ease;
        }

        :global(.logo-item:hover .logo-image) {
          transform: scale(1.07);
          filter: brightness(1.1) contrast(1.05);
          border-radius: 14px; /* slightly more rounded on hover */
        }

        @media (max-width: 768px) {
          :global(.logo-item) {
            margin: 0 1.5rem;
          }

          :global(.logo-image) {
            max-width: 70px;
            max-height: 70px;
          }
        }
      `}</style>
    </div>
  );
}
