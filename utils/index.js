export const description = `I am a Senior Software Engineer with more than 5 years of experience 
developing scalable and impactful web applications. I specialize in React, Next.js, JavaScript, 
TypeScript, and Node.js, alongside various tools in this ecosystem. I possess strong skills in 
front-end architecture, performance optimization, and UX-focused development.`;

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

export const PROJECTS_DETAILS = {
  'web3-todo-monorepo': {
    label: 'Web3 To-Do',
    image: '/projects/web3-todo.png',
    languages: ['TypeScript', 'Solidity'],
    libraries: [
      'React',
      'RainbowKit',
      'Wagmi',
      'Ethers.js',
      'Apollo Server/Client',
      'TailwindCSS',
    ],
    fullStack: ['Front-end', 'Back-end'],
    tools: ['Hardhat', 'Vite', 'pnpm'],
  },
};

export const getStringWithSeparator = (string, limit, separator = '[...]') => {
  if (!string) return;

  let finalString = string;
  const halfLimit = Math.floor((limit - separator.length) / 2);

  if (finalString.length > limit) {
    const initialString = string.substring(0, halfLimit);
    const endString = string.substring(
      string.length - halfLimit,
      string.length
    );
    finalString = initialString + separator + endString;
  }

  return finalString;
};
