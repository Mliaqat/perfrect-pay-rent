import React from "react";

import "./style.css";

export default function Tenants() {
  return (
    <div className="container-2">
      <div className="rect-box" />
      <div className="inner-cont-c3">
        <div style={{ width: "45%", display: "flex", flexDirection: "column" }}>
          <p className="title-1">PerfectPayRent</p>

          <div className="image-tenants" />
        </div>
        <div className="inner-cont2-c3">
          <ul>
            <li>
              Tenants have the opportunity to bid on pre-construction rental
              properties during the construction phase, up to 12 months before
              occupancy, or bid on vacant rental properties available for
              immediate possession.
            </li>

            <li>
              Tenants are equipped with market information for each rental
              property to make informed bidding decisions. Bids are capped,
              ensuring that Tenants cannot bid rent above 45% of their gross
              income.
            </li>

            <li>
              To participate, Tenants mustsign up and undergo pre-approval
              before placing bids. PerfectPayRentBid is committed to barrierfree
              rent profiles, eliminating the need for landlord meetings, profile
              pictures, gender disclosure, and race disclosure.
            </li>

            <li>
              PerfectPayRentBid Landlord leases come with no security deposit
              requirements, providing convenience for both tenants and
              landlords.
            </li>

            <li>
              Landlord’s eviction expenses and legal expenses, are reimbursed by
              PerfectPayRent LLC.
            </li>

            <li>
              PerfectPayRent offers groundbreaking services and rent assistance
              options at no cost, including renters' insurance, loss of income
              assistance, rent deferral assistance, rent advance assistance, and
              credit-building support assistance.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
