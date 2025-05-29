import Link from 'next/link';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import dracula from 'react-syntax-highlighter/dist/cjs/styles/prism/dracula';

import styles from './style.module.scss';
import BuyMeACoffee from '../buyMeACoffee';

const renderers = {
  code: ({ node, inline, className, children, ...props }) => {
    const match = /language-(\w+)/.exec(className || '');
    return !inline && match ? (
      <SyntaxHighlighter
        style={dracula}
        language={match[1]}
        PreTag='div'
        {...props}
      >
        {String(children).replace(/\n$/, '')}
      </SyntaxHighlighter>
    ) : (
      <code className={className} {...props}>
        {children}
      </code>
    );
  },
};

export default function Markdown({ content }) {
  return (
    <>
      <div className={styles.markdown}>
        <ReactMarkdown components={renderers} children={content?.parent} />
      </div>

      <BuyMeACoffee />
    </>
  );
}
