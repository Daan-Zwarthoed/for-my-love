import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

import { COLORS } from "./consts/colors-consts";
import { SIZES } from "./consts/sizing-consts";
import { HEADING_STYLES } from "./styles/heading-styles";
import { INDICES } from "./consts/index-consts";
import { TEXT_SIZES } from "./consts/text-size-consts";
import { BUTTON_STYLES } from "./styles/button-styles";

export const customTheme = extendTheme(
  withDefaultColorScheme({ colorScheme: "blue" }),
  {
    // GLOBAL STYLINGS
    styles: {
      global: {
        body: {
          backgroundColor: "background",
        },
      },
    },

    // THEME CONSTANTS
    sizes: SIZES,
    zIndices: INDICES,
    textStyles: TEXT_SIZES,
    fonts: {
      heading: "Parisienne",
      body: "Charm",
    },
    shadows: {
      default: "0px 0px 8px 0px rgba(44, 59, 69, 0.20)",
    },
    colors: COLORS,
    radii: {
      standard: "4px",
    },

    // COMPONENT STYLING
    components: {
      Text: {
        defaultProps: {
          fontWeight: "20px",
        },
      },

      // VARIANTS OR SIZES
      Heading: HEADING_STYLES,
      Button: BUTTON_STYLES,
    },
  }
);
