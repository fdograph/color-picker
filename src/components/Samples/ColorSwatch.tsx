import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Color } from '../../hooks/types';

const Swatch = styled.button`
  -webkit-appareance: none;
  appareance: none;
  border: none;
  margin: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
  cursor: pointer;
  padding: 0 14px;
  min-height: 8em;
  box-shadow: 0 0 0 rgba(0, 0, 0, 1);
  transition: all 150ms ease;
  min-width: 110px;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    outline-offset: -1px;
  }

  &:focus {
    outline: 1px dashed #333;
    outline-offset: -2px;

    &::before {
      outline: 1px dashed #ededed;
    }
  }

  color: #333;
  &.isDark {
    color: #ededed;

    &:focus {
      outline-color: #ededed;

      &::before {
        outline: 1px dashed #333;
      }
    }
  }

  &:hover,
  &:focus {
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
  &:focus .helper-text,
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
  font-size: 12px;
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

  useEffect(() => {
    if (isCopied) {
      setTimeout(() => setIsCopied(false), 3000);
    }
  }, [isCopied]);

  return (
    <CopyToClipboard text={color.value} onCopy={() => setIsCopied(true)}>
      <Swatch
        className={classNames(
          {
            isDark: color.isDark,
            alwaysVisible: !!alwaysVisible,
          },
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
