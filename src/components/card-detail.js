import calculator from "../assests/icon-calculator.svg";
import karma from "../assests/icon-karma.svg";
import supervisor from "../assests/icon-supervisor.svg";
import teamBuilder from "../assests/icon-team-builder.svg";

const data = [
  {
    id: "supervisor",
    name: "Supervisor",
    info: "Monitors activity to identify project roadblocks",
    icon: supervisor,
    alt: "Magnify icon for supervisor card",
  },
  {
    id: "team-builder",
    name: "Team Builder",
    info: "Scans our talent network to create the optimal team for your project",
    icon: teamBuilder,
    alt: "Home page icon for team builer card",
  },
  {
    id: "karma",
    name: "Karma",
    info: "Regularly evaluates our talent to ensure quality",
    icon: karma,
    alt: "Light bulb icon for karma card",
  },
  {
    id: "calculator",
    name: "Calculator",
    info: "Uses data from past projects to provide better delivery estimates",
    icon: calculator,
    alt: "Computer icon for calculator card",
  },
];

export default data;
