import { Component, For } from "solid-js";
import PlainText from "../atoms/PlainText";
import SectionTitleText from "../atoms/SectionTitleText";

type Experience = { categoryName: string; items: string[] };
type ExperiencesProps = { experienceList: Experience[] };

const Experiences: Component<ExperiencesProps> = ({ experienceList }) => (
  <section>
    <SectionTitleText text="EXPERIENCES" />
    <ul>
      <For each={experienceList}>
        {(experience: Experience, _) => (
          <li>
            <PlainText text={experience.categoryName} />
            <ul>
              <For each={experience.items}>
                {(item: string, _) => (
                  <li>
                    <PlainText text={item} />
                  </li>
                )}
              </For>
            </ul>
          </li>
        )}
      </For>
    </ul>
    <PlainText text="[*]: more experienced" />
  </section>
);

export default Experiences;
