import React from "react";

export default function Delete({ onClick }) {
  return (
    <div className="delete">
      <h2 className="delete__title">Test FakeApi Delete</h2>
      <button className="delete__button" onClick={onClick}>
        delete
      </button>
    </div>
  );
}
