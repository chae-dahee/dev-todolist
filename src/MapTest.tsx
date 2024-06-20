import React from "react";

const MapTest = () => {
  const fruits = ["apple", "orange", "banana"];
  return (
    <div>
      <h2>과일</h2>
      <ul>
        {fruits.map((val, idx) => (
          <li key={idx}>{val}</li>
        ))}
      </ul>
    </div>
  );
};

export default MapTest;
