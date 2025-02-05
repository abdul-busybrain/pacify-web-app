import { Button } from "antd";
import { ClipboardList, Sparkle, Star, Users } from "lucide-react";
import Link from "next/link";

function Records() {
  return (
    <section className="relative bg-cover h-auto py-16 -mx-4 md:-mx-8 rounded-t-[50px] rounded-b-[50px] overflow-hidden mt-36 px-4 md:px-8 bg-gradient-to-br from-purple-100 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h2 className="text-4xl md:text-5xl font-bold text-purple-800 mb-6 leading-tight">
              Prepare your sails, the next big wave has come!
            </h2>
            <p className="text-xl text-purple-700 mb-8 mt-9 leading-relaxed">
              Web Development, Mobile Development, UI/UX Design, E-Commerce
              Development…
              <br />
              These are some of the elements of our digital inclusion - the wait
              is over.
            </p>

            <Link href={"#"}>
              <Button
                size="large"
                className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 mt-10"
              >
                Get in Touch
              </Button>
            </Link>
          </div>

          <div className="lg:w-1/2 bg-gradient-to-r from-purple-600 to-indigo-600 p-24 rounded-3xl shadow-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 text-white ">
              {[
                {
                  icon: <ClipboardList />,
                  number: "45+",
                  text: "Projects completed",
                },
                {
                  icon: <Sparkle />,
                  number: "20+",
                  text: "Awards received",
                },
                {
                  icon: <Star />,
                  number: "5.0/5",
                  text: "Independent Review Rating",
                },
                {
                  icon: <Users />,
                  number: "100+",
                  text: "Satisfied Clients",
                },
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-white bg-opacity-20 rounded-full p-3">
                    <svg
                      className="h-6 w-6 text-white"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <strong className="block text-3xl font-extrabold">
                      {item.number}
                    </strong>
                    <p className="text-sm text-purple-200">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex  justify-center mt-16">
              <Link href={"#"}>
                <Button
                  size="large"
                  className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
                >
                  Visit our LinkedIn
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Records;
