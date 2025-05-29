export const description = `I'm a Senior Software Engineer with over 5 years of experience building scalable, high-impact web applications. 
  I specialize in React, Next.js, JavaScript, TypeScript, and Node.js, with strong skills in front-end architecture, performance 
  optimization, and UX-focused development.`;

export const siteTitle = 'Isabel Rubim';

export const LINKS = [
  {
    id: 2,
    label: 'Blog',
    link: '/blog',
    linkExternal: false,
  },
  {
    id: 3,
    label: 'GitHub',
    link: 'https://github.com/IsabelRubim',
    linkExternal: true,
  },
];

export const goToLinks = ({ category, label, link }) => {
  gtag.event({
    action: 'go_to_link',
    category: `links - ${category}`,
    label,
    value: link,
  });
};
