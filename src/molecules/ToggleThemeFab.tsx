import { Component } from "solid-js";
import { themeIconClass, toggleThemeButtonClass } from "../app.css";

type ToggleThemeFabProps = { onDarkTheme: boolean; onClick: () => void };

const ToggleThemeFab: Component<ToggleThemeFabProps> = (
  props: ToggleThemeFabProps
) => (
  <div class={toggleThemeButtonClass} onClick={props.onClick}>
    <img
      class={themeIconClass}
      src={props.onDarkTheme ? "/img/dark_mode.svg" : "/img/light_mode.svg"}
      alt=""
    />
  </div>
);

export default ToggleThemeFab;
