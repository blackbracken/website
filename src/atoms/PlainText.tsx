import { Component } from "solid-js";
import { textClass } from "../app.css";

type PlainTextProps = { text: string };

const PlainText: Component<PlainTextProps> = (props) => (
  <p class={textClass}>{props.text}</p>
);

export default PlainText;
