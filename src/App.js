import Carousel from "./components/Carousel/Carousel";
import Features from "./components/Features/Features";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import More from "./components/More/More";
import Reason from "./components/Reason/Reason";

function App() {
  return (
    <div>
      <Header/>
      <Hero/>
      <More/>
      <Features/>
      <Reason/>
      {/* <Carousel/> */}
    </div>
  );
}

export default App;
