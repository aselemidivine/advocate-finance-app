import React from "react";
import styled from "styled-components";


const Consulting = () => {
  return (
    <ConsultingContainer>
      <div className="section-10 wf-section">
        <h2 className="heading-4">
          Consulting is a law firm specializing in corporate finance work.
        </h2>
        <p className="paragraph-2">
          Advice on comprehensive legal solutions and legal planning on all
          aspects of business, including: issues under Company Law &amp;
          Exchange Control Regulations.
        </p>
        <h3 className="heading-5">Our mission</h3>
        <p className="paragraph-3">
          The mission of Legal-Finance is to help, protect and shield clients
          from online scams and fraudulent financial activity worldwide. We are
          committed to listening to each unique client who is a victim of online
          fraud and helping them recover what is rightfully theirs with the help
          of our professionals, experts, and fund recovery specialitist and
          providing customized, affordable legal services.
        </p>
        <h3 className="heading-6">Our value</h3>
        <p className="paragraph-4">
          At Legal-Finance, We expect from ourselves what we expect from others,
          and by being transparent we express ourselves fully and in an honest
          way, which is a value we believe our workers and co-workers should
          live by too.
        </p>
        <div className="container-8 w-container"></div>
      </div>
    </ConsultingContainer>
  );
};

export default Consulting;

const ConsultingContainer = styled.section`
h3 {
  font-size: 28px;
  text-align: center;
  font-weight: 600;
}
h2 {
  font-size: 30px;
  text-align: center;
  font-weight: 600;
}

p {
  font-size: 18px;
  text-align: center;
}
`;
