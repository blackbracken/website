import { Component, For, JSXElement } from "solid-js";
import { match, P } from "ts-pattern";
import { sectionTitleClass } from "../app.css";
import LinkText from "./LinkText";
import PlainText from "./PlainText";

type Destination = {
  text: string;
  url?: string;
};

type SeeAlsoProps = { dests: Destination[] };

const SeeAlso: Component<SeeAlsoProps> = ({ dests }) => (
  <section>
    <h2 class={sectionTitleClass}>SEE ALSO</h2>
    <ul>
      <For each={dests}>
        {(dest: Destination, _: any) =>
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
