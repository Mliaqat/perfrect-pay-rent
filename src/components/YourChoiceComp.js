import React from "react";

export default function YourChoiceComp({ title, subtitle, icon }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        width: 300,
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: 90,
          width: 90,
          borderRadius: 45,
          backgroundColor: "#dbeef4",
        }}
      >
        {icon}
      </div>

      <p
        style={{
          fontSize: 16,
          color: "#000",
          fontWeight: 700,
          marginTop: 15,
          textAlign: "center",
        }}
      >
        {title}
      </p>
      <p style={{ fontSize: 16, color: "#848888", textAlign: "center" }}>
        {subtitle}
      </p>
    </div>
  );
}
