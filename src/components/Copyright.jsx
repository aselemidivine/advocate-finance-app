import React from "react";
import styled from "styled-components";

const Container = styled.div`
  height: 30px;
  //   background-color: teal;
  color: #385999;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;
    .p-3 p {
    color: #385999;
    display: flex;
    align-items: baseline;
  }
`;

const Announcement = () => {
  return (
    <Container>
      <div className="p-3">
        <p>
        Copyright © 2023 Advocate Finance. All rights reserved.
        </p>
      </div>
    </Container>
  );
};

export default Announcement;
