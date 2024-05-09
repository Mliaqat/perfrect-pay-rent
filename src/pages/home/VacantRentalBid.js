import React from "react";

import "./style.css";

export default function VacantRentalBid() {
  return (
    <div className="container-2">
      <div className="rect-box" />
      <div className="inner-cont-c3">
        <div style={{ width: "45%", display: "flex", flexDirection: "column" }}>
          <p className="title-1">
            Vacant Rental <span>Bid</span>
          </p>

          <div className="image-vacant-rental" />
        </div>
        <div className="inner-cont2-c3" style={{display: 'flex', alignItems: 'center'}}>
          <ul>
            <li>
              Secure the perfect rental property that suits your timeline and
              lifestyle
            </li>

            <li>
              Choose the neighborhood you love and relish the instant approval
              when your bid issecured.
            </li>

            <li>
              Bid on a rental property tailored to your financial and living
              needs, from bedrooms and bathrooms to kitchens, and your
              transportation needs.
            </li>

            <li>
              Gain the advantage by bidding on rentals that match your criteria
              and preferences.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
