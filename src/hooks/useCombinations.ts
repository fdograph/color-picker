import { useMemo } from 'react';
import tinycolor, { ColorInput, Instance as TCInstance } from 'tinycolor2';
import { Color } from './types';

const processCombination = (comb: TCInstance[], alpha: number): Color[] => {
  comb.shift();
  return comb.map((ci) => ({
    value: ci.setAlpha(alpha).toRgbString(),
    isDark: ci.isDark(),
  }));
};

export const getColorCombination = (c: ColorInput): Color[][] => {
  const col = tinycolor(c);
  const alpha = col.getAlpha();
  return [
    processCombination(col.triad(), alpha),
    processCombination(col.analogous(), alpha),
    processCombination(col.tetrad(), alpha),
    processCombination(col.monochromatic(), alpha),
    processCombination(col.splitcomplement(), alpha),
  ];
};

const useCombinations = (color: ColorInput): Color[][] => {
  return useMemo(() => getColorCombination(color), [color]);
};

export default useCombinations;
