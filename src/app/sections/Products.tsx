import { Badge } from "antd";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { ArrowRight } from "lucide-react";

interface ProductProps {
  title: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  href: string;
}

const Product: React.FC<ProductProps> = ({
  title,
  category,
  imageSrc,
  imageAlt,
  href,
}) => (
  <Link
    href={href}
    className="group relative flex flex-col overflow-hidden rounded-3xl bg-gradient-to-br from-white/2 to-white/10 p-4 shadow-lg transition-all hover:shadow-xl"
  >
    <div className="mb-4 flex justify-between">
      <h3 className="text-xl font-bold text-white">{title}</h3>
      <span className="rounded-full bg-purple-800 bg-opacity-30 px-3 py-1 text-sm text-white backdrop-blur-sm">
        {category}
      </span>
    </div>
    <div className="relative h-48 w-full overflow-hidden rounded-2xl">
      <Image
        src={null}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        className="transition-transform duration-300 group-hover:scale-110"
      />
    </div>
    <div className="absolute bottom-4 right-4 rounded-full bg-black/50 p-2 shadow-md">
      <ArrowRight />
    </div>
  </Link>
);

const ProductShowcase: React.FC = () => {
  const products = [
    {
      title: "MedPal",
      category: "Digital Healthcare",
      imageSrc: "",
      imageAlt: "Medpal Website Landing page",
      href: "#",
    },
    {
      title: "BookMyTime",
      category: "Video Consultation Platform",
      imageSrc: "",
      imageAlt: "BookMyTime Website Landing page",
      href: "#",
    },
    {
      title: "",
      category: "",
      imageSrc: "",
      imageAlt: "",
      href: "#",
    },
    {
      title: "",
      category: "",
      imageSrc: "",
      imageAlt: "",
      href: "#",
    },
  ];

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 sm:grid-cols-1">
      {products.map((product, index) => (
        <Product key={index} {...product} />
      ))}
    </div>
  );
};

function Products() {
  return (
    <section className="relative bg-cover h-auto py-16 -mx-4 md:-mx-8 rounded-t-[50px] rounded-b-[50px] overflow-hidden text-center mt-36 px-4 md:px-8">
      <div className="flex justify-center mb-16">
        <Badge className="rounded-full px-6 py-2 text-white bg-purple-500 text-sm font-medium">
          Our Work
        </Badge>
      </div>
      <div className="flex items-center gap-4 my-8">
        <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-300"></div>
        <h2 className="text-5xl font-bold tracking-tight max-w-4xl mx-auto mb-8">
          Your vision, our reality
        </h2>
        <div className="h-[1px] flex-1 bg-gradient-to-r from-gray-300 to-transparent"></div>
      </div>

      <div className="min-h-screen bg-purple-900 p-8">
        <h1 className="mb-8 text-center text-4xl font-bold text-white">
          Our Products
        </h1>
        <ProductShowcase />
      </div>
    </section>
  );
}

export default Products;
