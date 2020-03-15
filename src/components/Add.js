import React from "react";

export default function Add({ onClick }) {
  return (
    <div className="add">
      <h2 className="add__title">Test FakeApi Add</h2>
      <button className="add__button" onClick={onClick}>
        add
      </button>
    </div>
  );
}
