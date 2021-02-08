import React from 'react';
import Picker, { ColorObject, themes } from 'react-pick-color';
import styled from 'styled-components';
import tinycolor, { Instance as ColorInstance } from 'tinycolor2';
import classNames from 'classnames';
import ColorSwatch from '../Samples/ColorSwatch';
import { Color } from '../../hooks/types';

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

  .picker-component,
  .picker-component * {
    box-sizing: unset;
  }
`;

const Title = styled.h1`
  margin: 1em 0 1em 0;
  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 42px;
  font-weight: bolder;
`;

const MainSwatch = styled(ColorSwatch)`
  margin: 1em 0 0 0;
  min-width: auto;
  flex: 1;
  width: 100%;
  padding: 20px;
  max-height: 6em;

  border-width: 1px;
  border-radius: 3px;
  border-style: solid;
  border-color: #222;

  &.isDark {
    border-color: #ededed;
  }
`;

interface ColorPickerProps {
  color: ColorInstance;
  setColor: (c: ColorInstance) => void;
}
const ColorPicker: React.FC<ColorPickerProps> = ({ color, setColor }) => {
  const updateColor = (color: ColorObject) => {
    const ci = tinycolor(color.rgb);
    ci.setAlpha(color.alpha);
    setColor(ci);
  };

  const c: Color = {
    value: color.toRgbString(),
    isDark: color.isDark(),
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
        onChange={updateColor}
        theme={themes.dark}
        className="picker-component"
      />
      <MainSwatch color={c} className={isDarkClass} alwaysVisible />
    </PickerBox>
  );
};

export default ColorPicker;
