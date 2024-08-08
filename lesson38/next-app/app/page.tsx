"use client";
import Image from "next/image";
import cat from '../public/cat.jpeg';
export default function Home() {
  return (
    <div>
      <h1>Hello, Next.js!</h1>
      <div>
        <Image src={cat} alt="cat" />
      </div>
      <button
        onClick={() => {
          throw new Error("Button error");
        }}
      >
        Throw an error
      </button>
    </div>
  );
}
