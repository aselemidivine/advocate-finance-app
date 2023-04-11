import React from "react";
import styled from "styled-components";
import NavBar from "../components/Navbar";
import MainBanner from "../components/MainBanner";
import Consulting from "@/components/Consulting";
import Tabs from "@/components/Tabs";
import Subscribe from "@/components/Subscribe";
import Consulting2 from "@/components/Consulting2";
// import Footer from "@/components/Footer";
import Copyright from "@/components/Copyright";
import Slider from "@/components/Slider";


const indexPage = () => {
    return (
      <>
      <HomeContainer className="container">
        <NavBar />
        <MainBanner />
        <Consulting />
        <Tabs />
        <Consulting2 />
        <Slider />
        <Subscribe />
        {/* <Footer /> */}
        <Copyright />
      </HomeContainer>
      </>
    );
  };
  
  export default indexPage;

  const HomeContainer = styled.section`
    // display: grid;
    justify-content: center;
    align-items: center;
    text-align: center;
    `;