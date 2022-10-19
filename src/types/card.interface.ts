import { Founders } from "../enums/founders.enum";
import { AcademicTopics } from "../enums/topics.enum";

export interface CardProps {
  display: "light" | "dark";
  title: string;
  theme: "playful" | "mindful";
  founderName: Founders;
  topic: AcademicTopics;
  githubUrl: string;
  imagePath: string | undefined;
}
