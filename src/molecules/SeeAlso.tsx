import { Component, For, JSXElement } from "solid-js";
import { match, P } from "ts-pattern";
import LinkText from "../atoms/LinkText";
import PlainText from "../atoms/PlainText";
import SectionTitleText from "../atoms/SectionTitleText";

type Destination = {
  text: string;
  url?: string;
};

type SeeAlsoProps = { dests: Destination[] };

const SeeAlso: Component<SeeAlsoProps> = (props) => (
  <section>
    <SectionTitleText text="SEE ALSO" />
    <ul>
      <For each={props.dests}>
        {(dest: Destination, _) =>
          match<Destination, JSXElement>(dest)
            .with({ text: P.string, url: P.string }, ({ text, url }) => (
              <li>
                <LinkText text={text} url={url} />
              </li>
            ))
            .with({ text: P.string }, ({ text }) => (
              <li>
                <PlainText text={text} />
              </li>
            ))
            .exhaustive()
        }
      </For>
    </ul>
  </section>
);

export default SeeAlso;
