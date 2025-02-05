import React from "react";
import Link from "next/link";

const Contact = () => {
  return (
    <div className="bg-black text-white py-20 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-br from-white to-white/55 bg-clip-text text-transparent">
            Have a project in mind?
          </span>
        </h2>
        <p className="text-lg md:text-xl text-white/80 mb-10">
          Send us a message to learn more about our process and let us take your
          project from idea to reality!
        </p>
        <Link href="./contact" className="inline-block">
          <span className="bg-[#bfff36] text-[#11082b] px-8 py-3 rounded-full text-xl font-medium hover:bg-opacity-90 transition duration-300 border border-white/12 shadow-lg">
            Get in touch
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Contact;
