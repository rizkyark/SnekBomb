import React from "react";
import CarouselLanding from "../../components/CarouselLanding";
import NavbarHeader from "../../components/NavbarHeader";
import "./landing.css";
import snek from "./snek2.jpg";

export default function LandingPage() {
  const whatsapp =
    "https://res.cloudinary.com/di6rwbzkv/image/upload/v1675005235/Snekbomb/whatsapp-icon-logo-8CA4FB831E-seeklogo.com_ia2jqj.png";
  const shopee =
    "https://res.cloudinary.com/di6rwbzkv/image/upload/v1675005236/Snekbomb/shopee-circle-logo-design-shopping-bag-13_udmv7n.png";
  const ColoredLine = ({ color }) => (
    <hr
      style={{
        color: color,
        backgroundColor: color,
        height: 5,
      }}
    />
  );
  return (
    <>
      {/* <NavbarHeader /> */}
      <img src={snek} alt="" className="logo_banner" />
      <div className="container_color">
        <div className="title_container">
          <h4 style={{ alignContent: "center" }} className="product_title">
            <b></b>
            <span>Our Products</span>
            <b></b>
          </h4>
        </div>
      </div>
      <div className="karosel">
        <CarouselLanding />
      </div>
      {/* <h1>Landing Page</h1> */}
      <div className="title_container">
        <h4 style={{ alignContent: "center" }} className="product_title">
          <b></b>
          <span>For Orders</span>
          <b></b>
        </h4>
      </div>
      <div className="store d-flex flex-column">
        <button className="store_btn">
          <a
            href="https://api.whatsapp.com/send?phone=628881072900&amp;text=Halo%20ChefBomb,%20aku%20mau%20order"
            className="product_link d-flex"
          >
            <img src={whatsapp} alt="" />
            <p>WHATSAPP</p>
          </a>
        </button>
        <button className="store_btn">
          <a className="product_link d-flex" href="https://shp.ee/hhsnr32">
            <img src={shopee} alt="" />
            <p>SHOPEE</p>
          </a>
        </button>
      </div>
    </>
  );
}
