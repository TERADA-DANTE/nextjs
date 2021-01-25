import Link from 'next/link';
import { Grid } from 'semantic-ui-react';
import { motion } from 'framer-motion';
import styles from './ItemList.module.css';

export default function ItemList({ list }) {
  return (
    <Grid columns={3} divided>
      <Grid.Row>
        {list.map((item) => (
          <Grid.Column key={item.id}>
            <Link href={`/view/${item.id}`}>
              <a>
                <div className={styles.wrap}>
                  <motion.div
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img src={item.image_link} alt={item.name} className={styles.img_item} />
                  </motion.div>
                  <strong className={styles.title_item}>{item.name}</strong>
                  <span className={styles.txt_info}>
                    {item.category}
                    {' '}
                    {item.product_type}
                  </span>
                  <strong className={styles.num_price}>{item.price}</strong>
                </div>
              </a>
            </Link>
          </Grid.Column>
        ))}

      </Grid.Row>
    </Grid>
  );
}
