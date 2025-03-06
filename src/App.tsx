import { NavBar, Hero } from "./components";

function App() {
  return (
    <div className="relative z-0 bg-primary">
      <div className="flex flex-col bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <NavBar />
        <Hero />
      </div>
    </div>
  );
}

export default App;
