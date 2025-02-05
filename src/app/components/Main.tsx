import Blog from "../sections/Blog";
import Contact from "../sections/Contact";
import FAQ from "../sections/Faq";
import Hero from "../sections/Hero";
import Products from "../sections/Products";
import Records from "../sections/Records";
import Services from "../sections/Services";

function Main() {
  return (
    <main>
      <Hero />
      <Services />
      <Records />
      <Products />
      {/* <Testimonials /> */}
      <Blog />
      <FAQ />
      <Contact />
    </main>
  );
}

export default Main;
