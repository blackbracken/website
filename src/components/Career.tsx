import { Component, For } from "solid-js";
import { sectionTitleClass, textClass } from "../app.css";

type SingleCareer = { companyName: string; details: string[] };
type CareerProps = { careerHistory: SingleCareer[] };

const Career: Component<CareerProps> = ({ careerHistory }) => (
  <section>
    <h2 class={sectionTitleClass}>CAREER</h2>
    <ul>
      <For each={careerHistory}>
        {(career: SingleCareer, _: any) => (
          <li>
            <p class={textClass}>{career.companyName}</p>
            <ul>
              <For each={career.details}>
                {(detail: string, _: any) => (
                  <li>
                    <p class={textClass}>{detail}</p>
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
