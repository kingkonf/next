import React from 'react'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const blogpost = () => {
  return (
    <>
    <div className={styles.con}>
    <br/>

    <h1 className={styles.h1}>Frequently Asked Questions</h1>
    <br/>

    <div className="faq">
      <h2 className={styles.h1}> <Link href="/blogpost/ques1">Question 1?</Link></h2>
      <div >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <br/>
    <div className={styles.faq}>
      <h2 className={styles.h1} > <Link href="/blogpost/ques2">Question 2?</Link></h2>
      <div >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
    <br/>

    <div className={styles.faq}>
      <h2 className={styles.h1}> <Link href="/blogpost/ques3">Question 3?</Link></h2>
      <div >
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
    </>
  )
}

export default blogpost