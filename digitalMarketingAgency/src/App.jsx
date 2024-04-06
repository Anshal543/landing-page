import "./App.css";
import About from "./components/About";
import Client from "./components/Client";
import Footer from "./components/Footer";
import Get from "./components/Get";
import Header from "./components/Header";
import Main from "./components/Main";
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Counter from "./counter";

function App() {
  return (
    <>
    <div className=" max-w-[1440px] mx-auto">

      <Header />
      <Main />
      <Services />
      <About />
      <Portfolio />
      <Client />
      <Get />
      <Footer />
    </div>

      {/* <Counter/> */}
    </>
  );
}

export default App;
