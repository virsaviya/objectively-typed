import React from 'react';

// here are some color codes for inspiration
// https://www.quackit.com/css/css_color_codes.cfm

const VIEW = 500;
const NUMBER_OF_SQUARES = 40; // play with me

const Logo = () => {
  let angle = -3; // play with me
  let size = 200; // play with me
  let red = 50; // play with me
  let green = 150; // play with me
  let blue = 200; // play with me

  const emptyArray = [...Array(NUMBER_OF_SQUARES)];
  const squares = emptyArray.map(() => {
    angle += 3; // play with me
    size -= 5; // play with me
    red += 3; // play with me
    green += 2; // play with me
    blue += 6; // play with me
    const color = `rgb(${red}, ${green}, ${blue})`;
    const topLeft = (VIEW - size) / 2;
    return (
      <rect
        x={topLeft}
        y={topLeft}
        height={size}
        width={size}
        fill={color}
        stroke="midnightblue" // play with me
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
