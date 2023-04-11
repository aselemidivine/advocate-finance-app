// import React from 'react'
// import styled from "styled-components";

// const Footer = () => {
//   return (
//   <FooterContainer className="text-center text-lg-start text-white">
//     <div>
// <div className="container my-5">
//     <div className="container p-4 pb-0">
//       <section className="">
//         <div className="row">
//           <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
//             <h6 className="text-uppercase mb-4 font-weight-bold">
//               Company name
//             </h6>
//             <p>
//               Here you can use rows and columns to organize your footer
//               content. Lorem ipsum dolor sit amet, consectetur adipisicing
//               elit.
//             </p>
//           </div>

//           <hr className="w-100 clearfix d-md-none" />

//           {/* <!-- Grid column --> */}
//           <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
//             <h6 className="text-uppercase mb-4 font-weight-bold">Products</h6>
//             <p>
//               <a className="text-white">MDBootstrap</a>
//             </p>
//             <p>
//               <a className="text-white">MDWordPress</a>
//             </p>
//             <p>
//               <a className="text-white">BrandFlow</a>
//             </p>
//             <p>
//               <a className="text-white">Bootstrap Angular</a>
//             </p>
//           </div>
//           {/* <!-- Grid column --> */}

//           <hr className="w-100 clearfix d-md-none" />

//           {/* <!-- Grid column --> */}
//           <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
//             <h6 className="text-uppercase mb-4 font-weight-bold">
//               Useful links
//             </h6>
//             <p>
//               <a className="text-white">Your Account</a>
//             </p>
//             <p>
//               <a className="text-white">Become an Affiliate</a>
//             </p>
//             <p>
//               <a className="text-white">Shipping Rates</a>
//             </p>
//             <p>
//               <a className="text-white">Help</a>
//             </p>
//           </div>

//           {/* <!-- Grid column --> */}
//           <hr className="w-100 clearfix d-md-none" />

//           {/* <!-- Grid column --> */}
//           <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
//             <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
//             <p><i className="fas fa-home mr-3"></i> New York, NY 10012, US</p>
//             <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
//             <p><i className="fas fa-phone mr-3"></i> + 01 234 567 88</p>
//             <p><i className="fas fa-print mr-3"></i> + 01 234 567 89</p>
//           </div>
//           {/* <!-- Grid column --> */}
//         </div>
//         {/* <!--Grid row--> */}
//       </section>
//       {/* <!-- Section: Links --> */}

//       <hr className="my-3"></hr>

//       {/* <!-- Section: Copyright --> */}
//       <section className="p-3 pt-0">
//         <div className="row d-flex align-items-center">
//           {/* <!-- Grid column --> */}
//           <div className="col-md-7 col-lg-8 text-center text-md-start">
//             {/* <!-- Copyright --> */}
//             <div className="p-3">
//               © 2020 Copyright:
//               <a className="text-white" href="https://mdbootstrap.com/"
//                  >MDBootstrap.com</a
//                 >
//             </div>
//             {/* <!-- Copyright --> */}
//           </div>
//           {/* <!-- Grid column --> */}

//           {/* <!-- Grid column --> */}
//           <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
//             {/* <!-- Facebook --> */}
//             <a
//                className="btn btn-outline-light btn-floating m-1"
//                role="button"
//                ><i className="fab fa-facebook-f"></i
//               ></a>

//             {/* <!-- Twitter --> */}
//             <a
//                className="btn btn-outline-light btn-floating m-1"
//                role="button"
//                ><i className="fab fa-twitter"></i
//               ></a>

//             {/* <!-- Google --> */}
//             <a
//                className="btn btn-outline-light btn-floating m-1"
//                role="button"
//                ><i className="fab fa-google"></i
//               ></a>

//             {/* <!-- Instagram --> */}
//             <a
//                className="btn btn-outline-light btn-floating m-1"
//                role="button"
//                ><i className="fab fa-instagram"></i
//               ></a>
//           </div>
//           {/* <!-- Grid column --> */}
//         </div>
//       </section>
//       {/* <!-- Section: Copyright --> */}
//     </div>
//     {/* <!-- Grid container --> */}
// </div>
//     </div>
//   </FooterContainer>
//   );
// };

// export default Footer

// const FooterContainer = styled.section`

// .btn {}
//     background-color: #45526e;
// `;

import React from "react";
import styled from "styled-components";
import { mobile } from "../components/responsive";
import {
  Facebook,
  Twitter,
  Telegram,
  Instagram,
  Room,
  Phone,
  MailOutline,
} from "@material-ui/icons";

const Container = styled.div`
  display: flex;
  
  // @media (max-width: 320px) {
  //   min-width: 348px;
  //   }
  ${mobile({ flexDirection: "column" })}
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h2`
  // font-size: 38px;
`;
const Desc = styled.p`
  margin: 20px 0px;
  font-size: 18px;
`;
const SocialContainer = styled.div`
  display: flex;
`;
const SocialIcon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  color: white;
  background-color: #${(props) => props.color};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 20px;
`;

const Center = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ display: "none" })}
`;

const Title = styled.h3`
  margin-bottom: 30px;
  font-size: 22px;
  text-align: center;
  font-weight: 600;
`;
const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  flex-wrap: wrap;
`;
const ListItem = styled.li`
  width: 50%;
  margin-bottom: 10px;
`;
const Right = styled.div`
  flex: 1;
  padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
`;
const ContactItem = styled.div`
  margin-bottom: 20px;
  display: flex;
  align-items: center;
`;
const Payment = styled.img`
  width: 100%;
`;

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>Advocate Finance</Logo>
        <Desc>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis a
          possimus distinctio omnis minus enim. Possimus quae atque ut et. At
          recusandae rem tempora esse, eum distinctio repellat aliquam?
          Explicabo.
        </Desc>
        <SocialContainer>
          <SocialIcon color="385999">
            <Facebook />
          </SocialIcon>
          <SocialIcon color="E44085">
            <Instagram />
          </SocialIcon>
          <SocialIcon color="55ACEE">
            <Telegram />
          </SocialIcon>
          <SocialIcon color="E60023">
            <Twitter />
          </SocialIcon>
        </SocialContainer>
      </Left>
      <Center>
        <Title> Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Men Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>
        <Title>Contact</Title>
        <ContactItem>
          <Room style={{ marginRight: "10px" }} />
          42, Oloruntoyin street, oworonshoki Lagos Nigeria
        </ContactItem>
        <ContactItem>
          <Phone style={{ marginRight: "10px" }} />
          +234-081-6892-4643
        </ContactItem>
        <ContactItem>
          <MailOutline style={{ marginRight: "10px" }} />
          aselemidivine@gmail.com
        </ContactItem>
        <Payment src="" />
      </Right>
    </Container>
  );
};

export default Footer;
