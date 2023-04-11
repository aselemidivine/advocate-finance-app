import React from "react";
import styled from "styled-components";

const Subscribe = () => {
  return (
    <MainBannerContainer>
      <div className="centered-container">
        <h2>Subscribe form</h2>
        <p>
          Legal Finance is a firm that offers a full range of solutions to aid
          assets recovery with the help of highly efficient information
          collection, forensics and processing.
        </p>
        <div className="w-form">
          <form
            id="email-form"
            name="email-form"
            className="subscribe-form-flex"
          >
            <div className="subscribe-form">
              <input
                type="email"
                className="subscribe"
                placeholder="Enter your email"
              />
            </div>
            <button className="important-btn">Subscribe</button>
          </form>
          {/* <div className="w-form-done">
            <div>Thank you! Your submission has been received!</div>
          </div>
          <div className="w-form-fail">
            <div>Oops! Something went wrong while submitting the form.</div>
          </div> */}
        </div>
      </div>
    </MainBannerContainer>
  );
};

export default Subscribe;

const MainBannerContainer = styled.section`
  max-width: 600px;
  max-height: 600px;
  align-items: center;
  display: inline-flex;
  justify-content: center;

  h2 {
    font-size: 22px;
    text-align: center;
    font-weight: 600;
  }

  .subscribe-form-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .w-form {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  @media (min-width: 320px) {
    .subscribe-form-flex {
      max-width: 342px;
     
    }
    .subscribe-form {
      max-width: 342px;
    }

    .subscribe {
        max-width: 325px;
        height: 50px;
      }
      .important-btn {
        border-radius: 0px 5px 5px 0px;
        max-width: 105px;
        height: 50px;
        margin-bottom: 25px;
        display: flex;
        justify-content: center;
    
      }
    }

  .centered-container {
    margin-bottom: 30px;
    p {
      font-size: 18px;
      text-align: center;
    }
  }


  // .subscribe {
  //   min-width: 325px;
  //   height: 50px;

  //   margin-top: 17px;
  //   border-radius: 5px 0px 0px 5px;
  // }
`;
