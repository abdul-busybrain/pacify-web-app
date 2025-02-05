import React from "react";
import Image from "next/image";
import Link from "next/link";

const Blog = () => {
  const blogPosts = [
    {
      title: "Top 7 Metaverse Development Companies in 2025",
      link: "./post/top-metaverse-development-companies",
      image: "",
      alt: "A vibrant collage introducing the 'Top 7 Metaverse Development Companies of 2025,' as featured by Takeaway Reality.",
    },
    {
      title: "Best VR companies in 2025",
      link: "./post/best-vr-companies",
      image: "",
      alt: "Collage showcasing the best VR companies of 2025, featuring leading virtual reality development innovations and hardware.",
    },
    {
      title: "VR military training - Revolution in defense training",
      link: "./post/vr-military-training",
      image: "",
      alt: "Soldier wearing advanced VR goggles, used in military training simulations.",
    },
  ];

  return (
    <div className="bg-black text-white py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-[#c6fc52] to-[#a7ef0b] text-black px-6 py-2 rounded-full text-sm font-medium">
              Latest
            </span>
          </div>
          <h2 className="text-5xl font-bold mb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text text-transparent">
            Take a look at our latest blog articles
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {blogPosts.map((post, index) => (
            <Link href={post.link} key={index} className="block">
              <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-3xl p-6 h-full flex flex-col justify-between border border-white/10">
                <div>
                  <h3 className="text-xl font-medium mb-4">{post.title}</h3>
                  <div className="bg-[#bfff36] rounded-full p-2 w-10 h-10 flex items-center justify-center mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="w-6 h-6 text-black"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                </div>
                <div className="relative h-48 rounded-2xl overflow-hidden">
                  <Image
                    src={post.image || "/placeholder.svg"}
                    alt={post.alt}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="./blog"
            className="inline-block bg-[#bfff36] text-black px-8 py-3 rounded-full text-lg font-medium hover:bg-opacity-90 transition duration-300"
          >
            View all articles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Blog;
