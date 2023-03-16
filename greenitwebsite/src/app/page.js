import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Link from "next/link";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={styles.main}>
      <div>
        <p>
          Une galerie d'images redimensionnées
        </p>
      </div>
      <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          <Link href={{ pathname: '/detail', query: { nb: '0' } }}>
            {/* <a href="/detail"
              target="_blank"
              rel="noopener noreferrer"> */}

            <Image
              src="/img/image0_150.jpg" width={150} height={100}>
            </Image>

          </Link>
          <Link href={{ pathname: '/detail', query: { nb: '1' } }}><Image
            src="/img/image1_150.jpg" width={150} height={100}>
          </Image>

          </Link>
          <Link href={{ pathname: '/detail', query: { nb: '2' } }}><Image
            src="/img/image2_150.jpg" width={150} height={100}>
          </Image>

          </Link>
          <Link href={{ pathname: '/detail', query: { nb: '3' } }}><Image
            src="/img/image3_150.jpg" width={150} height={100}>
          </Image>

          </Link>
          <Link href={{ pathname: '/detail', query: { nb: '4' } }}><Image
            src="/img/image4_150.jpg" width={150} height={100}>
          </Image>

          </Link>
          <Link href={{ pathname: '/detail', query: { nb: '5' } }}><Image
            src="/img/image5_150.jpg" width={150} height={100}>
          </Image>

          </Link>
          <Link href={{ pathname: '/detail', query: { nb: '6' } }}><Image
            src="/img/image6_150.jpg" width={150} height={100}>
          </Image>

          </Link>
          <Link href={{ pathname: '/detail', query: { nb: '7' } }}><Image
            src="/img/image7_150.jpg" width={150} height={100}>
          </Image>

          </Link>
          <Link href={{ pathname: '/detail', query: { nb: '8' } }}><Image
            src="/img/image8_150.jpg" width={150} height={100}>
          </Image>

          </Link>
          <Link href={{ pathname: '/detail', query: { nb: '9' } }}><Image
            src="/img/image9_150.jpg" width={150} height={100}>
          </Image>

          </Link>
        </div>
      </div>
    </main >
  )
}
