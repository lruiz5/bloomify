import { useTitle } from "../../hooks/useTitle";
import { Hero, FeaturedProducts, Testimonials, Faq } from "./components";

export const HomePage = () => {
  useTitle("Home");
  return (
    <main>
      <Hero />
      <FeaturedProducts />
      <Testimonials />
      <Faq />
    </main>
  );
};
