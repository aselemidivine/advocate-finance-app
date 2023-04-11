import Link from "next/link";
import React, { useState } from "react";
import styled from "styled-components";
import Image from "next/image";


const Tabs = () => {
  return (
    <MainBannerContainer>
      {/* className="container-tab" */}
      <div className="tabs">
        <div className="tabs-menu">
          <Link href="/" className="tab-link">
            <div className="tab-number">01</div>
            <div className="tab-label">Trading and Investment Scam</div>
          </Link>

          <Link href="/" className="tab-link">
            <div className="tab-number">02</div>
            <div className="tab-label">Litigation Financial Forensics</div>
          </Link>

          <Link href="/" className="tab-link">
            <div className="tab-number">03</div>
            <div className="tab-label">Claims Assessment Valuation</div>
          </Link>

          <Link href="/" className="tab-link">
            <div className="tab-number">04</div>
            <div className="tab-label">Trading Techniques Consultation</div>
          </Link>

          <Link href="/" className="tab-link">
            <div className="tab-number">05</div>
            <div className="tab-label">Risk Crisis Management</div>
          </Link>

          <Link href="/" className="tab-link">
            <div className="tab-number">06</div>
            <div className="tab-label">
              International Banking Financial Advisory
            </div>
          </Link>
        </div>

        {/* <div className="tab-pane">
            <div className="tab-pane-number-wrapper">
              <div className="pane-number">02</div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/611fa765419f2e7f85f19152/6133c85ef3e71e6913b63554_actionvance-6lPgX6yAW1Y-unsplash.jpg"
              className="tab-pane-image"
            />
            <div className="tab-textblock">
              Financial forensics and accounting involves both tracking and
              interception of the flow funds and assets. Legal Finance is
              well-equipped in this regard to examine and retrieve any necessary
              data from such devices to be presented as evidence of interest.
            </div>
            <Link href="/litigation" className="learn-more">
              Learn more
            </Link>
          </div>
          <div className="tab-pane ">
            <div className="tab-pane-number-wrapper">
              <div className="pane-number">03</div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/611fa765419f2e7f85f19152/6133ca8965a92900fbf9d5c3_sarah-brown-3eg3Iuq-3gQ-unsplash.jpg"
              className="tab-pane-image"
            />
            <div className="tab-textblock">
              Our claims assessment team operational method delve around
              regulation, and their direct contact with various regulators
              around the world gives them insight to the type of company they
              are dealing with and how they can work together to recover assets
              for victims of fraudulent activities.
            </div>
            <Link href="/claim" className="learn-more">
              Learn more
            </Link>
          </div>
          <div className="tab-pane">
            <div className="tab-pane-number-wrapper">
              <div className="pane-number">04</div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/611fa765419f2e7f85f19152/6127ce29ce8538afb39ca45b_viktor-forgacs-3PyBkxgTiL0-unsplash.jpg"
              className="tab-pane-image"
            />
            <div className="tab-textblock">
              Legal-Finance has a lot of experience with scams all over the
              internet and is educated enough to consult potential investors on
              brokerages they should avoid and the ones they should be involved
              with.
            </div>
            <Link href="/techniques" className="learn-more">
              Learn more
            </Link>
          </div>
          <div className="tab-pane">
            <div className="tab-pane-number-wrapper">
              <div className="pane-number">05</div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/611fa765419f2e7f85f19152/6133cccc63b83dd37757b4cb_gr-stocks-Iq9SaJezkOE-unsplash.jpg"
              className="tab-pane-image"
            />
            <div className="tab-textblock">
              Crisis management is identifying a threat to clients trading
              assets and funds and its stakeholders in order to respond
              effectively to the threat. Due to the unpredictability of global
              events, many modern and prospective traders attempt to identify
              potential crises before they occur in order to sketch out plans to
              deal with them.
            </div>
            <Link href="/risk" className="learn-more">
              Learn more
            </Link>
          </div>
          <div className="tab-pane">
            <div className="tab-pane-number-wrapper">
              <div className="pane-number">06</div>
            </div>
            <img
              src="https://uploads-ssl.webflow.com/611fa765419f2e7f85f19152/6133cdad2787a002a390bc4c_visual-stories-micheile-ZVprbBmT8QA-unsplash.jpg"
              className="tab-pane-image"
            />
            <div className="tab-textblock">
              Legal-Finance is all about giving sound and solid financial
              knowledge when it comes to how prospective traders allocate their
              funds to various brokers and trading companies for maximum returns
              on investments.
            </div>
            <Link href="/international" className="learn-more">
              Learn more
            </Link>
          </div> */}
      </div>
      <div className="tabs-content ">
        <div className="tab-pane ">
          <div className="tab-pane-number">
            <div className="pane-number">01</div>
          </div>
          <Image
            src="https://uploads-ssl.webflow.com/611fa765419f2e7f85f19152/6123a5685294b7eda67517f8_tyler-franta-iusJ25iYu1c-unsplash.jpg"
            className="tab-pane-image"
          />
          <div className="tab-textblock">
            We ensure that our clients get the best service in the process of
            recovering their funds and assets.
          </div>
          <Link href="/trading" className="important-btn">
            Learn more
          </Link>
        </div>
      </div>
    </MainBannerContainer>
  );
};

export default Tabs;

const MainBannerContainer = styled.div`
  max-width: 1000px;
  border-top: 3px solid;
  margin-left: 140px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 40px;


  .tabs {
    max-width: 900px;
    // display: flex;
    margin-top: 40px;
    // justify-content: space-evenly;
    //   // justify-content: space-between;
    //   align-items: center;
  }

  .tab-pane {
    display: grid;
    padding: 5px;
    border-top: 5px solid;
    border-right: 5px solid;
    max-width: 527px;
    max-height: 510px;
    background-color: darkgray;
    align-items: center;
    justify-content: center;
    img {
      width: 447px;
      height: 300px;
      margin-left: 40px;
    }
  }

  .tabs-menu {
    margin-right: 20px;
    margin-top: 20px;
  }

  .tab-link {
    display: flex;
    width: 10px;
    margin-left: 20px;
    margin-bottom: 20px;
    text-decoration: none;
    color: green; /* set the color you want */
  }

  .tab-number {
    margin-right: 10px;
    margin-top: 15px;
  }

  .tabs-content {
    min-width: 700px;
    margin-bottom: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .important-btn {
    text-decoration: none;
    width: 110px;
    height: 40px;
    width: 170px;
    margin-left: 165px;
    color: #fff; /* set the color you want */
  }

  .tab-textblock {
    justify-content: center;
    text-align: center;
    margin-top: 15px;
  }

  .pane-number {
    font-size: 60px;
    font-weight: bold;
    transform: rotate(1deg) scaleY(1);
  }

  .tab-pane-number {
    display: inline-block;
  }

  @media (max-width: 450px) {
    flex-direction: column;

    .tabs-content {
      min-width: 340px;
      margin-right: 125px;
    }

    .tabs {
      margin-right: 255px;
    }

    .tab-pane {
      img {
        width: 292px;
        height: 228px;
        margin-left: 25px;
      }
    }

    .important-btn {
      margin-left: 85px;
    }
  }
`;
