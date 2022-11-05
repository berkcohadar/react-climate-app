import React from "react";

export default function Body({ title, children }) {
  return (
    <div className="main-body">
      <div className="main-body-title">
        <span>{title}</span>
        <span>-</span>
        <span className="select-field">Albany</span>
      </div>
      {children}
    </div>
  );
}
