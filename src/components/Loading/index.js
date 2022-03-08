import styles from './index.less';

export default () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderInner}></div>
    </div>
  );
};

/**
 * 彩虹加载状态
 */
const colorLoading = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.loaderInner}>
        <div className={styles.loaderLineWrap}>
          <div className={styles.loaderLine}></div>
        </div>
        <div className={styles.loaderLineWrap}>
          <div className={styles.loaderLine}></div>
        </div>
        <div className={styles.loaderLineWrap}>
          <div className={styles.loaderLine}></div>
        </div>
        <div className={styles.loaderLineWrap}>
          <div className={styles.loaderLine}></div>
        </div>
        <div className={styles.loaderLineWrap}>
          <div className={styles.loaderLine}></div>
        </div>
      </div>
    </div>
  );
};
