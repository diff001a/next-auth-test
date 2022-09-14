//@ts-nocheck
import * as React from "react";
import { alpha, darken, lighten, styled } from "@mui/material/styles";
import { Button as ButtonBase } from "@mui/material";

const CssButton = styled(ButtonBase)(
  ({ width = "auto", height = "42px", theme }) => ({
    width: `${width}`,
    height: `${height}`,
    "&.MuiButton-contained": {
      boxShadow: `rgba(33, 37, 56, 0.2) 0px 3px 5px -2px`,
      fontWeight: "600",
      "&:hover": {
        opacity: "1",
        boxShadow: `rgba(33, 37, 56, 0.2) 0px 3px 5px -2px`
      }
    },
    "&.MuiButton-containedSecondary": {
      boxShadow: `rgba(33, 37, 56, 0.2) 0px 3px 5px -2px`,
      border: "1px solid var(--border)",
      fontWeight: "600",
      "&:hover": {
        opacity: "1",
        boxShadow: `rgba(33, 37, 56, 0.2) 0px 3px 5px -2px`
      },
      ".MuiTouchRipple-child": {
        backgroundColor: "#fff"
      }
    },
    "&.MuiButton-containedInherit": {
      "&:hover": {
        background: "#d0d0d0"
      }
    },
    "&.MuiButton-outlined": {
      background: "var(--background)",
      borderColor: alpha(theme.palette.primary.main, 0.3),
      backgroundColor: alpha(theme.palette.primary.main, 0.1),
      fontWeight: "600",
      "&:hover": {
        opacity: "1",
        backgroundColor: alpha(theme.palette.primary.main, 0.25)
      }
    }
  })
);

const Button = ({ ...props }: any) => {
  return <CssButton {...props} />;
};

export default Button;
