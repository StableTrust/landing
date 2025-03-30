import Hero from "@/components/Home/Hero";
import ValueProposition from "@/components/Home/ValueProposition";
import SolutionsOverview from "@/components/Home/SolutionsOverview";
import Stats from "@/components/Home/Stats";
import CallToAction from "@/components/Home/CallToAction";
import { useEffect } from "react";

const HomePage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Hero />
      <Stats />
      <ValueProposition />
      <SolutionsOverview />
      <CallToAction />
    </>
  );
};

export default HomePage;
