type Social = {
  label: string;
  link: string;
};

type Presentation = {
  mail: string;
  title: string;
  description: string;
  socials: Social[];
  profile?: string;
};

const presentation: Presentation = {
  mail: "gabriel@bdd.is",
  title: "Eai, me chamo Gabriel 😁",
  // profile: "/profile.webp",
  description:
    "TODO: not boring description about me.",
  socials: [
    {
      label: "X",
      link: "https://twitter.com/_GabrielBerto",
    },
    {
      label: "Github",
      link: "https://github.com/Gabrielbdd",
    },
  ],
};

export default presentation;
