import React from "react";

const example = () => {
  const list1 = [
    { id: "1", name: "mubarak", department: "MCA" },
    { id: "2", name: "mubarak", department: "MCA" },
    { id: "3", name: "mubarak", department: "MCA" },
  ];
  return (
    <>
      <form>
        <label for="name">Name</label>
        <input type="text" name="name" />
      </form>
    </>
  );
};

export default example;
