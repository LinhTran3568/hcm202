import { useRef } from "react"
import ScrollChrome from "./components/ScrollChrome.jsx"
import LotusPetals from "./components/LotusPetals.jsx"
import Hero from "./components/Hero.jsx"
import Characters from "./components/Characters.jsx"
import Opening from "./components/Opening.jsx"
import Debate from "./components/Debate.jsx"
import JudgeSection from "./components/JudgeSection.jsx"
import HoChiMinhSection from "./components/HoChiMinhSection.jsx"
import PollSection from "./components/PollSection.jsx"
import SolutionsSection from "./components/SolutionsSection.jsx"
import Conclusion from "./components/Conclusion.jsx"
import Footer from "./components/Footer.jsx"

export default function App() {
  const heroRef = useRef(null)
  return (
    <div id="app">
      <div className="bg-fade" aria-hidden="true" />
      <ScrollChrome />
      <LotusPetals />
      <Hero heroRef={heroRef} />
      <main>
        <Characters />
        <Opening />
        <Debate />
        <JudgeSection />
        <HoChiMinhSection />
        <PollSection />
        <SolutionsSection />
        <Conclusion />
      </main>
      <Footer />
    </div>
  )
}
