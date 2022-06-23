import { Component, For, JSXElement } from "solid-js";
import { match, P } from "ts-pattern";
import { sectionTitleClass, textClass } from "../app.css";

type Interest = { overview: string; details?: string[] };

type InterestsProps = { interests: Interest[] };

const Interests: Component<InterestsProps> = ({ interests }) => (
  <section>
    <h2 class={sectionTitleClass}>INTERESTS</h2>
    <ul>
      <For each={interests}>
        {(interest: Interest, _: any) =>
          match<Interest, JSXElement>(interest)
            .with(
              { overview: P.string, details: P.array(P.string) },
              ({ overview, details }) => (
                <li>
                  <p class={textClass}>{overview}</p>
                  <ul>
                    <For each={details}>
                      {(detail) => (
                        <li>
                          <p class={textClass}>{detail}</p>
                        </li>
                      )}
                    </For>
                  </ul>
                </li>
              )
            )
            .with({ overview: P.string }, ({ overview }) => (
              <li>
                <p class={textClass}>{overview}</p>
              </li>
            ))
            .exhaustive()
        }
      </For>
    </ul>
  </section>
);

export default Interests;
