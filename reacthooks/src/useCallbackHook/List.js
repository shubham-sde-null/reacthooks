import React, { useState, useEffect } from "react";

function List({ getItems }) {
  const [list, setList] = useState([]);
  useEffect(() => {
    setList(getItems());
    console.log("updating items");
  }, [getItems]);

  return (
    <div style={{ fontSize: "1.5rem" }}>
      {list.map((item) => (
        <div>{item}</div>
      ))}
    </div>
  );
}

export default List;
