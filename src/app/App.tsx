import { Hero } from "./components/Hero";
import { ProblemSolution } from "./components/ProblemSolution";
import { HowItWorks } from "./components/HowItWorks";
import { Services } from "./components/Services";
import { ValueProp } from "./components/ValueProp";
import { RevenueCalculator } from "./components/RevenueCalculator";
import { FAQ } from "./components/FAQ";
import { FinalCTA } from "./components/FinalCTA";

export default function App() {
  return (
    <div className="min-h-screen">
      <Hero />
      <ProblemSolution />
      <RevenueCalculator />
      <HowItWorks />
      <Services />
      <ValueProp />
      <FAQ />
      <FinalCTA />
    </div>
  );
}