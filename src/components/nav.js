import React from "react";

export default function Nav(prop) {
  return (
    <div className={prop.clname}>
      <div>{prop.icon}</div>
      <div>
        <span>{prop.text}</span>
      </div>
    </div>
  );
}
