export const description =
  "Sou Engenheira de Software, tenho uma grande paixão por criar coisas que envolve as pessoas e possam impactá-las de uma forma positiva. Além disso, amo livros, manhãs de sol e cookies 🍪";

export const siteTitle = "Isabel Rubim";

export const LINKS = [
  {
    id: 1,
    label: "CV",
    link: "/cv",
    linkExternal: true,
  },
  {
    id: 2,
    label: "Blog",
    link: "/blog",
    linkExternal: false,
  },
  {
    id: 3,
    label: "GitHub",
    link: "https://github.com/IsabelRubim",
    linkExternal: true,
  },
  {
    id: 4,
    label: "LinkedIn",
    link: "https://www.linkedin.com/in/isabelrubim/",
    linkExternal: true,
  },
  {
    id: 5,
    label: "Twitter",
    link: "https://twitter.com/belrubim",
    linkExternal: true,
  },
  {
    id: 6,
    label: "Compre me um café",
    link: "https://ko-fi.com/isabelrubim",
    linkExternal: true,
  },
];

export const goToLinks = ({ category, label, link }) => {
  gtag.event({
    action: "go_to_link",
    category: `links - ${category}`,
    label,
    value: link,
  });
};
