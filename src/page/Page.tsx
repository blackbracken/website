import { Component } from "solid-js";
import Name from "../components/Name";
import SeeAlso from "../components/SeeAlso";
import Title from "../components/Title";
import Interests from "../components/Interests";
import Career from "../components/Career";
import Experiences from "../components/Experiences";

export const Page: Component = () => {
  const destinations = [
    { text: "GitHub", url: "https://github.com/blackbracken" },
    { text: "Twitter", url: "https://twitter.com/black_bracken" },
    { text: "Email: me[at]bracken.black".replace("[at]", "@") },
  ];

  const interests = [
    { overview: "Code (type-safe and expressive)" },
    { overview: "Software Architecture" },
    { overview: "Android", details: ["Jetpack Compose"] },
  ];

  const careerHistory = [
    {
      companyName: "*******, Inc.",
      details: ["2022/04 ~", "Software Engineer"],
    },
    {
      companyName: "CyberAgent, Inc.",
      details: ["2021/08 ~ 2021/12", "Part-time employee (Android)"],
    },
    {
      companyName: "Fenrir, Inc.",
      details: ["2020/09", "Internship (Android)"],
    },
    {
      companyName: "CyberAgent, Inc.",
      details: ["2020/08", "Internship (Android)"],
    },
    {
      companyName: "pixiv, Inc.",
      details: ["2019/09", "Internship (Android)"],
    },
    {
      companyName: "Yahoo Japan Corp.",
      details: ["2019/03", "Internship (Android)"],
    },
  ];

  const experienceList = [
    {
      categoryName: "Language",
      items: ["Kotlin*", "Rust", "Java* (~ 11)", "Scala (2)"],
    },
    {
      categoryName: "Platform",
      items: ["Android*", "Server-side"],
    },
  ];

  return (
    <div class="page">
      <Title />
      <Name realName="Yoshikane Fumitaka" />
      <SeeAlso dests={destinations} />
      <Interests interests={interests} />
      <Experiences experienceList={experienceList} />
      <Career careerHistory={careerHistory} />
    </div>
  );
};
