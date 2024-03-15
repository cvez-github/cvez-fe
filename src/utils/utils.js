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

export function formatCVData(data) {
  /**
   * CV object:
   * {
   *  id: string,
   *  name: string,
   *  path: string,
   *  url: string,
   *  extraction: {...}
   * }
   */
  return data.map((item) => ({
    key: item.id,
    name: item.name,
    path: item.path,
    score: null,
  }));
}

export function formatJDData(data) {
  /**
   * JD object:
   * {
   *  id: string,
   *  title: string,
   *  content: string
   * }
   */
  return data.map((item) => ({
    key: item.id,
    title: item.title,
    content: item.content.slice(0, 100) + "...",
  }));
}

export function roundNumber(num) {
  return ((num + Number.EPSILON) * 100).toFixed(2);
}
