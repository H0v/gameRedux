import React from "react";

export default function WonContainer({ steps, setSteps, setFinished }) {
  return (
    <>
      <h1 className="you-won">You Won ! </h1>
      <h2 className="you-won">TOTAL STEPS: {steps}</h2>
      <button
        className="again"
        onClick={() => {
          setSteps(0);
          setFinished(false);
        }}
      >
        Play Again
      </button>
    </>
  );
}
