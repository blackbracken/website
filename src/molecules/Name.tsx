import { Component } from "solid-js";
import PlainText from "../atoms/PlainText";
import SectionTitleText from "../atoms/SectionTitleText";

type NameProps = { realName: string };

const Name: Component<NameProps> = ({ realName }) => (
  <section>
    <SectionTitleText text="NAME" />
    <PlainText text={realName} />
  </section>
);

export default Name;
