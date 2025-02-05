import Image from "next/image";
import { Badge } from "antd";
import React from "react";

interface TestimonialCardProps {
  quote: string;
  author: string;
  position: string;
  rating: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  position,
  rating,
}) => (
  <div className="">
    <div className="framer-1veht45">
      <p className="framer-text framer-styles-preset-1cc56zh">{quote}</p>
    </div>
    <div className="framer-1rejftm">
      <div className="framer-1wbodma">
        {/* Star rating component would go here */}
      </div>
      <div className="framer-sasg9g">
        <div className="framer-1j4hf56">
          <p className="framer-text framer-styles-preset-1nrfrq4">{author}</p>
        </div>
        <div className="framer-13rlq12">
          <p className="framer-text framer-styles-preset-1cc56zh">{position}</p>
        </div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "I could not be more pleased with how responsive, engaged, and easy to work with their team was.",
      author: "Ryan Mallet",
      position: "Senior Marketing Manager, Microsoft",
      rating: 5,
    },
    // Add more testimonials here
  ];

  return (
    <section className="">
      <div className="">
        <div className="">
          <Badge className="rounded-full px-6 py-2 text-white bg-purple-500 text-sm font-medium">
            Testimonials
          </Badge>
          <h2 className="text-5xl font-bold tracking-tight max-w-4xl mx-auto mb-8">
            Nigeria leaders in Digital Products
          </h2>
          <p className="">
            Consistently ranking among the top 10 national Web & Mobile
            developers.
          </p>
        </div>
        <div className="">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
      {/* Background shapes */}
      <div className="">
        <div className="">
          <div className="">
            <Image src={null} alt="" layout="fill" objectFit="cover" />
          </div>
        </div>
        <div
          className="framer-laag1y hidden-1sysy87"
          data-framer-name="Shape Holo"
        >
          <Image
            src={null}
            alt="abstract representation of software development"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
