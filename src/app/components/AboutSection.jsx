"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Love",
    id: "love",
    content: (
      <ul className="list-disc pl-2">
        <li>I love you so much, Piyu ❤️ </li>
        <li>Love you more than anyone</li>
        <li>To be honest, you were the best thing that happened to me </li>
        <li>Aap mere liye sab ban gaye hain</li>
        <li>Muah, my baby! Love you</li>
        <li>I&apos;ll be gone, but this thing won&apos;t </li>
        <li>Password for the PDF is my birthday in format **18022006**</li>
        <li>Click right next to &quot;from your Nishu&quot; on top to listen to something special</li>
        <li>I wish aap kisi ko beech mein nahi laaye hote 😔</li>
      </ul>
    ),
  },
  {
    title: "Nishupiyu",
    id: "nishupiyu",
    content: (
      <ul className="list-disc pl-2">
        <li>I know we both love each other so much</li>
        <li>Baby, keep the ring always with you </li>
      </ul>
    ),
  },
  {
    title: "Our Moments",
    id: "our_moments",
    content: (
      <ul className="list-disc pl-2">
        <li>When you confessed your love to me ❤️</li>
        <li>When we did video calls for hours ❤️</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("love");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image src="/images/about-image.jpg" width={500} height={500} alt="About Image" />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-red-600 mb-4">Happiest Birthday Meri Piyu</h2>
          <p className="text-base lg:text-lg">
            Hey Piya, I love you so much. I know we both love each other deeply.
            Happy Birthday, my love. I hope you like this gift. ❤️
            Right now, while making this, I can&apos;t control my tears, Piyu, seriously.
            Like at this moment, I am crying like hell. I just love you so much.
            Maybe in the next life, I will be a better person and will be able to keep you happy.
            I am sorry for everything, Piyu, but just know that I love you more than
            anyone in this world, and I will always love you. Even if I am gone forever
            from this world, just know that I love you more than anyone. 
            Maybe I couldn&apos;t be a perfect person, but still, Happiest Birthday, my love ❤️
            Be happy always and do well in life, Piyu. And yes, baby, I wish I could have met you,
            but I think this is the end for me. I love you so much, Piyu ❤️
          </p>
          <div className="flex flex-row justify-start mt-8">
            <TabButton selectTab={() => handleTabChange("love")} active={tab === "love"}>
              Love
            </TabButton>
            <TabButton selectTab={() => handleTabChange("nishupiyu")} active={tab === "nishupiyu"}>
              Nishupiyu
            </TabButton>
            <TabButton selectTab={() => handleTabChange("our_moments")} active={tab === "our_moments"}>
              Our Moments
            </TabButton>
          </div>
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

