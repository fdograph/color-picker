import { useMemo } from 'react';
import tinycolor, { ColorInput, Instance as TCInstance } from 'tinycolor2';

export interface Color {
  value: string;
  isDark: boolean;
}

export interface ColorCombs {
  [s: string]: Color[];
  analogous: Color[];
  monochromatic: Color[];
  splitComplement: Color[];
  tetrad: Color[];
  triad: Color[];
}

const processCombination = (comb: TCInstance[], alpha: number): Color[] => {
  comb.shift();
  return comb.map((ci) => ({
    value: ci.setAlpha(alpha).toRgbString(),
    isDark: ci.isDark(),
  }));
};

export const getColorCombination = (c: ColorInput): ColorCombs => {
  const col = tinycolor(c);
  const alpha = col.getAlpha();
  return {
    triad: processCombination(col.triad(), alpha),
    analogous: processCombination(col.analogous(), alpha),
    tetrad: processCombination(col.tetrad(), alpha),
    monochromatic: processCombination(col.monochromatic(), alpha),
    splitComplement: processCombination(col.splitcomplement(), alpha),
  };
};

const useCombinations = (color: ColorInput): ColorCombs => {
  return useMemo(() => getColorCombination(color), [color]);
};

export default useCombinations;
