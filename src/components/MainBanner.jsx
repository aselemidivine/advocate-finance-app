import React from "react";
import styled from "styled-components";
// import Typical from "react-typical";
// import Typical from "../assets/jpegs/advocate-header-img";

const MainBanner = () => {
  return (
    <MainBannerContainer>
      <div className="main-center">
        <div className="auto-type">
          <h3 className="heading-7">Global Premier Firm On Finances</h3>
        </div>
        <div className="auto-type no-2 div-block-14">
          <div className="text-block-6">
            {/* <Typical
              steps={[
                "We are your",
                1000,
                "Proven partner,",
                2000,
                "Industry expert,",
                2000,
                "Recovery Guru,",
                2000,
              ]}
              loop={Infinity}
              wrapper="h1"
              className="typical"
              onTypingDone={() => console.log("Typing done.")}
            /> */}
          </div>
          <div className="typed-text"></div>
        </div>
        <div className="div-block-15">
          <div className="text-block-7">
            <p>

            We place our clients at the centre of our operations, easing their
            economic pain by making sure they reclaim all lost and stolen
            assets.
            </p>
          </div>
        </div>
        <button className="important-btn">Learn more</button>
      </div>
    </MainBannerContainer>
  );
};

export default MainBanner;

const MainBannerContainer = styled.section`
  display: flex;
  margin-left: 301px;
  margin-top: 40px;
  margin-bottom: 60px;
  // margin: 50px auto;


  h3 {
    font-size: 22px;
    text-align: center;
    font-weight: 600;
    color: #fff;
    margin-top: 40px;

  }
  h1 {
    font-size: 38px;
    text-align: center;
    font-weight: 600;
    color: #fff;

  }

  p {
    font-size: 18px;
    text-align: center;
    color: #fff;
    font-weight: 600;

  }

  .main-center {
    background-image: url('https://images.unsplash.com/photo-1619771766980-368d32e44b82?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80');
    background-size: cover;
    background-position: center;
    justify-content: center;
    align-items: center;
    max-width: 740px;
    height: 324px;
  }

  
  @media (max-width: 998px) {
    margin: 40px auto;
    .main-center {
      height: 388px;
     
    }
  }
  @media (max-width: 425px) {
    .main-center {
      height: 388px;  
    }
  }


`;
