import { DISABLED_OPACITY } from "../consts/other-consts";

const BASE_BUTTON_STYLING = {
  h: "button",
  px: "16px",
  fontWeight: "600",
  rounded: "standard",
  overflow: "hidden",
  border: "1px solid",
};

export const BUTTON_STYLES = {
  baseStyle: BASE_BUTTON_STYLING,
  variants: {
    primary: {
      ...BASE_BUTTON_STYLING,
      bg: "primary",
      color: "white",
      borderColor: "white",

      _hover: {
        bg: "transparent",
      },
    },
    secondary: {
      ...BASE_BUTTON_STYLING,
      bg: "background",
    },
  },
};
