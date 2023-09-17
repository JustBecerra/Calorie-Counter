import { Palette, createTheme } from "@mui/material/styles";
import { blue, red } from "@mui/material/colors";
import { TypographyOptions } from "@mui/material/styles/createTypography";

declare module "@mui/material/styles" {
  interface Theme {
    typography?: {
      inter?: React.CSSProperties;
      lora?: React.CSSProperties;
    };
  }

  interface ThemeOptions {
    typography?:
      | TypographyOptions
      | ((palette: Palette) => TypographyOptions)
      | (undefined & {
          inter?: React.CSSProperties;
          lora?: React.CSSProperties;
        });
  }

  interface TypographyPropsVariantOverrides {
    inter: true;
    lora: true;
  }

  interface TypographyClasses {
    inter: string;
    lora: string;
  }

  interface TypographyVariantsOptions {
    inter: React.CSSProperties;
    lora: React.CSSProperties;
  }

  interface TypographyVariants {
    inter: React.CSSProperties;
    lora: React.CSSProperties;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2e7d32",
    },
    secondary: {
      main: red[500],
    },
    info: {
      main: blue[500],
    },
    background: {
      default: "#f7f6f5",
      paper: "#d4d1c9",
    },
    common: {
      black: "black",
    },
  },
  typography: {
    inter: {
      fontFamily: ["Inter", "sans-serif"].join(" , "),
    },
    lora: {
      fontFamily: ["Lora", "sans-serif"].join(" , "),
    },
  },
});
