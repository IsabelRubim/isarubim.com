import Link from 'next/link';

import utilStyles from '../../styles/utils.module.scss';

const getRandomColor = () => {
  const colors = ['purpleText', 'yellowText', 'greenWaterText', 'turquoiseText'];
  return colors[Math.floor(Math.random() * colors.length)];
};

const RandomColor = ({ label, linkExternal, link }) => {
  return (
    <>
      {
        linkExternal ? (
          <a 
            target='_blank' 
            href={link}
            className={utilStyles[getRandomColor()]}
          >
            {label}
          </a>
        ) : (
          <Link href={link}>
            <a className={utilStyles[getRandomColor()]}>
              {label}
            </a>
          </Link>  
        )
      }
    </>
  )
};

export default RandomColor;