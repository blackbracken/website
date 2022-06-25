import { Component } from "solid-js";
import { textClass } from "../app.css";

type PlainTextProps = { text: string };

const PlainText: Component<PlainTextProps> = ({ text }) => (
  <p class={textClass}>{text}</p>
);

export default PlainText;
