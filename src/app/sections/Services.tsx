import { Badge } from "antd";
import { Globe, Paintbrush, Phone, ShoppingCart } from "lucide-react";
import Link from "next/link";

function Services() {
  return (
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

      <p className="text-xl leading-relaxed max-w-3xl mx-auto mb-16 text-purple-500">
        We prioritize your essential features, align teams around clear
        roadmaps, build products guided by customer feedback, deliver
        personalized experiences, develop software that truly satisfies users,
        and help scale your business to meet evolving needs.
      </p>

      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto">
            {[
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
            ].map(({ title, icon, description }) => (
              <div
                key={title}
                className="p-8 rounded-2xl bg-white shadow-lg hover:shadow-xl transition-shadow"
              >
                {icon}
                <h3 className="text-xl font-bold text-purple-500 mb-4">
                  {title}
                </h3>
                <p className="text-purple-500">{description}</p>
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
  );
}

export default Services;
