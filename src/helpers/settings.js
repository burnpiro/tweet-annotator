import hapIcon from "./happiness.svg";
import fearIcon from "./fear.svg";
import angIcon from "./anger.svg";
import neutIcon from "./neutral.svg";
import sadIcon from "./sad.svg";
import disIcon from "./disgusted.svg";
import admIcon from "./admiration.svg";
import expIcon from "./expectancy.svg";
import surpIcon from "./surprise-face.svg";

export const labels = [
  {
    id: "radosc",
    label: "Radość",
    icon: hapIcon,
  },
  {
    id: "smutek",
    label: "Smutek",
    icon: sadIcon,
  },
  {
    id: "guilt",
    label: "Podziw",
    icon: admIcon,
  },
  {
    id: "wstret",
    label: "Wstręt",
    icon: disIcon,
  },
  {
    id: "zlosc",
    label: "Złość",
    icon: angIcon,
  },
  {
    id: "strach",
    label: "Strach",
    icon: fearIcon,
  },
  {
    id: "zaskoczenie",
    label: "Zaskoczenie",
    icon: surpIcon,
  },
  {
    id: "oczekiwanie",
    label: "Oczekiwanie",
    icon: expIcon,
  },
  {
    id: "neutralne",
    label: "Neutralne",
    icon: neutIcon,
  },
];
export const annotationKey = "annotated";
export const skippedKey = "skipped";
export const userKey = "user_id"