import { Component, For, JSXElement } from "solid-js";
import { match, P } from "ts-pattern";
import PlainText from "../atoms/PlainText";
import SectionTitleText from "../atoms/SectionTitleText";

type Interest = { overview: string; details?: string[] };

type InterestsProps = { interests: Interest[] };

const Interests: Component<InterestsProps> = ({ interests }) => (
  <section>
    <SectionTitleText text="INTERESTS" />
    <ul>
      <For each={interests}>
        {(interest: Interest, _) =>
          match<Interest, JSXElement>(interest)
            .with(
              { overview: P.string, details: P.array(P.string) },
              ({ overview, details }) => (
                <li>
                  <PlainText text={overview} />
                  <ul>
                    <For each={details}>
                      {(detail) => (
                        <li>
                          <PlainText text={detail} />
                        </li>
                      )}
                    </For>
                  </ul>
                </li>
              )
            )
            .with({ overview: P.string }, ({ overview }) => (
              <li>
                <PlainText text={overview} />
              </li>
            ))
            .exhaustive()
        }
      </For>
    </ul>
  </section>
);

export default Interests;
