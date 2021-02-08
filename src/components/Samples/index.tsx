import React from 'react';
import styled from 'styled-components';
import Combination from './Combination';
import { Instance as ColorInstance } from 'tinycolor2';
import useSchemes from '../../hooks/useSchemes';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 70%;
`;

interface SamplesProps {
  color: ColorInstance;
}

const Samples: React.FC<SamplesProps> = ({ color }) => {
  const combinations = useSchemes(color);

  return (
    <Wrapper>
      {combinations.map((comb, i) => (
        <Combination key={i} comb={comb} />
      ))}
    </Wrapper>
  );
};

export default Samples;
