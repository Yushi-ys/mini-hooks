import React from "react";
import useSetState from "../hooks/useSetState";

interface State {
  hello: string;
  count: number;
  [key: string]: any;
}

const Index: React.FC = () => {
  const [state, setState] = useSetState<State>({
    hello: "",
    count: 0,
  });

  return (
    <div>
      <pre>{JSON.stringify(state, null, 2)}</pre>
      <p>
        <button type="button" onClick={() => setState({ hello: "world" })}>
          set hello
        </button>
        <button
          type="button"
          onClick={() => setState({ foo: "bar" })}
          style={{ margin: "0 8px" }}
        >
          set foo
        </button>
        <button
          type="button"
          onClick={() => setState((prev) => ({ count: prev.count + 1 }))}
        >
          count + 1
        </button>
      </p>
    </div>
  );
};

export default Index;
