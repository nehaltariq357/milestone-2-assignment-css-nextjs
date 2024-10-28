// import Image from "next/image";
import Banner from "./components/Banner/page";
import Brands from "./components/Brand/page";
import Card from "./components/Card/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
    <div>
      <Banner />
      <Card />
      <Brands />
      <Footer />
    </div>
  );
}
