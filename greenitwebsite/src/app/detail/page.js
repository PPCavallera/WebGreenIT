'use client'

import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '../page.module.css'
import { useSearchParams } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default function Detail() {
  const searchParams = useSearchParams();
  const imgNb = searchParams.get('nb');
  const imgPath = '/img/image' + imgNb + '_400.jpg';
  return (
    <main className={styles.main}>
      <p>
        Le détail d'une image aussi redimensionnée
      </p>
      <Image
        src={imgPath} width={700} height={400}>
      </Image>
    </main >
  );
}
