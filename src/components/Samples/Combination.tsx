import React from 'react';
import styled from 'styled-components';
import ColorSwatch from './ColorSwatch';
import { Color } from '../../hooks/useCombinations';

interface CombinationProps {
  comb: Color[];
}

const Wrapper = styled.div`
  display: flex;
  flex: 1;
  flex-wrap: wrap;
`;

const Combination: React.FC<CombinationProps> = ({ comb }) => {
  return (
    <Wrapper>
      {comb.map((c, i) => (
        <ColorSwatch key={`${i}-${c}`} color={c} />
      ))}
    </Wrapper>
  );
};

export default Combination;
