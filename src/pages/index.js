import { useSelector, useDispatch } from 'umi';
import styles from './index.less';

export default function IndexPage() {
  const app = useSelector((state) => state.app);
  const dispatch = useDispatch();

  return <div className={styles.home}>home</div>;
}
