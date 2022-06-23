import { Component, For } from "solid-js";
import { sectionTitleClass, textClass } from "../app.css";

type Experience = { categoryName: string; items: string[] };
type ExperiencesProps = { experienceList: Experience[] };

const Experiences: Component<ExperiencesProps> = ({ experienceList }) => (
  <section>
    <h2 class={sectionTitleClass}>EXPERIENCES</h2>
    <ul>
      <For each={experienceList}>
        {(experience: Experience, _: any) => (
          <li>
            <p class={textClass}>{experience.categoryName}</p>
            <ul>
              <For each={experience.items}>
                {(item: string, _: any) => (
                  <li>
                    <p class={textClass}>{item}</p>
                  </li>
                )}
              </For>
            </ul>
          </li>
        )}
      </For>
    </ul>
    <p class={textClass}>[*]: more experienced</p>
  </section>
);

export default Experiences;
