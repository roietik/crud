import React from "react";

export default function Update({ onClick }) {
  return (
    <div className="update">
      <h2 className="update__title">Test FakeApi Update</h2>
      <button className="update__button" onClick={onClick}>
        update
      </button>
    </div>
  );
}
