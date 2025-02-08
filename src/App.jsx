import About from "./component/About";
import Contact from "./component/Contact";
import Experience from "./component/Experience";
import Hero from "./component/Hero";
import Navbar from "./component/Navbar";
import Projects from "./component/Projects";
import Technologies from "./component/Technologies";

const App = () => {
  return (
  <div className="overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-200 selection:text-cyan-900"> 
    <div className="fixed top-0 -z-10 h-full w-full">
    <div class="relative h-full w-full bg-slate-950"><div class="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div><div class="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div></div>
    </div>
      <div className="container mx-auto px-8"></div>
        <Navbar/>
        <Hero/>
        <About/>
        <Technologies/>
        <Experience/>
        <Projects/>
        <Contact/>
  </div>
  );
};

export default App;