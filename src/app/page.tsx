"use client";

import { Badge, Button, ConfigProvider } from "antd";
import { Globe, Paintbrush, Phone, ShoppingCart } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-purple-500 mb-4" />,
      title: "Web Development",
      description:
        "We specialize in fast and highly optimized websites for increased visibility.",
    },
    {
      icon: <Phone className="w-8 h-8 text-purple-500 mb-4" />,
      title: "Mobile Development",
      description:
        "We develop cross-platform applications with high scalability and easy usability.",
    },
    {
      icon: <Paintbrush className="w-8 h-8 text-purple-500 mb-4" />,
      title: "UI/UX Design",
      description:
        "We deliver high quality design with excellent aesthetics for all product types.",
    },
    {
      icon: <ShoppingCart className="w-8 h-8 text-purple-500 mb-4" />,
      title: "E Commerce",
      description:
        "We create robust and user-friendly e-commerce solutions to boost your online sales.",
    },
  ];

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
                  className={`transition-colors rounded-full px-2 py-2 ${
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
              <p className="text-white/95 mt-8 mb-10 text-3xl leading-relaxed tracking-wide max-w-3xl">
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
        {/* SERVICES SECTION */};
        <section className="relative bg-cover h-auto py-16 -mx-4 md:-mx-8 rounded-t-[50px] rounded-b-[50px] overflow-hidden text-center mt-36 px-4 md:px-8 bg-white">
          <div className="flex justify-center mb-16">
            <Badge className="rounded-full px-6 py-2 text-white bg-purple-500 text-sm font-medium">
              Services
            </Badge>
          </div>

          <h2 className="text-5xl font-bold tracking-tight max-w-4xl mx-auto mb-8 text-purple-500">
            We architect, innovate, and deliver comprehensive solutions that
            transform businesses across every digital touchpoint
          </h2>

          <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-16 text-purple-400">
            We prioritize your essential features, align teams around clear
            roadmaps, build products guided by customer feedback, deliver
            personalized experiences, develop software that truly satisfies
            users, and help scale your business to meet evolving needs.
          </p>

          <div className="bg-gray-50 py-16">
            <div className="container mx-auto px-4">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
                {services.map((service) => (
                  <div
                    key={service.title}
                    className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
                  >
                    {service.icon}
                    <h3 className="text-xl font-bold text-purple-500 mb-4">
                      {service.title}
                    </h3>
                    <p className="text-purple-500">{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="text-center mt-16">
            <Link
              href="/services"
              className="inline-flex items-center text-white bg-purple-500 px-6 py-3 rounded-full font-semibold hover:bg-purple-600 transition-colors"
            >
              <span>See all services &gt;</span>
            </Link>
          </div>
        </section>
      </main>
      <footer></footer>
    </ConfigProvider>
  );
}
