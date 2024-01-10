import Layout from "./Layout/Layout";
import Footer from "./Shared/Footer";
import Navbar from "./Shared/Navbar";

function App() {
  return (
    <div className="">
      <Navbar />
      <div className="md:w-[80%] mx-auto">
        <Layout />
      </div>
      <Footer />
    </div>
  );
}

export default App;
