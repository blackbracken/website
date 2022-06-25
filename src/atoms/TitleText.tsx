import { Component } from "solid-js";
import { topTitleClass } from "../app.css";

type TitleTextProps = { text: string };

const TitleText: Component<TitleTextProps> = (props) => (
  <h1 class={topTitleClass}>{props.text}</h1>
);

export default TitleText;
