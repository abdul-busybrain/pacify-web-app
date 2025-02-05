import React, { useState } from "react";
import Link from "next/link";
import { Minus, Plus } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        className="flex justify-between items-center w-full py-4 text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-medium text-white">{question}</h3>
        <span className="bg-white/10 rounded-full p-2">
          {isOpen ? (
            <Minus className="w-6 h-6 text-white" />
          ) : (
            <Plus className="w-6 h-6 text-white" />
          )}
        </span>
      </button>
      {isOpen && <p className="pb-4 text-white/80">{answer}</p>}
    </div>
  );
};

const FAQ = () => {
  const faqData = [
    {
      question: "How can I get started with Roblox Development?",
      answer:
        "To get started with Roblox Development, you can begin by learning Lua programming and familiarizing yourself with the Roblox Studio. There are many online resources and tutorials available to help you learn the basics.",
    },
    {
      question: "What is VR App Development?",
      answer:
        "VR App Development involves creating applications for virtual reality platforms. This includes designing immersive experiences, 3D environments, and interactive elements that users can engage with using VR headsets.",
    },
    {
      question: "How does VR App Development work?",
      answer:
        "VR App Development typically involves using specialized software development kits (SDKs) for VR platforms, creating 3D assets, programming interactions, and optimizing performance for VR hardware. It often requires knowledge of game engines like Unity or Unreal Engine.",
    },
    {
      question: "What is AR App Development?",
      answer:
        "AR (Augmented Reality) App Development involves creating applications that overlay digital content onto the real world, usually through a smartphone camera or AR glasses. This can include anything from simple filters to complex interactive experiences.",
    },
    {
      question: "What are some examples of successful AR apps?",
      answer:
        "Some successful AR apps include Pokémon GO, IKEA Place, Snapchat filters, Google Lens, and various makeup try-on apps. These apps demonstrate practical and entertaining uses of AR technology in everyday life.",
    },
  ];

  return (
    <section className="bg-[#0f0825] text-white py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-gradient-to-r from-[#c6fc52] to-[#a7ef0b] text-black rounded-full text-sm font-medium mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
            Your questions, answered
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            View some of our frequently asked questions - they might take your
            concerns away!
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {faqData.map((faq, index) => (
            <FAQItem key={index} question={faq.question} answer={faq.answer} />
          ))}
        </div>

        <div className="mt-12 bg-[#11082b] p-8 rounded-lg text-center">
          <h4 className="text-2xl font-bold mb-2">
            Can&apos;t find the question you are looking for?
          </h4>
          <p className="text-gray-400 mb-4">
            Send us a message and we&apos;ll get back to you as soon as
            possible!
          </p>
          <Link
            href="/faq"
            className="inline-block bg-[#bfff36] text-[#11082b] px-6 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition duration-300"
          >
            View all FAQs
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
