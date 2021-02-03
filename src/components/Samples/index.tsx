import React from 'react';
import styled from 'styled-components';
import useCombinations, { Color } from '../../hooks/useCombinations';
import Combination from './Combination';
import { ColorInput } from 'tinycolor2';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  //height: 100%;
  min-width: 70%;
`;

interface SamplesProps {
  color: ColorInput;
}

const Samples: React.FC<SamplesProps> = ({ color }) => {
  const combinations = useCombinations(color);

  return (
    <Wrapper>
      {Object.values<Color[]>(combinations).map((comb, i) => (
        <Combination key={i} comb={comb} />
      ))}
    </Wrapper>
  );
};

export default Samples;
