import { Component } from "solid-js";
import { sectionTitleClass } from "../app.css";

type SectionTitleTextProps = { text: string };

const SectionTitleText: Component<SectionTitleTextProps> = ({ text }) => (
  <h2 class={sectionTitleClass}>{text}</h2>
);

export default SectionTitleText;
