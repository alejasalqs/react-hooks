import React, { useState } from "react";
import "../02-useEffect/effects.css";
import { MultipleCustomHooks } from "../examples/MultipleCustomHooks";

export const RealExampleRef = () => {
  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real Example Ref</h1>
      <hr />

      {show && <MultipleCustomHooks />}
      <br />
      <button className="btn btn-primary mt-5" onClick={() => setShow(!show)}>
        Show quotes
      </button>
    </div>
  );
};
