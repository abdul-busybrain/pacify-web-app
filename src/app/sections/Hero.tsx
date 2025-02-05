import { Button } from "antd";

function Hero() {
  return (
    <section
      className="relative bg-cover h-screen -mx-4 md:-mx-8 rounded-t-[50px] rounded-b-[50px]  overflow-hidden mt-4"
      style={{ backgroundImage: "url(/images/hero.jpg)" }}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm">
        <div className="container mx-auto flex flex-col justify-center items-center h-full text-white text-center pt-8">
          <h1 className="text-9xl font-extrabold tracking-wide">
            Turn your vision into reality
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
  );
}

export default Hero;
