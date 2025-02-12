import React from 'react';

import styles from './style.module.scss';

const BackButton = () => {
    return (
        <div className={styles.toBack}>
        <a onClick={() => history.back()}>← Voltar</a>
      </div>
    )
}

export default BackButton;