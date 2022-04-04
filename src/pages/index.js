import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Typography } from '@mui/material'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

import Timer from '../components/Timer'

export default function Home() {
  const router = useRouter()

  const [message, setMessage] = useState(". . .")
  const [timestamp, setTimestamp] = useState("")

  useEffect(() => {
    const text = router.query.m
    console.log("useEffect ran", text, router.query)
    setMessage(router.query.m)
    setTimestamp(router.query.t)
  }, [router.isReady])

  console.log(router)
  return (
    <div className={styles.container}>
      <Head>
        <title>Countdown App</title>
        <meta name="description" content="Created by Trillium Smith" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Typography variant="h1" className={styles.title} sx={{ fontWeight: 'bold' }}>
          {message}
        </Typography>

        <Timer timestamp={timestamp} />
      </main>

      <footer className={styles.footer}>
        Powered by{" "}
        <Typography sx={{ display: "inline-block", whiteSpace: "pre", color: 'blue', fontWeight: 'bold' }}>
          {' Because();'}
        </Typography>
      </footer>
    </div>
  )
}
