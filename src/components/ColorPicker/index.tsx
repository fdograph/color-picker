import React from "react";
import Picker, { themes } from "react-pick-color";
import styled from "styled-components";
import tinycolor, { ColorInput } from "tinycolor2";
import classNames from "classnames";

const PickerBox = styled.div`
  padding: 15px;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  z-index: 1;
  box-shadow: 0 0 3em rgba(0, 0, 0, 0.2);

  color: #222;
  &.isDark {
    color: #ededed;
  }
`;

const Title = styled.h1`
  margin: 1em 0 1em 0;
  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 42px;
  font-weight: bolder;
`;

const ColorText = styled.p`
  margin: 1em 0 0 0;
  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 28px;
  font-weight: 700;
`;

interface ColorPickerProps {
  color: ColorInput;
  setColor: (c: ColorInput) => void;
}
const ColorPicker: React.FC<ColorPickerProps> = ({ color, setColor }) => {
  const colorInstance = tinycolor(color);
  const colorString = colorInstance.toRgbString();
  const isDark = colorInstance.isDark();

  return (
    <PickerBox
      style={{ backgroundColor: colorString }}
      className={classNames({ isDark })}
    >
      <Title>
        Pick a color!
        <br />
        Any color!
      </Title>
      <Picker
        color={colorString}
        onChange={(color) => {
          setColor(color.rgb);
        }}
        theme={themes.dark}
      />
      <ColorText>{colorString}</ColorText>
    </PickerBox>
  );
};

export default ColorPicker;
