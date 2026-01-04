export const darkmode = $state({ on: true });

export function setDarkMode(value) {
  darkmode.on = value;
}
