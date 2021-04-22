import { css } from "styled-components";
import theme from "./Themes";

export const breakpoint = Object.keys(theme.breakpoints).reduce(
  (accumulator, label) => {
    accumulator[label] = (strings, ...args) => css`
      @media (min-width: ${theme.breakpoints[label]}) {
        ${css(strings, ...args)};
      }
    `;
    return accumulator;
  },
  {}
);
