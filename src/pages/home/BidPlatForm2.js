import React from "react";
import Footer from "../../assets/images/pre-construction.png";
import "./style.css";


export default function BidPlatForm2() {
  return (
    <div className="container-2">
      <div className="rect-box" />
      <div className="inner-cont-c4">
        <div className="header-c7">
          <p className="title-1-c7">
            PerfectPayRent<span> Bid Platform</span>
          </p>
        </div>

        <div style={{ paddingLeft: 50 }}>
          <p style={{ fontSize: 18, fontWeight: "bold" }}>
            Bidding Cap: SecureNow{" "}
            <span style={{ color: "#2e3b45", fontWeight: 500 }}>
              bid secures the rental forthe tenant and caps the highest bid
              amount
            </span>
          </p>

          <p style={{ fontSize: 18, fontWeight: "bold" }}>
            Bid Limits:{" "}
            <span style={{ color: "#2e3b45", fontWeight: 500 }}>
              Tenants can only actively bid on 3 rentals at any one time and
              cannot bid over the income threshold.
            </span>
          </p>
        </div>

        <div
          style={{
            flex: 1,
            display: "flex",
            paddingLeft: 50,
            paddingRight: 200,
            paddingTop: 25,
            paddingBottom: 25,
          }}
        >
          <div className="bid-platform-image">
            <img src={Footer} style={{ width: "100%" }} />
          </div>

          <div
            style={{
              backgroundColor: "#e5e5e5",
              flex: 0.4,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-around",
              padding: 40,
            }}
          >
            <div>
              <p style={{ fontSize: 16, color: "#2e3b45", fontWeight: 600 }}>
                Time Remaining:
              </p>
              <p style={{ fontSize: 16, color: "#2e3b45", fontWeight: 600 }}>
                2 Days 15.22.49 hours
              </p>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>
                <p style={{ fontSize: 16, color: "#2e3b45", fontWeight: 600 }}>
                  Current Bid:
                </p>
                <p style={{ fontSize: 16, color: "#2e3b45", fontWeight: 600 }}>
                  $2,500
                </p>
              </div>

              <div
                style={{ backgroundColor: "#18abb5", padding: 8, width: 120 }}
              >
                <p
                  style={{
                    fontSize: 16,
                    color: "#2e3b45",
                    fontWeight: 600,
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  Bid Now
                </p>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <p style={{ fontSize: 16, fontWeight: 600, color: "#2e3b45" }}>
                Secure Now Bid:
              </p>

              <div
                style={{ backgroundColor: "#18abb5", padding: 8, width: 120 }}
              >
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#fff",
                    textAlign: "center",
                  }}
                >
                  Secure Now
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const styles = {
  scoreCard: {
    backgroundColor: "#f1f1f1",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    width: 170,
    padding: 4,
  },
  divider: {
    width: "97%",
    height: 0.5,
    backgroundColor: "#000",
    marginTop: 15,
    marginBottom: 15,
  },
  bidBox: {
    width: "97%",
    display: "flex",
    height: 50,
    backgroundColor: "#f1f1f1",
    marginTop: 10,
    borderRadius: 10,
    overflow: "hidden",
    position: "relative",
  },
  text1: {
    fontSize: 13,
    fontWeight: "bold",
    color: "#000",
    letterSpacing: 1.2,
    marginTop: 15,
  },
};
