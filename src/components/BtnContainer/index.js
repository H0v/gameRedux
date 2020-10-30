import React, { useState, useEffect } from "react";
import Btn from "../Btn";
import { copyArray, generateRenderData } from "../../helpers";
import Steps from "../Steps";
import SelectedBtn from "../selectedBtn";
import { connect } from "react-redux";
import {
  setColors,
  setMax,
  setPrevColors,
  setPrevSelected,
  setSelectedColor,
} from "../../redux/actions";

function BtnContainer({
  setFinished,
  steps,
  setSteps,
  colors,
  setColors,
  setMax,
  setPrevColors,
  setPrevSelected,
  setSelectedColor,
  prevSelected,
  selectedColor,
  MAX_COUNT,
  prevColors,
}) {
  useEffect(() => {
    const getData = async () => {
      const response = await fetch("data.json");
      const data = await response.json();
      setMax(data.maxCount);
      setColors(data.colors);
      setPrevColors(data.colors);
    };
    getData();
  }, []);

  useEffect(() => {
    if (prevSelected !== selectedColor) {
      let status = true;
      colors.forEach((colors) => {
        if (colors.length) {
          if (colors.length === MAX_COUNT) {
            const uniqueObj = new Set();
            colors.forEach((color) => uniqueObj.add(color));
            if (uniqueObj.size !== 1) status = false;
            return;
          }

          status = false;
        }
      });

      if (status) {
        setFinished();
      }
    }
  }, [selectedColor, colors]);

  const handleClick = (index) => {
    const newColors = copyArray(colors);
    const clickedColorsArray = newColors[index];
    const clickedColor = clickedColorsArray[clickedColorsArray.length - 1];

    if (!selectedColor) {
      clickedColorsArray.pop();

      setSelectedColor(clickedColor);
      setPrevColors(colors);
      setColors(newColors);
      setSteps();

      return;
    }

    if (
      clickedColorsArray.length < MAX_COUNT &&
      (!clickedColor || selectedColor === clickedColor)
    ) {
      clickedColorsArray.push(selectedColor);
      setPrevSelected(selectedColor);

      setSelectedColor("");
      setPrevColors(colors);
      setColors(newColors);
    }
  };

  const undo = () => {
    if (selectedColor) {
      setSelectedColor("");
      setColors(prevColors);
      setSteps();
    }
  };

  const printColors = generateRenderData(colors, MAX_COUNT);

  return (
    <>
      <Steps steps={steps} />

      <SelectedBtn undo={undo} selectedColor={selectedColor} />

      <div className="game-container">
        {printColors.map((col, i) => (
          <div key={i} className="btn-container" onClick={() => handleClick(i)}>
            {col.map((color, j) => (
              <Btn key={j} color={color} />
            ))}
          </div>
        ))}
      </div>
    </>
  );
}

const mapStateToProp = (state) => {
  return {
    colors: state.controls.colors,
    MAX_COUNT: state.controls.MAX_COUNT,
    selectedColor: state.controls.selectedColor,
    prevColors: state.controls.prevColors,
    prevSelected: state.controls.prevSelected,
  };
};

const mapDispatchToProps = {
  setColors,
  setMax,
  setPrevColors,
  setPrevSelected,
  setSelectedColor,
};

export default connect(mapStateToProp, mapDispatchToProps)(BtnContainer);
