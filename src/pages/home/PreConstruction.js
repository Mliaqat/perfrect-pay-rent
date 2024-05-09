import React from "react";

import "./style.css";

export default function PreConstruction() {
  return (
    <div className="container-2">
      <div className="rect-box" />
      <div className="inner-cont-c4">
        <div className="header-c4">
          <p className="title-1-c5">
            Pre-Construction New Build<span> Bid</span>
          </p>
        </div>

        <div style={{ display: "flex", flex: 1 }}>
          <div
            style={{ width: "45%", display: "flex", flexDirection: "column" }}
          >
            <div className="image-pre-construction" />
          </div>
          <div
            className="inner-cont2-c3 c5-cont"
            style={{ display: "flex", alignItems: "center" }}
          >
            <ul>
              <li>Bid for rentals under construction.</li>

              <li>
                Secure the rental you desire in the perfect location up to 18
                months before occupancy.
              </li>

              <li>Enjoy the feeling of moving into brand new home.</li>

              <li>
                Benefit from selecting a place under construction tailored to
                your needs, whether it’slocation, type, bedrooms, bathrooms, or
                walk in closets, a fitness center or other desired amenities.
              </li>

              <li>
                Bidding on rental properties may be the right choice to ensure you find the perfect home.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
