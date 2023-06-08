import { Component, createEffect, createSignal, onMount } from "solid-js";
import {
  DarkThemeColor,
  darkTheme,
  LightThemeColor,
  lightTheme,
} from "./app.css";
import { Page } from "./page/Page";
import { DarkModeImgPath, LightModeImgPath } from "./molecules/ToggleThemeFab";

export const App: Component = () => {
  onMount(() => {
    [DarkModeImgPath, LightModeImgPath].forEach(path => new Image().src = path);
  });
  
  const [onDarkTheme, setDarkTheme] = createSignal(
    shouldUseDarkThemeAsDefault()
  );

  createEffect(() => {
    rewriteBackgroundColorOfBodyViaDom(
      onDarkTheme() ? DarkThemeColor : LightThemeColor
    );
  });

  return (
    <div class={onDarkTheme() ? darkTheme : lightTheme}>
      <Page onDarkTheme={onDarkTheme()} setOnDarkTheme={setDarkTheme} />
    </div>
  );
};

const shouldUseDarkThemeAsDefault = (): boolean =>
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const rewriteBackgroundColorOfBodyViaDom = (color: string) => {
  document.getElementsByTagName("body")[0].style.backgroundColor = color;
};
