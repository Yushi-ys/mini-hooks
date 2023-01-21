import React from "react";
import useToggle from "../hooks/useToggle";

const Index: React.FC = () => {
  const [state, { toggle, setLeft, setRight }] = useToggle("hello", "world");

  return (
    <div>
      <p>Effects：{`${state}`}</p>
      <p>
        <button type="button" onClick={toggle}>
          Toggle
        </button>
        <button type="button" onClick={setLeft} style={{ margin: "0 8px" }}>
          Toggle left
        </button>
        <button type="button" onClick={setRight}>
          Toggle right
        </button>
      </p>
    </div>
  );
};

export default Index;
