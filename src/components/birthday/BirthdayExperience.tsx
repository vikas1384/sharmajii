import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import SeedScreen from "./SeedScreen";
import RootsScreen from "./RootsScreen";
import TrunkScreen from "./TrunkScreen";
import BranchesScreen from "./BranchesScreen";
import LeavesScreen from "./LeavesScreen";
import FlowersScreen from "./FlowersScreen";
import FruitsScreen from "./FruitsScreen";
import SafetyScreen from "./SafetyScreen";
import AdviceScreen from "./AdviceScreen";
import FinalScreen from "./FinalScreen";

type Screen =
  | "seed"
  | "roots"
  | "trunk"
  | "branches"
  | "leaves"
  | "flowers"
  | "fruits"
  | "safety"
  | "advice"
  | "final";

const BirthdayExperience = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>("seed");

  const goTo = (screen: Screen) => {
    setCurrentScreen(screen);
  };

  const restart = () => {
    setCurrentScreen("seed");
  };

  return (
    <div className="fixed inset-0 overflow-hidden">
      <AnimatePresence mode="wait">
        {currentScreen === "seed" && (
          <SeedScreen key="seed" onNext={() => goTo("roots")} />
        )}
        {currentScreen === "roots" && (
          <RootsScreen key="roots" onNext={() => goTo("trunk")} />
        )}
        {currentScreen === "trunk" && (
          <TrunkScreen key="trunk" onNext={() => goTo("branches")} />
        )}
        {currentScreen === "branches" && (
          <BranchesScreen key="branches" onNext={() => goTo("leaves")} />
        )}
        {currentScreen === "leaves" && (
          <LeavesScreen key="leaves" onNext={() => goTo("flowers")} />
        )}
        {currentScreen === "flowers" && (
          <FlowersScreen key="flowers" onNext={() => goTo("fruits")} />
        )}
        {currentScreen === "fruits" && (
          <FruitsScreen key="fruits" onNext={() => goTo("safety")} />
        )}
        {currentScreen === "safety" && (
          <SafetyScreen key="safety" onNext={() => goTo("advice")} />
        )}
        {currentScreen === "advice" && (
          <AdviceScreen key="advice" onNext={() => goTo("final")} />
        )}
        {currentScreen === "final" && (
          <FinalScreen key="final" onRestart={restart} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default BirthdayExperience;
