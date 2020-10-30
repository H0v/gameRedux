import "./App.css";
import BtnContainer from "./components/BtnContainer";
import WonContainer from "./components/WonContainer";
import { connect } from "react-redux";
import { setFinished, setSteps, setRestart } from "./redux/actions";

function App({ finished, setFinished, steps, setSteps, setRestart }) {
  const handleSetFinished = () => {
    setFinished(true);
  };

  const increseSteps = () => {
    setSteps(steps + 1);
  };

  return (
    <div className="App">
      {finished ? (
        <WonContainer steps={steps} handlePlayAgain={setRestart} />
      ) : (
        <BtnContainer
          steps={steps}
          setSteps={() => increseSteps()}
          setFinished={() => handleSetFinished()}
        />
      )}
    </div>
  );
}

const mapStateToProp = (state) => {
  return {
    finished: state.main.finished,
    steps: state.main.steps,
  };
};

const mapDispatchToProps = {
  setFinished,
  setSteps,
  setRestart,
};

export default connect(mapStateToProp, mapDispatchToProps)(App);
