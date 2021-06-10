import { extendTheme } from "@chakra-ui/react";
import styles from "./styles";
import colors from "./foundations/colors";
import fontSizes from "./foundations/fontSizes";
import { createBreakpoints } from "@chakra-ui/theme-tools"

const breakpoints = createBreakpoints({
  sm: "320px",
  md: "767px",
  lg: "1024px",
  xl: "1200px",
})

/**
 * This file is generated for providing a custom theme to Chakra UI
 *
 * To learn more about custom themes
 * please visit https://chakra-ui.com/docs/getting-started#add-custom-theme-optional
 */

const overrides = {
  ...styles,
  colors,
  fontSizes,
  fonts: {
    heading: "Quicksand:700",
    body: "Quicksand"
  },
  breakpoints
};

const theme = extendTheme(overrides);

export default theme;
