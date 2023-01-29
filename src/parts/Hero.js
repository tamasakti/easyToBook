import React from "react";
import Button from "elements/Button";

import numberFormat from "utils/FormatNumber";

import imgHero from "assets/images/hero-img.jpg";
import imgHero_ from "assets/images/hero-img-frame.jpg";
import iconCities from "assets/icons/ic_cities.svg";
import iconTraveler from "assets/icons/ic_traveler.svg";
import iconTreasure from "assets/icons/ic_treasure.svg";

export default function Hero(props) {
  function showMostPicked() {
    window.scrollTo({
      top: props.refMostPicked.current.offsetTop - 30,
      behavior: "smooth",
    });
  }

  return (
    <section className="container pt-4">
      <div className="row align-items-center">
        <div className="col-auto pr-5" style={{ width: 530 }}>
          <h1 className="font-weight-bold line-height-1 mb-3">
            Forget Busy Work, <br />
            Start Next Vacation
          </h1>
          <p
            className="mb-3 font-weight-light text-gray-500 w-75"
            style={{ lineHeight: "170%" }}
          >
            We provide what you need to enjoy your holiday with family. Time to
            make another memorable moments.
          </p>
          <Button
            className="btn px-5"
            hasShadow
            isPrimary
            onclick={showMostPicked}
          >
            Show Me Now
          </Button>
          <div className="row" style={{ marginTop: "80px" }}>
            <div className="col-auto" style={{ marginRight: 10 }}>
              <img
                src={iconTraveler}
                alt={`${props.data.travelers} Travelers`}
              />
              <h6 className=" ">
                {numberFormat(props.data.travelers)}{" "}
                <span className="text-gray-500 fot-weight-light">
                  Travelers
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 10 }}>
              <img
                src={iconTreasure}
                alt={`${props.data.treasures} Treasures`}
              />
              <h6 className=" ">
                {numberFormat(props.data.treasures)}{" "}
                <span className="text-gray-500 fot-weight-light">
                  Treasures
                </span>
              </h6>
            </div>
            <div className="col-auto" style={{ marginRight: 10 }}>
              <img src={iconTraveler} alt={`${props.data.cities} Cities`} />
              <h6 className=" ">
                {numberFormat(props.data.cities)}{" "}
                <span className="text-gray-500 fot-weight-light">Cities</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="col-6 pl-5">
          <div style={{ width: 520, height: 410 }}>
            <img
              src={imgHero}
              className="img-fluid position-absolute"
              alt="Room WIth Couches"
              style={{ margin: "-30px 0 0 -30px", zIndex: 1 }}
            />
            <img
              src={imgHero_}
              className="img-fluid position-absolute"
              alt="Room WIth Couches Frame"
              style={{ margin: "0 -15px -15px 0" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
