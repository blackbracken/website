import { Component } from "solid-js";
import { topTitleClass } from "../app.css";

type TitleTextProps = { text: string };

const TitleText: Component<TitleTextProps> = ({ text }) => (
  <h1 class={topTitleClass}>{text}</h1>
);

export default TitleText;
