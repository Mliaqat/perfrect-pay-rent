import React from "react";

import "./style.css";

export default function TenantService() {
  return (
    <div className="container-2">
      <div className="rect-box" />
      <div className="inner-cont-c4">
        <div className="header-c4">
          <p className="title-1-c4">
            PerfectPayRent<span> Tenant Services</span>
          </p>
          <p className="subtitle-c4">
            (we provide a lease guarantee to your landlord, and provide you with
            services that benefit you, and provide you a safety net)
          </p>
        </div>

        <div style={{ display: "flex", flex: 1 }}>
          <div
            style={{ width: "45%", display: "flex", flexDirection: "column" }}
          >
            <div className="image-tenants-service" />
          </div>
          <div className="inner-cont2-c4">
            <div className="tenant-service">
              <div style={{ padding: 6, marginRight: 10 }}>•</div>
              <p>
                Cashless Security Deposit:{" "}
                <span>
                  We guarantee your lease to your landlord, so you do not need
                  to pay a security deposit.
                </span>
              </p>
            </div>

            <div className="tenant-service">
              <div style={{ padding: 6, marginRight: 10 }}>•</div>
              <p>
                Rent Advance Assistance:{" "}
                <span>
                  If you have a cash flow problem, we will pay your rent that
                  month, and you can pay us back within 3- months!
                </span>
              </p>
            </div>

            <div className="tenant-service">
              <div style={{ padding: 6, marginRight: 10 }}>•</div>
              <p>
                Loss of Income Assistance:{" "}
                <span>
                  If you lose your income, we will pay your rent for up to
                  3-months, and you do not have to pay us back!
                </span>
              </p>
            </div>

            <div className="tenant-service">
              <div style={{ padding: 6, marginRight: 10 }}>•</div>
              <p>
                Tenant Insurance:{" "}
                <span>
                  We have you covered for contents and liability in our group
                  Tenant Legal Liability Insurance at no cost.
                </span>
              </p>
            </div>

            <div className="tenant-service">
              <div style={{ padding: 6, marginRight: 10 }}>•</div>
              <p>
                Rent Deferral Assistance:{" "}
                <span>
                  If you need a little time to pay your rent, we will pay your
                  rent for up to 3-weeks without late fees!
                </span>
              </p>
            </div>

            <div className="tenant-service">
              <div style={{ padding: 6, marginRight: 10 }}>•</div>
              <p>
                Credit Building Support:{" "}
                <span>
                  We will help you build your credit score and report your rent
                  payments to major credit reporting agencies.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
