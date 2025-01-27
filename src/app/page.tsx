"use client";

import { Button, ConfigProvider,  } from "antd";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <ConfigProvider>
      {/* Header Section */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 md:px-8 bg-transparent ml-4 mr-4">
        <Link href={"/"}>
          <Image src={"/images/logo.png"} height={120} width={120} alt="Logo" />
        </Link>

        <nav>
          <ul className="flex gap-8">
            <li>
              <Link
                href="/"
                className="text-white hover:text-gray-300 transition-colors"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Products
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="text-white hover:text-gray-300 transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href={"#"}
                className="text-white hover:text-gray-300 transition-colors"
              >
                Blog
              </Link>
            </li>
          </ul>
        </nav>

        <Link href={"#"}>
          <Button>Contact Us</Button>
        </Link>
      </header>

      <main>
        {/* Hero Section */}
        <section
          className="relative bg-cover h-screen -mx-4 md:-mx-8"
          style={{ backgroundImage: "url(/images/hero.jpg)" }}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm">
            <div className="container mx-auto flex flex-col justify-center items-center h-full text-white text-center">
              <h1 className="text-9xl font-extrabold tracking-wide">
                Bring your vision into reality
              </h1>
              <p className="mt-8 mb-10 text-3xl leading-relaxed tracking-wide max-w-3xl">
                We offer outstanding web, mobile, and digital services suited to
                your needs.
              </p>
              <Button size="large" className="px-8 w-max">
                Get a Quote
              </Button>
            </div>
          </div>
        </section>
      </main>
      <footer></footer>
    </ConfigProvider>
  );
}
