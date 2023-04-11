import React from "react";
import AOS from "aos";
// import Image from "next/image";
import "aos/dist/aos.css";
import styled from "styled-components";
import { mobile } from "../components/responsive";

const Consulting2 = () => {
  return (
    <ConsultingContainer className="feature-section ">
      <div className="flex-container ">
        <div className="feature-image-mask">
          {/* <Image
            src="https://uploads-ssl.webflow.com/611fa765419f2e7f85f19152/611ff8824cde169ccfd821fc_giammarco-zeH-ljawHtg-unsplash.jpg"
            alt="Legal finance law firm since 2012."
            className="feature-image"
            width={500}
            height={500}
          /> */}
        </div>

        <div className="advocate-container">
          <h2 className="heading-12">
            Advocate Finance. We are here for you.
            <span className="feauture-subtext">Since 2012.</span>
          </h2>
          <p>
            There are tens of millions of victims every single year throughout
            the world. We know how to recover your funds and we helped thousands
            of scam victims from around the world to recover their funds.
            <br />‍<br />
            We are specialists in the fields of binary option, forex and
            cryptocurrency and this means we are adept at attacking false
            brokers and beating them at their own game.
          </p>
        </div>
      </div>
    </ConsultingContainer>
  );
};

export default Consulting2;

const ConsultingContainer = styled.div`
  min-width: 800px;
  // max-width: 368px;
  margin-bottom: 70px;
  margin-top: 70px;
  // margin: 70px auto;

  h2 {
    font-size: 22px;
    text-align: center;
    font-weight: 600;
  }
  h1 {
    font-size: 38px;
    text-align: center;
    font-weight: 600;
  }

  p {
    font-size: 18px;
    text-align: center;
  }

  .flex-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .advocate-container {
    max-width: 368px;
    span {
      font-family: "Delicious Handrawn", cursive;
      font-weight: 300;
      margin-left: 10px;
    }
  }

  @media (max-width: 750px) {

    .flex-container {
      flex-direction: column;
      margin-right: 362px;

    }
  }

  // img {
  //   width: 356px;
  //   height: 238px;
  // }
`;
