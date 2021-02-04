import React from 'react';
import Picker, { themes } from 'react-pick-color';
import styled from 'styled-components';
import tinycolor, { ColorInput } from 'tinycolor2';
import classNames from 'classnames';
import ColorSwatch from '../Samples/ColorSwatch';
import { Color } from '../../hooks/useCombinations';

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

// const ColorText = styled.p`
//   margin: 1em 0 0 0;
//   text-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
//   text-align: center;
//   font-size: 28px;
//   font-weight: 700;
// `;

const MainSwatch = styled(ColorSwatch)`
  margin: 1em 0 0 0;
  min-width: auto;
  flex: 0;
  width: 100%;
  padding: 20px;

  border-width: 1px;
  border-radius: 3px;
  border-style: solid;
  border-color: #222;
  &.isDark {
    border-color: #ededed;
  }

  .helper-text {
    opacity: 1;
  }
`;

interface ColorPickerProps {
  color: ColorInput;
  setColor: (c: ColorInput) => void;
}
const ColorPicker: React.FC<ColorPickerProps> = ({ color, setColor }) => {
  const colorInstance = tinycolor(color);
  const c: Color = {
    value: colorInstance.toRgbString(),
    isDark: colorInstance.isDark(),
  };

  const isDarkClass = classNames({ isDark: c.isDark });

  return (
    <PickerBox style={{ backgroundColor: c.value }} className={isDarkClass}>
      <Title>
        Pick a color!
        <br />
        Any color!
      </Title>
      <Picker
        color={c.value}
        onChange={(color) => {
          setColor(color.rgb);
        }}
        theme={themes.dark}
      />
      <MainSwatch color={c} className={isDarkClass} />
    </PickerBox>
  );
};

export default ColorPicker;
