import { useTheme } from 'next-themes';

import styles from './style.module.scss';

const ThemeChanger = () => {
  const { theme, setTheme } = useTheme('dark');

  return (
    <div className={styles.toggle}>
      <input
        type='checkbox'
        id='checktoggle'
        checked={theme === 'dark' ? true : false}
        onChange={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      />
      <label htmlFor='checktoggle'></label>
    </div>
  );
};

export default ThemeChanger;
