import styles from './style.module.scss';

const BuyMeACoffee = () => {
  return (
    <a href="https://www.buymeacoffee.com/isabelrubim" target="_blank">
      <img
        src="https://cdn.buymeacoffee.com/buttons/v2/default-green.png"
        alt="Buy Me A Coffee"
        className={styles.buyMeACoffee}
      />
    </a>
  );
};

export default BuyMeACoffee;
