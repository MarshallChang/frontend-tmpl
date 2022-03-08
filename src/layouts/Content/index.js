import styles from './index.less';

export default (props) => {
  return <div className={styles.content}>{props.children}</div>;
};
