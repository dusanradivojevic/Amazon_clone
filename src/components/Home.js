import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            key="1"
            id="12321341"
            rating={5}
            price={29.99}
            title="The lean startup: How constant innovation creates radically successful businesses paperback"
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
          />
          <Product
            key="2"
            id="49538094"
            rating={5}
            price={239.0}
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough Hook and Whist, 5 Litre Glass Bowl"
            image="https://images-na.ssl-images-amazon.com/images/I/81ERKuqTYXL._AC_SY879_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            key="3"
            id="4903850"
            rating={3}
            price={199.99}
            title="Samsung Smart Watch Pro 99 - Made for Sport"
            image="https://www.did.ie/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/s/m/sm-r370nzkabt_2.jpg"
          />
          <Product
            key="4"
            id="23445930"
            rating={5}
            price={98.99}
            title="Amazon Echo (3rd generation) | Smart speaker with Alexa, Charcoal fabric"
            image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
          />
          <Product
            key="5"
            id="325435435"
            rating={5}
            price={598.99}
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            image="https://www.adorama.com/images/Large/acmu1u2lla.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            key="6"
            id="90829332"
            rating={4}
            price={1094.98}
            title="Samsung 49' Curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440"
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
