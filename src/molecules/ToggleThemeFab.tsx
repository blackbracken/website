import { Component } from "solid-js";
import { themeIconClass, toggleThemeButtonClass } from "../app.css";

export const DarkModeImgPath = "/img/dark_mode.svg";
export const LightModeImgPath = "/img/light_mode.svg";

type ToggleThemeFabProps = { onDarkTheme: boolean; onClick: () => void };

const ToggleThemeFab: Component<ToggleThemeFabProps> = (
  props: ToggleThemeFabProps
) => (
  <div class={toggleThemeButtonClass} onClick={props.onClick}>
    <img
      class={themeIconClass}
      src={props.onDarkTheme ? DarkModeImgPath : LightModeImgPath}
      alt=""
    />
  </div>
);

export default ToggleThemeFab;
