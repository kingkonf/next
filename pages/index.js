import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import Script from 'next/script'
import styles from '@/styles/Home.module.css'
// import Header from './blogpost/header'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
     <div className={styles.body}>

    {/* <Image 
    src="data:image/jpeg;base64,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"
   width="500" height= "500"></Image> */}
      <Head>
        <title>cool</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="hello" href="/"/>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
     
      <Script src='/sc.js'></Script>
     {/* <Header/> */}
      
      <main className={`${styles.main} ${inter.className}`}>
       

       
        <h1 className='myspan'>welcome</h1>

        <div className={styles.grid}>
          <a
            href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Docs <span>-&gt;</span>
            </h2>
            <p>
              Find in-depth information about Next.js features and&nbsp;API.
            </p>
          </a>

          <a
            href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Learn <span>-&gt;</span>
            </h2>
            <p>
              Learn about Next.js in an interactive course with&nbsp;quizzes!
            </p>
          </a>

          <a
            href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Templates <span>-&gt;</span>
            </h2>
            <p>
              Discover and deploy boilerplate example Next.js&nbsp;projects.
            </p>
          </a>

          <a
            href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
            className={styles.card}
            target="_blank"
            rel="noopener noreferrer"
          >
            <h2>
              Deploy <span>-&gt;</span>
            </h2>
            <p>
              Instantly deploy your Next.js site to a shareable URL
              with&nbsp;Vercel.
            </p>
          </a>
        </div>
      </main>
      </div>
    </>
  )
}
