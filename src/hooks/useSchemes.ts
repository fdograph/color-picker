import { useMemo } from 'react';
import tinycolor, { Instance as ColorInstance } from 'tinycolor2';
import { Color } from './types';

const processCombination = (comb: ColorInstance[], alpha: number): Color[] => {
  return comb.map((ci) => ({
    value: ci.clone().setAlpha(alpha).toRgbString(),
    isDark: ci.isDark(),
  }));
};

const darkSet = (color: ColorInstance, baseAlpha: number): Color[] => {
  return processCombination(
    [
      color.clone().darken(25),
      color.clone().darken(20),
      color.clone().darken(10),
    ],
    baseAlpha
  );
};

const lightSet = (color: ColorInstance, baseAlpha: number): Color[] => {
  return processCombination(
    [
      color.clone().lighten(10),
      color.clone().lighten(20),
      color.clone().lighten(25),
    ],
    baseAlpha
  );
};

const scheme = (color: ColorInstance, baseAlpha: number): Color[] => [
  ...darkSet(color, baseAlpha),
  ...lightSet(color, baseAlpha),
];

const schemize = (com: ColorInstance[], baseAlpha: number): Color[][] => {
  return com.filter((v, i) => !!i).map((c) => scheme(c, baseAlpha));
};

const generateSchemes = (color: ColorInstance) => {
  const baseColor = tinycolor(color);
  const alpha = baseColor.getAlpha();

  const mono = scheme(baseColor, alpha);
  const triad = schemize(baseColor.triad(), alpha);
  const tetrad = schemize(baseColor.tetrad(), alpha);
  const analogous = schemize(baseColor.analogous(), alpha);
  const splitComplement = schemize(baseColor.splitcomplement(), alpha);

  return [mono, ...analogous, ...splitComplement, ...triad, ...tetrad];
};

const useSchemes = (color: ColorInstance): Color[][] => {
  return useMemo(() => generateSchemes(color), [color]);
};

export default useSchemes;
