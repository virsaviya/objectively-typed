import React from 'react';

// here are some color codes for inspiration
// https://www.quackit.com/css/css_color_codes.cfm

const VIEW = 500;
const NUMBER_OF_SQUARES = 54; // play with me
const STROKE_COLORS = {
  // play with me
  outerColor: {
    red: 160,
    green: 207,
    blue: 255,
  },
  innerColor: {
    red: 212,
    green: 232,
    blue: 233,
  },
};
const FILL_COLORS = {
  // play with me
  outerColor: {
    red: 44,
    green: 160,
    blue: 249,
  },
  innerColor: {
    red: 136,
    green: 191,
    blue: 251,
  },
};

const Logo = () => {
  const getColor = (start, end, frequency) => {
    const difference = end - start;
    const interval = difference / NUMBER_OF_SQUARES;
    const currentValue = start + Math.round(interval * frequency);
    return currentValue;
  };

  const getRgb = (colors, frequency) => {
    const { outerColor, innerColor } = colors;
    const red = getColor(outerColor.red, innerColor.red, frequency);
    const green = getColor(outerColor.green, innerColor.green, frequency);
    const blue = getColor(outerColor.blue, innerColor.blue, frequency);
    return `rgb(${red}, ${green}, ${blue})`;
  };

  let angle = -3; // play with me
  let size = 300; // play with me
  const emptyArray = [...Array(NUMBER_OF_SQUARES)];
  const squares = emptyArray.map((_, idx) => {
    const topLeft = (VIEW - size) / 2;
    const fill = getRgb(FILL_COLORS, idx);
    const stroke = getRgb(STROKE_COLORS, idx);
    const key = `rect_${idx}`;

    angle += 3; // play with me
    size -= 5; // play with me

    return (
      <rect
        key={key}
        x={topLeft}
        y={topLeft}
        height={size}
        width={size}
        fill={fill}
        stroke={stroke}
        rx="15"
        transform={`rotate(${angle} ${topLeft + size / 2} ${topLeft +
          size / 2} )`}
      />
    );
  });

  return (
    <svg viewBox={`${0} ${0} ${VIEW} ${VIEW}`} width={VIEW} height={VIEW}>
      {squares}
    </svg>
  );
};

export default Logo;
