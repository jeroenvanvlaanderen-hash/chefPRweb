"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const slides = [
  {
    img: "/img/cuisine/cuisine1.webp",
  },
  {
    img: "/img/cuisine/cuisine11.webp",
  },
  {
    img: "/img/pastry/pastry4.webp",
  },
  {
    img: "/img/cuisine/cuisine12.webp",
  },
  {
    img: "/img/pastry/pastry12.webp",
  },
];

export default function Slideshow() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const nextSlide = () => {
      setCurrent((prev) => (prev + 1) % slides.length);
    };

    const interval = setInterval(nextSlide, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, []);

  return (
    <div className="slideshow">
      {slides.map((slide, i) => (
        <div
          key={i}
          className={`slide ${i === current ? "active" : ""}`}
        >
            <Image 
                src={slide.img}
                alt={`Slideshow image ${i + 1}`}
                fill
                className="object-cover"
                priority={i === 0} // Prioritize loading the first image
            />
        </div>
      ))}
    </div>
  );
}
