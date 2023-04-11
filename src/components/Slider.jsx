import React from "react";
import Image from "next/image";
import styled from "styled-components";

const Slider = () => {
  return (
    <div>
      <h3>We have many reviews from our satisfied clients.</h3>

      <MainBannerContainer
        id="carouselExampleIndicators"
        className="carousel slide"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>

        {/* <h1>We have many reviews from our satisfied clients.</h1> */}
        <div className="carousel-inner">
          <div className="carousel-item active">
            {/* <Image src="..." className="d-block w-100" alt="..."> */}
            <p>
              I&apos;ve started to trade since 2016. All of the companies I traded in
              promised to me 99,9% of success but seems to me that wasn&apos;t true.
              My last chance was LegalFinance, it&apos;s a miracle but after only 2
              weeks of work they have returned about 85% of my money back! They
              promised that by the end of the month I&apos;m going to receive ALL of
              my money back, and YES their word was their bond.
            </p>
            <h4 className="slider-heading">
              <strong className="slider-boldtext">Samuel Thomas</strong>
            </h4>
            <div className="country-text">Australia</div>
          </div>
          <div className="carousel-item">
            {/* <Image src="..." className="d-block w-100" alt="..."> */}
            <p>
              We also bring a strong interest in coaching and capability
              building, with an emphasis on emotional.
            </p>
            <h4 className="slider-heading">
              <strong className="slider-boldtext">Claire Watts</strong>
            </h4>
            <div className="country-text">Canada</div>
          </div>
          <div className="carousel-item">
            {/* <Image src="..." className="d-block w-100" alt="..."> */}
            <p>
              He was great in planting the seed and allowing the group to
              transition into a collaborative discussion pertaining
            </p>
            <h3 className="slider-heading about-story-wrap">
              <strong className="slider-boldtext">Hannah Mccarthy</strong>
            </h3>
            <div className="country-text">England</div>

            {/* <p className="country-text">England</p> */}
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </MainBannerContainer>
    </div>
  );
};

export default Slider;

const MainBannerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  //   margin: 40px auto;
  margin-bottom: 40px;
  margin-left: auto;
  margin-right: auto;
  // height: 340px;
  min-height: 423px;
  max-width: 766px;
  padding: 20px;
  background-color: gray;


`;
