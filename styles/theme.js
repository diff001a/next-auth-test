import { createTheme } from "@mui/material/styles";
import { colors, sizes } from "@/styles/variables";

const theme = createTheme({
  palette: {
    background: {
      default: colors.background
    },
    primary: {
      main: colors.primary,
      light: colors.primaryLight,
      dark: colors.primaryDark,
      contrastText: "#fff"
    },
    secondary: {
      main: colors.secondary,
      light: colors.secondaryLight,
      dark: colors.secondaryDark,
      contrastText: colors.secondaryText
    },
    text: {
      primary: colors.text
    }
  },
  typography: {
    fontFamily: [
      "-apple-system",
      "system-ui",
      "Segoe UI",
      "Hiragino Kaku Gothic ProN",
      "Hiragino Sans",
      "ヒラギノ角ゴ ProN W3",
      "Arial",
      "メイリオ",
      "Meiryo",
      "sans-serif"
    ].join(",")
  },
  shadows: Array(25).fill("none"),
  components: {
    MuiInputLabel: {
      styleOverrides: {}
    },
    MuiFormControlLabel: {
      styleOverrides: {
        label: {}
      }
    },
    MuiTextField: {
      defaultProps: {
        variant: "outlined",
        size: "small"
      },
      filled: {
        background: "#ccc"
      }
    },
    MuiCheckbox: {
      defaultProps: {
        color: "primary"
      }
    },
    MuiSelect: {},
    MuiRadio: {
      defaultProps: {
        color: "primary"
      }
    },
    MuiSwitch: {
      defaultProps: {
        color: "primary"
      }
    },
    MuiButton: {
      defaultProps: {
        color: "primary",
        variant: "contained"
      }
    },
    MuiSelect: {
      defaultProps: {
        variant: "standard"
      }
    }
  }
});

export default theme;
