export const SMALL_BUTTON_HEIGHT = 10; // Used for sidebar and profile buttons
const SMALL_BUTTON_HEIGHT_PX = SMALL_BUTTON_HEIGHT * 4; // You can get chakra px sizes by doing times 4

// Used in the sidebar itself and in the placing of the central grid
export const SIDEBAR_PADDING_PX = 5;
export const SIDEBAR_CLOSED_PX = SMALL_BUTTON_HEIGHT_PX + SIDEBAR_PADDING_PX * 2;
export const SIDEBAR_OPEN_PX = 240;

const CELL_WIDTH_REM = 23;
export const SIZES = {
  button: "48px",
  small_button: SMALL_BUTTON_HEIGHT_PX + "px",

  table_cell_xxxs: CELL_WIDTH_REM / 6 + "rem",
  table_cell_xxs: CELL_WIDTH_REM / 4 + "rem",
  table_cell_xs: CELL_WIDTH_REM / 2 + "rem",
  table_cell_sm: CELL_WIDTH_REM / 1.5 + "rem",
  table_cell: CELL_WIDTH_REM + "rem",
  table_cell_l: CELL_WIDTH_REM * 1.5 + "rem",
  table_cell_xl: CELL_WIDTH_REM * 2 + "rem",
  table_cell_xxl: CELL_WIDTH_REM * 4 + "rem",
  table_cell_xxxl: CELL_WIDTH_REM * 6 + "rem",
};
