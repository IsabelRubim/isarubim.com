import Link from 'next/link';

import utilStyles from '../../styles/utils.module.scss';

const LinkColor = ({ label, linkExternal, link, onClick }) => {
  return (
    <>
      {linkExternal ? (
        <a
          onClick={onClick}
          target='_blank'
          href={link}
          className={utilStyles.customUnderlineLink}
        >
          {label}
        </a>
      ) : (
        <Link href={link} className={utilStyles.customUnderlineLink}>
          {label}
        </Link>
      )}
    </>
  );
};

export default LinkColor;
