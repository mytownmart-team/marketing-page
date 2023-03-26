import { LeftHomeSection } from "./components/left-home-section";
import { RightHomeSection } from "./components/right-home-section";

function Home() {
  return (
    <div>
      <main className=" block md:grid grid-cols-2">
        <LeftHomeSection />
        <RightHomeSection />
      </main>
    </div>
  );
}

export default Home;
