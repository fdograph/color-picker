import React, { useState } from 'react';
import ColorPicker from '../components/ColorPicker';
import styled from 'styled-components';
import Samples from '../components/Samples';
import { ColorInput } from 'tinycolor2';

const Layout = styled.div`
  display: flex;
  flex-wrap: wrap;
  min-height: 100vh;
  align-items: stretch;
`;

const App: React.FC = () => {
  const [color, setColor] = useState<ColorInput>('rgb(255, 70, 135)');

  return (
    <Layout>
      <ColorPicker color={color} setColor={setColor} />
      <Samples color={color} />
    </Layout>
  );
};

export default App;
