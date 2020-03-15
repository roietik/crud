import React from "react";

export default function Employee({
  employee: {
    id,
    employee_name: name,
    employee_salary: salary,
    employee_age: age
  },
  onClick
}) {
  return (
    <div key={id} className="employee" onClick={onClick}>
      <p>ID: {id}</p>
      <h2>{name}</h2>
      <p>$ {salary}</p>
      <p>{age} age</p>
    </div>
  );
}
