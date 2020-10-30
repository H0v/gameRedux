import React from "react";

export default function WonContainer({ steps, handlePlayAgain }) {
  return (
    <>
      <h1 className="you-won">You Won ! </h1>
      <h2 className="you-won">TOTAL STEPS: {steps}</h2>
      <button
        className="again"
        onClick={() => handlePlayAgain({ finished: false, steps: 0 })}
      >
        Play Again
      </button>
    </>
  );
}
