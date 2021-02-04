import React, { useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Color } from '../../hooks/useCombinations';

const Swatch = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  cursor: pointer;
  padding: 15px;
  //aspect-ratio: 1 / 1;
  //height: 120px;
  min-width: 90px;
  box-shadow: 0 0 0 rgba(0, 0, 0, 1);
  transition: all 150ms ease;

  color: #333;
  &.isDark {
    color: #ededed;
  }

  &:hover {
    z-index: 2;
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.3);
  }

  .helper-text {
    opacity: 0;
    height: 0;
    display: flex;
    align-items: center;

    overflow: hidden;
    transition: all 150ms ease;
  }

  &:hover .helper-text,
  &.alwaysVisible .helper-text {
    opacity: 1;
    height: 1.8em;
  }

  @media (pointer: coarse) {
    .helper-text {
      opacity: 1;
      height: 1.8em;
    }
  }
`;

const Text = styled.p`
  margin: 0;
  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 14px;
  font-weight: 500;
`;

const Helper = styled.p`
  margin: 0;
  text-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  font-size: 10px;
`;

const ColorSwatch: React.FC<{
  color: Color;
  className?: string;
  alwaysVisible?: boolean;
}> = ({ color, className, alwaysVisible }) => {
  const [isCopied, setIsCopied] = useState<boolean>(false);
  const helperText = isCopied ? 'Copied!' : 'Tap to copy';

  return (
    <CopyToClipboard text={color.value} onCopy={() => setIsCopied(true)}>
      <Swatch
        className={classNames(
          { isDark: color.isDark, alwaysVisible },
          className
        )}
        style={{ backgroundColor: color.value }}
      >
        <Text>{color.value}</Text>
        <Helper className="helper-text">{helperText}</Helper>
      </Swatch>
    </CopyToClipboard>
  );
};

export default ColorSwatch;
