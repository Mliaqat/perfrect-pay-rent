import React from "react";
import BuildingImage from "../../assets/images/ppr-bid platform.png";
import "./style.css";

export default function BidPlatForm() {
  return (
    <div className="container-2">
      <div className="rect-box" />
      <div className="inner-cont-c4">
        <div className="header-c7">
          <p className="title-1-c7">
            PerfectPayRent<span> Bid Platform</span>
          </p>
        </div>

        <div style={{ display: "flex", flex: 1 }}>
          <div className="inner-cont1-c7">
            <p style={{ fontSize: 18, fontWeight: "bold" }}>
              Property Description:{" "}
              <span style={{ color: "#2e3b45", fontWeight: 500 }}>
                35 Wood Terrace Circle, #100, Atlanta, Georgia, XXXXX
              </span>
            </p>

            <div style={styles.divider} />

            <p
              style={{
                textAlign: "justify",
                fontSize: 15,
                color: "#646868",
                lineHeight: 1.2,
              }}
            >
              PerfectPayRent welcomes you to the newest condominium
              accommodation in Atlanta, Georgia. Our property, located on 35
              Wood Terrace Circle, #100, Atlanta, Georgia offers one and
              two-bedroom executive suites featuring impressive finishes and
              spacious layouts. Nestled just minutes away from Georgia State
              University, our location is ideal for students and professionals
              alike. Situated in the heart of the Downtown core, PerfectPayRent
              provides easy access to every convenience and urban amenity.
              Whether you're looking for parks, trails, public transportation,
              dining options, shopping destinations, or entertainment venues,
              everything you need is just steps away at Wood Terrace Circle.
              Experience the perfect blend of comfort, convenience, and luxury
              living with PerfectPayRentin Atlanta.
            </p>

            <p
              style={{
                textAlign: "justify",
                fontSize: 15,
                color: "#646868",
                lineHeight: 1.2,
                marginTop: 15,
              }}
            >
              1531 Wood Terrace Cir boasts a Walk Score of 96 out of 100, making
              it a walker’s paradise where daily errands can be accomplished
              without a car. It's conveniently located just a one-minute walk
              from the Logan Ave transit and bus stop,serving the bus routes.
            </p>

            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: 15,
              }}
            >
              <div style={styles.scoreCard}>
                <p style={{ fontSize: 15, color: "#2e3b45" }}>Walk Score</p>
                <p style={{ fontSize: 15, color: "#2e3b45" }}>96/100</p>
              </div>

              <div style={styles.scoreCard}>
                <p style={{ fontSize: 15, color: "#2e3b45" }}>Transit Score</p>
                <p style={{ fontSize: 15, color: "#2e3b45" }}>96/100</p>
              </div>

              <div style={styles.scoreCard}>
                <p style={{ fontSize: 15, color: "#2e3b45" }}>Bike Score</p>
                <p style={{ fontSize: 15, color: "#2e3b45" }}>96/100</p>
              </div>
            </div>

            <div style={styles.divider} />

            <p
              style={{
                fontSize: 15,
                color: "#19abb5",
                fontWeight: 600,
                textAlign: "center",
              }}
            >
              Starting Bid: $2,000 |Suggested Market Rate Rent $2,500 | Secure
              Now (Max) Bid $2,700
            </p>

            <div style={styles.bidBox}>
              <div
                style={{
                  flex: 0.45,
                  backgroundColor: "#18abb5",
                  borderRadius: 10,
                  display: "flex",
                }}
              >
                <p
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#fff",
                    padding: 15,
                  }}
                >
                  Current Bid: $2,500
                </p>
              </div>
            </div>
          </div>
          <div className="inner-cont2-c7">
            <div style={{ border: "1px solid black", width: 350, right: 0 }}>
              <img src={BuildingImage} style={{ width: "100%" }} />

              <div style={{ padding: 15 }}>
                <p style={{ fontSize: 13, fontWeight: "bold", color: "#000" }}>
                  9.8*
                </p>
                <p style={styles.text1}>Wood Terrace Circle Condominium</p>

                <p style={{...styles.text1, fontWeight: 500}}>
                  35 Wood Terrace Circle, #100, Atlanta Georgia, 33333
                </p>
                <p style={{...styles.text1, fontWeight: 500}}>2 Bedroom, 2 Bathroom</p>

                <p style={styles.text1}>
                  Features:{" "}
                  <span style={{fontWeight: 500}}>
                    stainless steel appliances, walk-incloset, washer dryer,
                    HVAC, smart locks, parking available
                  </span>
                </p>
                <p style={styles.text1}>
                  Amenities:{" "}
                  <span style={{fontWeight: 500}}>
                    gym facility, pool, storage lockers, bike racks, mail room,
                    on site – property manager
                  </span>
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
