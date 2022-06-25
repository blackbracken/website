import { Component } from "solid-js";
import { sectionTitleClass } from "../app.css";

type SectionTitleTextProps = { text: string };

const SectionTitleText: Component<SectionTitleTextProps> = (props) => (
  <h2 class={sectionTitleClass}>{props.text}</h2>
);

export default SectionTitleText;
