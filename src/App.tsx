import { Component, createEffect, createSignal } from "solid-js";
import {
  DarkThemeColor,
  darkTheme,
  LightThemeColor,
  lightTheme,
} from "./app.css";
import { Page } from "./page/Page";

export const App: Component = () => {
  const [onDarkTheme, setDarkTheme] = createSignal(true);

  createEffect(() => {
    document.getElementsByTagName("body")[0].style.backgroundColor =
      onDarkTheme() ? DarkThemeColor : LightThemeColor;
  });

  return (
    <div class={onDarkTheme() ? darkTheme : lightTheme}>
      <Page />
    </div>
  );
};
