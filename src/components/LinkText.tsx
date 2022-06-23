import { Component } from "solid-js";
import { textClass as textClass } from "../app.css";

type LinkTextProps = {
  text: string;
  url: string;
};
const LinkText: Component<LinkTextProps> = ({ text, url }) => (
  <li>
    <a class={textClass} href={url}>
      {text}
    </a>
  </li>
);

export default LinkText;
