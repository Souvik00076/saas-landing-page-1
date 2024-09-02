import {
  Action,
  Header,
  Hero,
  LogoTicker,
  PriceShow,
  Productivity,
  Testimonials,
} from "@/components";
import ProductShowCase from "@/components/ProductShowCase";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <LogoTicker />
      <ProductShowCase />
      <PriceShow />
      <Productivity />
      <Testimonials />
      <Action />
    </>
  );
}
