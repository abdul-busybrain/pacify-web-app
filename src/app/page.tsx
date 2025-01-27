"use client";

import { Button, ConfigProvider } from "antd";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  return (
    <ConfigProvider>
      {/* HEADER SECTION */}
      <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center py-4 px-4 md:px-8 bg-transparent ml-4 mr-4 rounded-t-[50px]">
        <Link href={"/"} className="rounded-full bg-white p-4">
          <Image src={"/images/logo.png"} height={120} width={120} alt="Logo" />
        </Link>

        <nav>
          <ul className="flex gap-8 rounded-full bg-purple-500/50 p-4">
            {[
              { href: "/", label: "Home" },
              { href: "/services", label: "Services" },
              { href: "/products", label: "Products" },
              { href: "/faq", label: "FAQ" },
              { href: "/blog", label: "Blog" },
            ].map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  className={`text-white transition-colors rounded-full px-2 py-2 ${
                    pathname === href
                      ? "bg-white text-purple-500 "
                      : "hover:bg-white hover:text-purple-500"
                  }`}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <Link href={"#"}>
          <Button
            size="large"
            className="rounded-full p-4 text-purple-500 font-bold text-lg"
          >
            Contact Us
          </Button>
        </Link>
      </header>

      <main>
        {/* HERO SECTION */}
        <section
          className="relative bg-cover h-screen -mx-4 md:-mx-8 rounded-t-[50px] rounded-b-[50px]  overflow-hidden"
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
              <Button
                size="large"
                className="px-8 w-max rounded-full p-4 bg-purple-500 text-white font-bold text-lg hover:bg-purple-300"
              >
                Get a Quote
              </Button>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section></section>
      </main>
      <footer></footer>
    </ConfigProvider>
  );
}
