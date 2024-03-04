import { lightTheme, darkTheme } from "./theme";

export function getThemeConfig(theme) {
  if (theme === "light") {
    return lightTheme;
  }
  if (theme === "dark") {
    return darkTheme;
  }
  return lightTheme;
}
