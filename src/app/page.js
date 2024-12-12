'use client'
import AboutUs from "@/Components/AboutUs/AboutUs";
import ContactUs from "@/Components/ContactUs/ContactUs";
import Header from "@/Components/Header/Header";
import IntoductionVideo from "@/Components/IntoductionVideo/IntoductionVideo";
import Navbar from "@/Components/Navbar/Navbar";
import Parteners from "@/Components/Parteners/Parteners";
import WhoWeHelp from "@/Components/WhoWeHelp/WhoWeHelp";

export default function Home() {

  return (
    <div>
      <Navbar />
      <Header />
      <Parteners />
      <AboutUs />
      <IntoductionVideo />
      <WhoWeHelp />
      <ContactUs />
    </div>
  );
}
