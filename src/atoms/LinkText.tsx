import { Component } from "solid-js";
import { textClass as textClass } from "../app.css";

type LinkTextProps = {
  text: string;
  url: string;
};
const LinkText: Component<LinkTextProps> = (props) => (
  <li>
    <a class={textClass} href={props.url}>
      {props.text}
    </a>
  </li>
);

export default LinkText;
