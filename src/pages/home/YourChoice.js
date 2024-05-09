import React from "react";

import "./style.css";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import YourChoiceComp from "../../components/YourChoiceComp";
import SearchIcon from '@mui/icons-material/Search';
import MarkunreadIcon from '@mui/icons-material/Markunread';

export default function YourChoice() {
  return (
    <div className="container-2">
      <div className="inner-cont-c4">
        <div className="header-c6">
          <p className="title-1-c5">
            <span>Your Choice - Your </span>PerfectPayRent
            <span> Bid - You Home!</span>
          </p>
        </div>

        <div
          style={{
            flex: 1,
            display: 'flex',
            paddingRight: 150,
            paddingLeft: 150,
            flexWrap: "wrap",
            gap: 20,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: -40
          }}
        >
          <YourChoiceComp
            title={"Register to Bid"}
            subtitle={
              "Complete the PerfectPayRentBid application to qualify for bidding."
            }
            icon={
              <FormatListBulletedIcon sx={{ fontSize: 45, color: "#31859c" }} />
            }
          />

          <YourChoiceComp
            title={"Find Your PerfectPayRent Home"}
            subtitle={
              "Search through our pre-construction and move-in-ready, and vacant rental listings."
            }
            icon={
              <SearchIcon sx={{ fontSize: 45, color: "#31859c" }} />
            }
          />

          <YourChoiceComp
            title={"Instant Notifications"}
            subtitle={
              "Keep track of bidding status and never miss an update on properties."
            }
            icon={
              <MarkunreadIcon sx={{ fontSize: 45, color: "#31859c" }} />
            }
          />

          <YourChoiceComp
            title={"Make a PerfectPayRentBid"}
            subtitle={
              "Set your own price, make a bid, or choose Secure Now, and it’s your new home."
            }
            icon={
              <FormatListBulletedIcon sx={{ fontSize: 45, color: "#31859c" }} />
            }
          />

          <YourChoiceComp
            title={"Digital Rental Agreement "}
            subtitle={
              "Execute your rental agreement set up your rent payment account, get move-in date."
            }
            icon={
              <FormatListBulletedIcon sx={{ fontSize: 45, color: "#31859c" }} />
            }
          />

          <YourChoiceComp
            title={"PerfectPayRentBid Services"}
            subtitle={
              "We provide services, support and rent assistance, when you need it."
            }
            icon={
              <FormatListBulletedIcon sx={{ fontSize: 45, color: "#31859c" }} />
            }
          />
        </div>
      </div>
    </div>
  );
}
