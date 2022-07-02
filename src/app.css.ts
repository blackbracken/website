import { createTheme, globalStyle, style } from "@vanilla-extract/css";

export const LightThemeColor = "#F2F2F2";
export const DarkThemeColor = "#1A1A1A";

export const [lightTheme, vars] = createTheme({
  color: {
    background: LightThemeColor,
    text: DarkThemeColor,
  },
  toggleButton: {
    background: DarkThemeColor,
    outline: `${LightThemeColor} solid`,
  },
});

export const darkTheme = createTheme(vars, {
  color: {
    background: DarkThemeColor,
    text: LightThemeColor,
  },
  toggleButton: {
    background: LightThemeColor,
    outline: `${DarkThemeColor} solid`,
  },
});

globalStyle("*", {
  fontFamily: "Raleway, sans-serif",
  margin: 0,
});

globalStyle("body", {
  overscrollBehaviorY: "none",
});

globalStyle("li", {
  marginTop: "0.5em",
  marginBottom: "0.5em",
});

globalStyle("h1, h2, h3, a, p, li", {
  color: vars.color.text,
});

globalStyle(".page", {
  display: "flex",
  flexDirection: "column",
  marginTop: "5%",
  marginBottom: "5%",
  marginLeft: "auto",
  marginRight: "auto",
  width: "80%",
  rowGap: "16px",

  "@media": {
    "screen and (min-width: 800px)": {
      marginTop: "20%",
      marginBottom: "20%",
      width: "45%",
    },
  },
});

globalStyle(".page .page-item", {
  display: "flex",
  flexDirection: "column",
  rowGap: "8px",
});

export const textClass = style({
  fontSize: "4vw",
  fontWeight: 600,

  "@media": {
    "screen and (min-width: 800px)": {
      fontSize: "1.25vw",
    },
  },
});

export const topTitleClass = style({
  fontSize: "8vw",
  fontWeight: 600,

  "@media": {
    "screen and (min-width: 800px)": {
      fontSize: "4vw",
    },
  },
});

export const sectionTitleClass = style({
  fontSize: "6vw",
  fontWeight: 700,

  "@media": {
    "screen and (min-width: 800px)": {
      fontSize: "2vw",
    },
  },
});

export const toggleThemeButtonClass = style({
  position: "fixed",
  right: "5%",
  bottom: "5%",

  width: "15vw",
  height: "15vw",
  borderRadius: "8%",

  backgroundColor: vars.toggleButton.background,
  outline: vars.toggleButton.outline,

  "@media": {
    "screen and (min-width: 800px)": {
      width: "5vw",
      height: "5vw",
      top: "5%",
    },
  },
});

export const themeIconClass = style({
  position: "absolute",
  transform: "translate(-50%, -50%)",
  top: "50%",
  left: "50%",

  width: "60%",
  height: "60%",
  margin: "0 auto",
});
