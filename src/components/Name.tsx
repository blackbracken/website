import { Component } from "solid-js";
import { sectionTitleClass, textClass } from "../app.css";

type NameProps = { realName: string };

const Name: Component<NameProps> = ({ realName }) => (
  <section>
    <h2 class={sectionTitleClass}>NAME</h2>
    <p class={textClass}>{realName}</p>
  </section>
);

export default Name;
