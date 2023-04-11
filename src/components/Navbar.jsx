import Link from "next/link";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Logo from "../assets/pngs/logo.png";
import styled from "styled-components";
// import { Collapse } from "bootstrap";
// import { useRouter } from "next/router";

const NavBar = () => {

  


  return (
    <NavbarContainer>
      <div>
        <div className="">
          <div className="">
            <div className="m-1">
              Welcome to our legal firm
              <span className="legal">Advocate Finance!</span>
            </div>
          </div>
        </div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <Link href="/">
              <Image
                src={Logo}
                alt="Legal finance law firm since 2012."
                className="feature-image"
              />
            </Link>

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarExample01"
              aria-controls="navbarExample01"
              aria-expanded="false"
              aria-label="Toggle navigation"
              // onClick={() => setExpanded(!expanded)}
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse justify-content-between ml-auto"
              id="navbarExample01"
            >
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item active">
                  <Link className="nav-link" href="/" aria-current="page">
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/about">
                    About Us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/services">
                    Services
                  </Link>
                </li>

                <li className="nav-item">
                  <Link className="nav-link" href="/contact">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </NavbarContainer>
  );
};

export default NavBar;

const NavbarContainer = styled.section`

margin-bottom: 20px;

  img {
    width: 87px;
    height: 50px;
  }

  .nav-item {
    font-weight: bold;
  }
`;



// import Link from "next/link";
// import Image from "next/image";
// import React from "react";
// import Logo from "../assets/pngs/logo.png";
// import styled from "styled-components";

// const Navbar = () => {
//   return (
//     <NavbarContainer
//       className="navbar navbar-expand-lg navbar-light bg-warning fixed-top px-5 py-2 shadow-5-strong"
//       // style="z-index: 5"
//     >
//       <div className="container-fluid">
//         <Link className="navbar-brand" href="#">
//           <Image src={Logo} alt="logo" />
//         </Link>
//         <button
//           className="navbar-toggler"
//           type="button"
//           data-mdb-toggle="collapse"
//           data-mdb-target="#navbarExample01"
//           aria-controls="navbarExample01"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >

//           <i className="fas fa-bars"></i>
//           <span></span>
//           <span></span>
//           <span></span>
//         </button>

//         {/* <button
//           className="navbar-toggler"
//           type="button"
//           data-bs-toggle="collapse"
//           data-bs-target="#navbarTogglerDemo02"
//           aria-controls="navbarTogglerDemo02"
//           aria-expanded="false"
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button> */}
//         <div
//           className="collapse navbar-collapse justify-content-between ml-auto"
//           id="navbarExample01"
//         >
//           <ul
//             className="navbar-nav ms-auto mb-2 mb-lg-0"
//             // style="
//             //   font-size: 20px;
//             //   font-family: rooneysans;
//             //   font-weight: bold;
//             // "
//           >
//             <li className="nav-item active">
//               <Link
//                 className="nav-link"
//                 href="#"
//                 aria-current="page"
//                 // style="
//                 //   font-family: rooneysans;
//                 //   font-weight: bold;
//                 // "
//               >
//                 Home
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link"
//                 href="#vision"
//                 // style="
//                 //   font-family: rooneysans;
//                 //   font-weight: bold;
//                 // "
//               >
//                 Vision
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link"
//                 href="#gallery"
//                 // style="
//                 //   font-family: rooneysans;
//                 //   font-weight: bold;
//                 // "
//               >
//                 Gallery
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link"
//                 href="#blog"
//                 // style="
//                 //   font-family: rooneysans;
//                 //   font-weight: bold;
//                 // "
//               >
//                 Blogs
//               </Link>
//             </li>
//             <li className="nav-item">
//               <Link
//                 className="nav-link"
//                 href="#footer"
//                 // style="
//                 //   font-family: rooneysans;
//                 //   font-weight: bold;
//                 // "
//               >
//                 Contact
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </NavbarContainer>
//   );
// };

// export default Navbar;

// const NavbarContainer = styled.nav`
//   img {
//     width: 87px;
//     height: 50px;
//   }
// `;
