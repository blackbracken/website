import { Component, For } from "solid-js";
import { sectionTitleClass, textClass } from "../app.css";
import PlainText from "../atoms/PlainText";
import SectionTitleText from "../atoms/SectionTitleText";

type SingleCareer = { companyName: string; details: string[] };
type CareerProps = { careerHistory: SingleCareer[] };

const Career: Component<CareerProps> = (props) => (
  <section>
    <SectionTitleText text="CAREER" />
    <ul>
      <For each={props.careerHistory}>
        {(career: SingleCareer, _) => (
          <li>
            <PlainText text={career.companyName} />
            <ul>
              <For each={career.details}>
                {(detail: string, _) => (
                  <li>
                    <PlainText text={detail} />
                  </li>
                )}
              </For>
            </ul>
          </li>
        )}
      </For>
    </ul>
  </section>
);

export default Career;
