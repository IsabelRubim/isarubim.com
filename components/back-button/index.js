import React from 'react';
import { useRouter } from 'next/router';
import styles from './style.module.scss';

const BackButton = ({ label = 'Voltar', path }) => {
  const router = useRouter();

  return (
    <div className={styles.toBack}>
      <a onClick={() => (path ? router.push(path) : history.back())}>
        ← {label}
      </a>
    </div>
  );
};

export default BackButton;
